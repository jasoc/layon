const fetch = require('node-fetch');

class FetchData {

    static async callApi(api, method, headers, body) {
        
        const result = await fetch(api, {
            method: method,
            headers: headers,
            body: body
        });

        const data = await result.json();

        return data;
    }

}

module.exports = FetchData;