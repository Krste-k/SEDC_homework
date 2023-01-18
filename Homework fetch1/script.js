let url = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json'
let button = document.querySelector('[data-button]')
addEventListener('click', function () {
    this.fetch(url)
        .then(data => {
            data.json()
                .then(parseData => {
                    console.error(parseData.trainer);
                    console.warn(parseData.assistant);
                    console.table(parseData.students);
                
                })
        })
})