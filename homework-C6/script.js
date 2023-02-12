// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2  


let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
let empty;
fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data);

        let colon = `

        <tr>
        <th>id</th>
        <th>Name</th>
        <th>LastName</th>
        <th>e-mail</th>
        <th>age</th>
        <th>Gender</th>
        <th>Grade</th>
        </tr>
        `
        document.querySelector('#table1').insertAdjacentHTML('beforeend',colon)
        for (let element of data ){

         const upTo3 =[]
         if (element.averageGrade > 3 ){

           upTo3.push(element)

         }
         for (average of upTo3 ){
            let pushElementInTable = `
            <tr>
            <td>${average.id}</td>
            <td>${average.firstName}</td>
            <td>${average.lastName}</td>
            <td>${average.email}</td>
            <td>${average.age}</td>
            <td>${average.gender}</td>
            <td>${average.averageGrade}</td>
            </tr>
            `
            document.querySelector('#table1').insertAdjacentHTML('beforeend', pushElementInTable)
            }
         }


        /////////////////////////////////////////////////////////////////////
        ////// All female student names with an average grade of 5 ////////////
        //////////////////////////////////////////////////////////////////////

                let colon1 = `
         <tr>
         <th>id</th>
         <th>Name</th>
         <th>LastName</th>
         <th>e-mail</th>
         <th>age</th>
         <th>Grade</th>
         </tr>
         `
                document.querySelector('#table2').insertAdjacentHTML('beforeend', colon1)
                for (let element of data) {
                    console.log(element);
                    const upTo5 = []
                    if (element.averageGrade == 5 && element.gender === 'Female') {

                        upTo5.push(element)

                    }
                    for (average of upTo5) {
                        let pushElementInTable = `
             <tr>
             <td>${average.id}</td>
             <td>${average.firstName}</td>
             <td>${average.lastName}</td>
             <td>${average.email}</td>
             <td>${average.age}</td>
             <td>${average.averageGrade}</td>
             </tr>
             `
                        document.querySelector('#table2').insertAdjacentHTML('beforeend', pushElementInTable)
                    }
                }


        //////////////////////////////////////////////////////////////////////////////////////////////
        //////All male student full names who live in Skopje and are over 18 years old////////////
        //////////////////////////////////////////////////////////////////////////////////////////

                let colon3 = `
         <tr>
         <th>id</th>
         <th>Name</th>
         <th>LastName</th>
         <th>e-mail</th>
         <th>age</th>
         <th>Grade</th>
         <th>City</th>

         </tr>
         `
                document.querySelector('#table3').insertAdjacentHTML('beforeend', colon3)
                for (let element of data) {
                    console.log(element);
                    const upTo5 = []
                    if (element.city == 'Skopje' && element.gender === 'Male') {
                        upTo5.push(element)
                    }
                    for (average of upTo5) {
                        let pushElementInTable = `
             <tr>
             <td>${average.id}</td>
             <td>${average.firstName}</td>
             <td>${average.lastName}</td>
             <td>${average.email}</td>
             <td>${average.age}</td>
             <td>${average.averageGrade}</td>
             <td>${average.city}</td>

             </tr>
             `
                        document.querySelector('#table3').insertAdjacentHTML('beforeend', pushElementInTable)
                    }
                }

        ////////////////////////////////////////////////////////////////////////////////////////////
        ////   The average grades of all female students over the age of 24   //////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////
        let colon4 = `
        <tr>
        <th>id</th>
        <th>Name</th>
        <th>LastName</th>
        <th>e-mail</th>
        <th>age</th>
        <th>Grade</th>
        <th>City</th>
       
        </tr>
        `
        document.querySelector('#table4').insertAdjacentHTML('beforeend', colon4)
        for (let element of data) {
            console.log(element);
            const upTo5 = []
            if (element.age > 24 && element.gender === 'Female') {
                upTo5.push(element)
            }
            for (average of upTo5) {
                let pushElementInTable = `
            <tr>
            <td>${average.id}</td>
            <td>${average.firstName}</td>
            <td>${average.lastName}</td>
            <td>${average.email}</td>
            <td>${average.age}</td>
            <td>${average.averageGrade}</td>
            <td>${average.city}</td>
       
            </tr>
            `
                document.querySelector('#table4').insertAdjacentHTML('beforeend', pushElementInTable)
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////
        //////   All male students with a name starting with B and average grade over 2 ///////////////
        //////////////////////////////////////////////////////////////////////////////////////////


        let colon5 = `
        <tr>
        <th>id</th>
        <th>Name</th>
        <th>LastName</th>
        <th>e-mail</th>
        <th>age</th>
        <th>Grade</th>
        <th>City</th>
       
        </tr>
        `
        document.querySelector('#table5').insertAdjacentHTML('beforeend', colon5)
        for (let element of data) {
            console.log(element);
            const upTo5 = []
            if (element.firstName[0]  === 'B' && element.gender === 'Male' && element.averageGrade > 2) {
                upTo5.push(element)
            }
            for (average of upTo5) {
                let pushElementInTable = `
            <tr>
            <td>${average.id}</td>
            <td>${average.firstName}</td>
            <td>${average.lastName}</td>
            <td>${average.email}</td>
            <td>${average.age}</td>
            <td>${average.averageGrade}</td>
            <td>${average.city}</td>
       
            </tr>
            `
                document.querySelector('#table5').insertAdjacentHTML('beforeend', pushElementInTable)
            }
        }



    })

//////////primer///////////
// let arra = [2,3,4,5,6,7,8,9];
// let nekoja = arra.filter(element => element > 5)
// console.log(nekoja);

// for (let element of data.hourly) {
//     console.log(element);
//     let hourly = ` <tr>
//     <td></td>
//     <td>${element.temp}</td>
//     <td>Feels Like ${element.feels_like} </td>
//     <td>${element.weather[0].description}</td>
// </tr>`
//     document.querySelector('.hourly').insertAdjacentHTML('beforeend', hourly)
// }

