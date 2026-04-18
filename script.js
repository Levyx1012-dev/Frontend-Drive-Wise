function gerarRota() {
  const origem = document.getElementById("origem").value;
  const destino = document.getElementById("destino").value;

  if (!origem || !destino) {
    alert("Preencha origem e destino!");
    return;
  }

  const mapa = document.getElementById("mapa");

  mapa.src = `https://www.google.com/maps?saddr=${origem}&daddr=${destino}&output=embed`;

  document.getElementById("info").innerText =
    `Rota de ${origem} até ${destino}`;
}