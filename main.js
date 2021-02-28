const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Canvas control
const WIDTH = window.innerWidth; // TOTAL WIDHT OF SCREEN
const HEIGHT = window.innerHeight; // TOTAL HEIGHT OF SCREEN
canvas.width = WIDTH;
canvas.height = HEIGHT;

// Essas porra ai de cima é so pra deixar o canvas do tamanho da tela automaticamente, responsivos

const SIZE = 50; // tamanho do quadrado
const colors = ["red", "blue", "white", "pink"];

// nos ai pra testar
const node1 = {
  value: 1,
  position: {
    x: 100,
    y: 100,
  },
};

const node2 = {
  value: 2,
  position: {
    x: 500,
    y: 500,
  },
};

// mostra o noede, no color porde passar cor tipo #ff01f2 por ex, ou as cor html norml q nem eu usei
function showNode(node, color) {
  context.fillStyle = color;
  context.fillRect(node.position.x, node.position.y, SIZE, SIZE);
  context.tex;
}

// função pra ser mais facil desenhar a linha, eu não to testando pra se tu n quiser
// se importar tu pode testar o node que é mais proximo do canto superior esquerdo da tela (0,0)
// pra começar a desenhar a linha se não fica meio estranho
function conectNodes(node1, node2) {
  context.strokeStyle = "white"; // cor da linha
  context.beginPath();
  context.moveTo(node1.position.x + SIZE, node1.position.y + SIZE); // começo da linha, no mais perto do 0,0 aqui
  context.lineTo(node2.position.x, node2.position.y); // final da linha
  context.stroke();
}

let i = 0;

function draw() {
  // funçao pra desenhar tudo
  conectNodes(node1, node2);
  showNode(node1, colors[Math.floor(i) % 4]);
  showNode(node2, colors[Math.floor(i + 1) % 4]);

  i += 0.01;

  requestAnimationFrame(draw); // isso aqui faz a funçaõ ser chamada denovo e de novo, sempre q a guia tiver ativa, mas é super otimizado ent n se preocupa
  // tu pode animar mudar cor e etc por ai
}

draw();
