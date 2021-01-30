function toLogin(){
    let remove = document.getElementById("x");
    remove.parentElement.removeChild(remove)

    // Create elem p
    let labelTop = document.createElement("p")
    labelTop.name = "label"
    labelTop.className = "tulisan_login"
    labelTop.innerHTML = "LOGIN"

    //  get tag name div
    let elem = document.getElementsByTagName("div")[0];
    elem.appendChild(labelTop)

    // Create elem form
    let formLogin = document.createElement("form");
    elem.appendChild(formLogin)

    // Label Username
    let labelUser = document.createElement("label")
    labelUser.innerHTML = "Username"
    formLogin.appendChild(labelUser)

    // Create input type Username
    let inputUser = document.createElement("input");
    inputUser.type = "text"
    inputUser.name = "username"
    inputUser.className = "form_login"
    inputUser.placeholder = "Input Your Username"
    formLogin.appendChild(inputUser)

    // Label Password
    let labelPass = document.createElement("label")
    labelPass.innerHTML = "Password"
    labelPass.name = "password"
    formLogin.appendChild(labelPass)

    // Create input type Password
    let inputPass = document.createElement("input");
    inputPass.type = "password"
    inputPass.className = "form_login"
    inputPass.placeholder = "Input Your Password"
    formLogin.appendChild(inputPass)

    // Create button
    let tombol = document.createElement("button");
    tombol.className = "tombol_login"
    tombol.innerHTML = "Login"
    formLogin.appendChild(tombol)
}