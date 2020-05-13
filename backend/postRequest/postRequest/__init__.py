import logging
import pyodbc
import json
import azure.functions as func
import os

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        # connect to database
        logging.debug('Starting connection to database...')
        conn = pyodbc.connect(os.environ['DatabaseConnectionString'])
        cursor = conn.cursor()
        logging.debug('Connected to database')

        # read JSON body
        req_body = req.get_json()
        logging.debug('Content of JSON body: ' + str(req_body))

        # insert data into SQL
        cursor.execute(
            '''INSERT INTO [dbo].[Performers] 
            (PerformerName, Email, City, State, Facebook, IG, Twitter, Website)
            VALUES (?,?,?,?,?,?,?,?)''', 
            (req_body['PerformerName'], 
            req_body['Email'], 
            req_body['City'], 
            req_body['State'], 
            req_body['Facebook'], 
            req_body['IG'],
            req_body['Twitter'],
            req_body['Website']
            )
        )
        # commit data to database
        logging.debug('Commiting new machine ID to database')
        conn.commit()
        logging.debug('Commit complete')
        # close connection
        conn.close()
        
        # POST request successful
        logging.info('Http trigger request complete')
        return func.HttpResponse(f"Successful request")
    except ValueError as jerr:
        logging.error("Incorrect JSON format " + str(jerr))
        return func.HttpResponse('Incorrect JSON format',status_code=400)
    except Exception as err:
        logging.error("String connection to the database failed " + str(err))
        return func.HttpResponse('Connection failed',status_code=500)
    finally:
        logging.info("Closing succesful request...")
     # no POST request was made
    logging.info("No POST request was made")
    return func.HttpResponse(   
        "Please pass a POST request in the request body",   
        status_code=400)