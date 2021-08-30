const img = document.querySelector('#semaforo');
const btn = document.getElementById('btns')
const flag = document.getElementById('flag');
const divFlag = document.getElementById('bandeira');

const apareceFlag = () => {
  if( img.src.includes('verde.png')) {  
      
    divFlag.style.display = 'block';
    
    const interval = setInterval(() => {
      divFlag.style.display = 'none'
      clearInterval(interval); 
    },2000);

  } else {
    divFlag.style.display = 'none';
  }
}

const semaforo = ( event ) => {
  ligar[event.target.innerText.toLowerCase()]();
  apareceFlag();
}

const trocaCor = () => {
  const cores = [ 'vermelho', 'amarelo', 'verde', 'desligar' ];

  let index = 0;

  const intervaloDasCores = setInterval(() => {
    apareceFlag();
    ligar[cores[index]]()
    index += 1

    if(index > 3) clearInterval(intervaloDasCores);
  }, 1000);

}

const ligar = {
  vermelho: () => img.src='./img/vermelho.png',
  amarelo: () => img.src='./img/amarelo.png',
  verde: () => img.src='./img/verde.png',
  desligar: () => img.src='./img/semaforo.png',
  automatico: () => trocaCor(),
}

btn.addEventListener('click', semaforo)





