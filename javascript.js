let listaCarros = [
  {
    nome: "Corvette C8",
    img: "img/Corvette_C8.webp",
    descricao:
      "O Corvette C8 é um esportivo de médio porte fabricado pela Chevrolet, conhecido por seu design elegante e desempenho impressionante.",
  },
  {
    nome: "BMW X6 M Copetition",
    img: "img/BMW-X6.webp",
    descricao:
      "O BMW X6 Competition é um SUV esportivo de alto desempenho. Com um design elegante e um motor potente, oferece uma experiência de condução emocionante. É a escolha ideal para quem procura luxo, tecnologia e desempenho de alto nível",
  },
  {
    nome: "Czinger 21C",
    img: "img/Czinger-21C.webp",
    descricao:
      "O Czinger 21C é um supercarro de alto desempenho com um design revolucionário e uma configuração híbrida inovadora, que combina um motor a gasolina potente com motores elétricos. É a escolha perfeita para quem busca um veículo esportivo que oferece um desempenho excepcional.",
  },
  {
    nome: "De Tomaso P72",
    img: "img/de-tomaso.webp",
    descricao:
      "O De Tomaso P72 é um supercarro exclusivo, que combina design clássico com tecnologia moderna. Este veículo de edição limitada é uma homenagem à história da De Tomaso e é ideal para entusiastas que procuram exclusividade e desempenho de elite. Possui um motor V8 potente e uma carroceria aerodinâmica, com um interior luxuoso e artesanal. Com apenas algumas unidades produzidas, o P72 é uma obra-prima para colecionadores e amantes de supercarros.",
  },
  {
    nome: "Ferrari F40",
    img: "img/ferrari-f40.webp",
    descricao:
      "A Ferrari F40 é um dos supercarros mais icônicos já produzidos. Lançada em 1987, é conhecida por seu motor V8 biturbo que oferece um desempenho impressionante. Seu design é aerodinâmico e agressivo, refletindo a busca da Ferrari pela velocidade pura. Com um interior espartano, a F40 é uma obra-prima automobilística que representa a paixão pela velocidade e o compromisso com o desempenho que a Ferrari é conhecida.",
  },
  {
    nome: "RAM 1500 TRX 6X6 Warlord",
    img: "img/RAM-1500.webp",
    descricao:
      "A RAM 1500 TRX 6x6 Warlord é uma picape off-road incrivelmente robusta e personalizada, baseada na RAM 1500 TRX. Com tração 6x6, essa picape oferece tração superior em terrenos acidentados e um desempenho off-road excepcional. Seu motor V8 potente proporciona uma aceleração impressionante, tornando-a uma escolha ideal para quem busca aventuras fora de estrada com estilo e força.",
  },
];

listaCarros.map((carro, posicao) => {
  let cardCarro = document.getElementById("cards");
  cardCarro.innerHTML += `
    <div class="col-md-4">
                <div class="card m-2">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${carro.nome}</h5>
                        <a href="#" class="btn btn-secondary" onClick ="zoomImg(${posicao})"><i class='bi bi-zoom-in'></i></a>
                    </div>
                </div>
            </div>
    `;
});

function zoomImg(posicao) {
  let carroSelecionado = listaCarros[posicao];
  document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
  document.getElementById("descricaoCarro").innerHTML =
    carroSelecionado.descricao;
  document.getElementById("imgModal").src = carroSelecionado.img;

  new bootstrap.Modal("#zoomImg").show();
}

function alterarTemaSite() {
  let tema = document.querySelector("html").getAttribute("data-bs-theme");
  if (tema === 'dark'){
    document.querySelector('html').setAttribute('data-bs-theme', 'light')
    document.querySelector('#alterarTemaSite').innerHTML = `<i class="bi bi-moon-fill"></i>`
  } else {
    document.querySelector('html').setAttribute('data-bs-theme', 'dark')
    document.querySelector('#alterarTemaSite').innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
  }
}
