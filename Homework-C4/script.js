// Task 1
// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1






let url = 'https://swapi.dev/api/planets/?page=1'

let btn = document.querySelector('#first')


function page1() {
    fetch(url)
        .then(res => {
            return res.json()

        })

        .then(data => {
            console.log(data);
            data.results.forEach(element => {
                let first10 = `

                <div>
        <h1>Planet </h1>
        <h2>${element.name} </h2>
        <span> Population: ${element.population}</span>
        <span> climate: ${element.climate}</span>
        <span> Gtravity: ${element.gravity} G</span>
    </div>
        `
                document.querySelector('body').insertAdjacentHTML('beforeend', first10)


            });

        })
}

page1();








