// Selección de elementos
const inputTxt = document.getElementById('input-txt');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const mensajeTexto = document.getElementById('mensaje-texto');
const copiarBtn = document.getElementById('copiar');

// Encriptación
const reglas = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat']
];

// Encriptar texto
function encriptar(texto) {
  let textoFinal = texto.toLowerCase();
  reglas.forEach(([letra, codigo]) => {
    textoFinal = textoFinal.replaceAll(letra, codigo);
  });
  return textoFinal;
}

// Desencriptar texto
function desencriptar(texto) {
  let textoFinal = texto.toLowerCase();
  reglas.forEach(([letra, codigo]) => {
    textoFinal = textoFinal.replaceAll(codigo, letra);
  });
  return textoFinal;
}

// Mostrar resultado
function mostrarMensaje(texto) {
  mensajeTexto.innerHTML = `<textarea readonly class="form-control" rows="6">${texto}</textarea>`;
  document.getElementById('img-Mensaje').style.display = 'none';
  copiarBtn.style.display = 'inline-block';
}

// Botones
btnEncriptar.addEventListener('click', () => {
  const texto = inputTxt.value.trim();
  if (texto) {
    const encriptado = encriptar(texto);
    mostrarMensaje(encriptado);
  }
});

btnDesencriptar.addEventListener('click', () => {
  const texto = inputTxt.value.trim();
  if (texto) {
    const desencriptado = desencriptar(texto);
    mostrarMensaje(desencriptado);
  }
});


  //mensaje copiado
  function mostrarVentanaCopiado() {
    const ventana = document.getElementById('ventana-copiado');
    ventana.classList.add('mostrar');

    setTimeout(() => {
      ventana.classList.remove('mostrar');
    }, 3500); 
  }

  copiarBtn.addEventListener('click', () => {
    const textarea = mensajeTexto.querySelector('textarea');
    textarea.select();
    document.execCommand('copy');
    mostrarVentanaCopiado();
  });

