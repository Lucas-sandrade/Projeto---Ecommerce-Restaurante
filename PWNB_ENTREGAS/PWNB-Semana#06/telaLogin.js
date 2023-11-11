function Entrar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    let nome = "lucas@gmail.com";

    if (email == nome && senha == 1234567){
        alert("Ola, Lucas");
    } else {
        alert("Seu login falhou")
    }
}

