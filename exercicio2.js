function unfold(seed, f) {
    if (seed > 1024) {
        return []
    }
    return [seed].concat(unfold(f(seed), f));
}

let d = s => s * 2

function gerarElemento() {
    const sementeInicial = 1; 

    const sequencia = unfold(sementeInicial, d);

    const ul = document.createElement('ul');

    sequencia.map(valor => {
        const li = document.createElement('li');
        li.textContent = valor;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}