//declarar variables para vincular objetos de formulario
const usuario=document.getElementById('user');
const password=document.getElementById('pass');
const formulario=document.getElementById('formLogin');

//generando eventos
formulario.addEventListener('submit', Login);

//funciones a ejecutar
function Login(e){
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if (usuarioVal =='' || passwordVal ==''){
        return;
    }

    console.log('el valor para user es: ' + usuarioVal);
    console.log('el valor para pass es: ' + passwordVal);

}