import json
import logging
import os

import azure.functions as func
import pyodbc


def logmain(logger):
    logger.setLevel(logging.DEBUG)
    logger.setLevel(logging.ERROR)


def main(req: func.HttpRequest) -> func.HttpResponse:
    #logging.Logger.root.level = 10
    logging.info('Starting Python HTTP trigger function request')
    #logger = logging.getLogger(__name__)


    try:
        #database connection 
        conct = pyodbc.connect(os.environ['DatabaseConnectionString'])
        cursor = conct.cursor()
        logging.debug("Database connection successful")
        city = req.params.get('City') 
        pstate = req.params.get('Pstate') 
        logging.debug(req.params)
        logging.debug(req.route_params)
        #query to select everything from the Performers table and put results in a tuple then convert tuples into dictionary
        # qry = cursor.execute('''SELECT * FROM [dbo].[Performers] ''').fetchall()
        qry = cursor.execute('''SELECT * FROM [dbo].[Performers] WHERE City = ? OR Pstate = ?''', city, pstate).fetchall()
        logging.debug("Database query successful")
        column_names = [column[0] for column in cursor.description]
        rows = [dict(zip(column_names, row)) for row in qry]

        conct.commit()
        
        #logging 
        logging.info("Python HTTP trigger function request successful")
        return func.HttpResponse(json.dumps(rows)) #json.dumps to create JSON string
    except pyodbc.interfaceerror as connerr:
        logging.error("Database connection failed" + str(connerr))
    except pyodbc.operationalerror as synerr:
        logging.error("Database query failed" + str(synerr))
    except pyodbc.Error as err:
        logging.info("Python HTTP trigger function request unsuccessful" +  str(err))    
