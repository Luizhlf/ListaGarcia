function unfold(seed, f) {
    if (seed > 50) {
        return [];
    }
    return [seed].concat(unfold(f(seed), f));
}

let d = s => s + 1;

function paresElemento() {
    const sementeInicial = 1; 
    const sequencia = unfold(sementeInicial, d);

    const ul = document.createElement('ul');

    sequencia.filter(num => num % 2 === 0).forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        ul.appendChild(li);
      });

    document.body.appendChild(ul);
}
