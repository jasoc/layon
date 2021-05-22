const fetch = require('node-fetch');

class FetchData {

    static async callApi(api, method, headers, body) {
        
        try {

            const result = await fetch(api, {
                method: method,
                headers: headers,
                body: body
            });
    
            const data = await result.json();
            data.status = result.status;

            return data;

        } catch {}

    }

}

module.exports = FetchData;