const inputEmail = document.querySelector('#inputEmail');
const inputSenha = document.querySelector('#inputSenha');
const botao = document.querySelector('#botao');

botao.addEventListener('click', function () {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  }
  else {
    alert('Email ou senha inválidos.');
  }}
  );