//Fetch API tutorial using PUNK API.  Tutorial provided by Ania Kubow: https://www.youtube.com/watch?v=MAU15Vn7mKI

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')

    function getBeer(e) {
        e.preventDefault
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json()  //note to self: remember to 'return' the response.json()
        })
        .then(data => {
            //console.log(data)
            const name = data[0].name
            const description = data[0].description  
            const { volume } = data[0] //access the volume object inside of the data object
            const volumeValue = volume.value   
            const volumeUnit = volume.unit

            randomBeer.innerHTML = `'${name}' ${volumeValue}${volumeUnit}`

            descriptionDisplay.innerHTML = description
        })
    }
    
    startBtn.addEventListener('click', getBeer)

})
