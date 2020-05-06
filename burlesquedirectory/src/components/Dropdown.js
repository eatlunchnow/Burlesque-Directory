import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        return (
            <div className="condiv">
                <input type="hidden" name="country" id="countryId" value="US"/>
<select name="state" class="states order-alpha" id="stateId">
    <option value="">Select State</option>
</select>
<select name="city" class="cities order-alpha" id="cityId">
    <option value="">Select City</option>
</select>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
<script src="//geodata.solutions/includes/statecity.js"></script>

Thank you for using
            </div>
        )
    }
}

export default Dropdown;

/* https://www.npmjs.com/package/react-country-region-selector
https://www.npmjs.com/package/country-state-city */