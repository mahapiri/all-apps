const API_KEY = '7C23E490-19EA-492E-8E4F-F36C5FE18A70';



async function loadRates() {
    let url = 'https://rest.coinapi.io/v1/assets?filter_asset_id=BTC';
    let options = {
        method: 'GET',
        headers: {
            'Accept': 'text/plain', 
            'X-CoinAPI-Key': API_KEY
        }
    };

    let response = await fetch(url, options);
    let result = response.json();
    console.log(result);
}

