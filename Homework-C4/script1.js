// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// **API URL: ** https://swapi.dev/api/planets/?page=2

let url1 = 'https://swapi.dev/api/planets/?page=2'


function page2() {
    fetch(url1)
        .then(res => {
            return res.json()

        })

        .then(data => {
            console.log(data);
            data.results.forEach(element => {
                let second10 = `<div>
                <h1>Planet</h1>
        <h2>${element.name}</h2>
        <span> Population: ${element.population}</span>
        <span> climate: ${element.climate}</span>
        <span> Gtravity: ${element.gravity} G</span>
    </div>
        `
                document.querySelector('body').insertAdjacentHTML('beforeend', second10)


            });

        })
}


page2()