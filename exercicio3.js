function unfold(seed, f) {
    if (seed > 50) {
        return []
    }
    return [seed].concat(unfold(f(seed), f));
}

let d = s => s + 1

function paresElemento() {
    const sementeInicial = 1; 

    const sequencia = unfold(sementeInicial, d);

    const ul = document.createElement('ul');

    sequencia.filter((pares)=>{
      if(pares % 2 == 0){
       return pares
      }

    }).forEach(pares => {
       const li = document.createElement('li');
        li.textContent = pares;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}