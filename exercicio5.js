function alunosNotas(notas) {
  const ul = document.createElement("ul");

  notas.filter(nota => nota.nota >= 7).forEach(nota => {
      const li = document.createElement("li");
      li.textContent = `${nota.nome} ${nota.nota}`;
      ul.appendChild(li);
    });

  document.body.appendChild(ul);
}
