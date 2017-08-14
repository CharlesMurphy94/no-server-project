export const getPlanets = function(){
    return fetch('https://swapi.co/api/planets/?page=1')
    .then(response=>{
        return response.json()
    })

}