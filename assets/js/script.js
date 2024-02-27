// lista della spesa
const listaSpesa = [
  'latte',
  'pane',
  'acqua',
  'carote',
  'patate',
  'formaggio'
];

// elementi
let counter = 0;
let elementiLista;
const listaStampata = document.getElementById('list');

while (counter < listaSpesa.length) {
  
  // salvo gli elementi singoli della lista e faccio in modo di stamparli tutti in CAPITALIZE con questa tecnica
  elementiLista = listaSpesa[counter].charAt(0).toUpperCase() + listaSpesa[counter].slice(1);

  // incremento counter
  counter++;

  // stampa nel DOM
  listaStampata.innerHTML += `
  <li>${elementiLista}</li>
  `
}


