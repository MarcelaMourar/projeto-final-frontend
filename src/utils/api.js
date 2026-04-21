class DogFactsApi{
    constructor(){
        this._baseUrl = "https://dogapi.dog/api/v2/facts";
    }

    _checkResponse(res){
        if (res.ok){
            return res.json();
        }
        return Promise.reject(`Erro: ${res.status}`);
    }

    getRandomFact(){
        return fetch(this._baseUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(this._checkResponse);
    }
}

const dogFactsApi= new DogFactsApi();
export default dogFactsApi;