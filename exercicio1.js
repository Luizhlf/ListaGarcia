function coresLi(cores){
    Array.from(document.querySelectorAll('li')).map((li, indice) => {
        li.style.backgroundColor = cores[indice % cores.length]
    })

}

