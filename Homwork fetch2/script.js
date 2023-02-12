/**
 * Crete button whwn the button is clicked,call the starwars api for the first person.
 * -Print the person name in <h1> tag
 * -Print the person status in a <table>
 * Height
 * Weight
 * Eye color
 * Hair color
 */

let url = 'https://swapi.dev/api/people/1'
let createTable = document.getElementById('create')

function keep() {

    fetch(url)
        .then(respon => {
            return respon.json();


        })
        .then(data => {
            // console.log(data)

            let createTable = `
        <tr>
        <th>height</th>
        <th>Weight</th>
        <th>Eye color</th>
        <th>Hair color</th>
        <th>Gender</th>
        </tr>
        <td>${data.height} cm</td>
        <td>${data.mass} kg</td> 
        <td>${data.eye_color}</td>
        <td>${data.hair_color}</td>
        <td>${data.gender}</td> `
            document.querySelector('table').insertAdjacentHTML('beforeend', createTable);
            document.querySelector('h1').innerText = data.name;
        })
        .catch(error => console.log(error));
};
createTable.addEventListener('click', () => {
    createTable.style.display = 'none';
    keep()

});

// let refresh = document.querySelector('a').style.visibility = 'hidden';

// refresh.addEventListener ('click', () => {
//     refresh.style.visibility = 'visible';
//     keep ()
// } )