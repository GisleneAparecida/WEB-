// // Declarar os elementos através dos gets e eventos
// var email = document.getElementById('email');
// var password = document.getElementById('password');
// var form = document.getSelector('form');
// var textEmail = document.getElementById('textEmail');
// var textPassword = document.getElementById('textPassword');
// var textForm = document.getElementById('textForm');

// // -------------------------------------------------------------
// // funções de validações
// function validatorEmail(email) {
//     var emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z])$/;
// }

// function validatorPassword(password) {
//     let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{6.16}$/;
// }
// // Evento de listerner na senha
// form.addEventListener("submit", (e) => {
//     if (email.value == '' && password.value == '') {
//         textForm.texContent = "Você precisa preencher todos os campos!";
//     }else if(validatorEmail(email.value) === true && validatorPassword(password.value) === true){
//         console.log(email.value);
//         console.log(password.value);
//         textEmail.textContent = "";
//         textPassword.textContent = "";
//         textForm.textContent = "";
//     }else{
//         console.log("Requisição não atendida");
//     }
//     e.preventDeful()
// })

// email.addEventListener("keyup",() => {
//     if(validatorEmail(email.value)!== true){
//         textEmail.textContent = "O formato do email deve ser 'abc@.com'"

//     } else{
//         textEmail.textContent = '';

//     }
// })

// password.addEventListener("keyup", () => {
//     if(validatorPassword(password.value)!== true){
//         textPassword.textContent = "O formato deve ter no minimo 6 caracteres"
//     } else{
//         textPassword.textContent = '';

//     }

// })


// VALIDAÇÃO DO CPF

// CPF: 123.456.789-36

const vaidaCPF = (cpf) => {
    cpf = cpf.replace(/\D/g, '')
    if(cpf.length !== 11){
    console.error('CPF INVÁLIDO. Documento não possui 11 caracters.!')
    return
    }

    const proximoDigitoVerificador = (cpfIncompleto) => {
        let somatora = 0

        for (let i = 0; i < cpf.legth; i++) {
            const digitoAtual = cpfIncompleto.charAt[i];
            console.log(digitoAtual);
            let constante = cpfIncompleto.length + 1 - 1) 

        }
    }

     let primeiroDigito = proximoDifitoVerificador(cpf.substring(0,9));
    console.log(cpf)

}



vaidaCPF("123.456.789-88")