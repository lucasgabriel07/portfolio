const camposForm = document.querySelectorAll('.contato__formulario__campo');

camposForm.forEach(campo => {
  const label = campo.querySelector('label');
  let input = campo.querySelector('input');
  
  if (!input) {
    input = campo.querySelector('textarea');
  }

  const placeholder = input.placeholder;
  
  input.onfocus = () => {
    label.style.display = 'block';
    label.style.color = '#2A7AE4';
    input.placeholder = '';
    campo.style.borderBottom = '2px solid #2A7AE4';
  }
  
  input.onblur = () => {
    if (input.value == '') {
      label.style.display = 'none';
      input.placeholder = placeholder;
    }
    label.style.color = '#A2A2A2';
    campo.style.borderBottom = '';
  }
});

const form = document.querySelector('.contato__formulario');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputAssunto = document.getElementById('assunto');
const inputMensgem = document.getElementById('mensagem');

form.onsubmit = () => {

  const nome = inputNome.value;
  const email = inputEmail.value;
  const assunto = inputAssunto.value;
  const mensagem = inputMensgem.value;

  
}