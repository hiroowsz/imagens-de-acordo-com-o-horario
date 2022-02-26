function carregar(){
    let msg = document.querySelector("div#msg")
    let foto = document.querySelector("img#imagem")
    let data = new Date()
    let hora = data.getHours() // não esquece de chamar pelo **MÉTODO**
    hora = 8

    msg.innerHTML = `<strong>Agora são ${hora} hora(s)</strong>.`

    if (hora >= 0 && hora < 12){
        // BOM DIA
        foto.src = 'imagemmanha.jpg'
        document.body.style.background = "#1CB7FC"
    } else if (hora >= 12 && hora < 18) {
       // BOA TARDE
       foto.src = 'imagemtarde.jpeg'
       document.body.style.background = '#FBC445'
    } else {
       // BOA NOITE
       foto.src = 'imagemnoite.jpg'
       document.body.style.background = "#4A4451"
    }
}