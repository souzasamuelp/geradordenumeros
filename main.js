let result = document.querySelector('section#result')

function generate() {
    let minimum = 1
    let maximum = 100
    let diffuser = maximum - minimum
    let random = Math.random() 
    let number = minimum + Math.trunc(diffuser * random)

    result.innerHTML += `<p>Acabei de pensar no número <mark>${number}</mark>!</p>`
}

function clean() { 
    result.innerHTML = null 
}