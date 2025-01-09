const adviceNumber = document.querySelector('.advice-number')
const adviceQuote = document.querySelector('.advice-quote')
const adviceButton = document.querySelector('.advice-button')



function adviceGenerator(adviceObj) {
    // console.log(adviceObj.slip)
    adviceNumber.innerHTML = adviceObj.slip.id
    adviceQuote.innerHTML = adviceObj.slip.advice
}


adviceButton.addEventListener('click', (e) => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => adviceGenerator(data))
})

