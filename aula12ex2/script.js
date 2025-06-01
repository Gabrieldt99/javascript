function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados inseridos e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute ('src', 'imagens/bebeh.jpg' )
            } else if (idade < 21){
                //Jovem
                img.setAttribute ('src', 'imagens/jovemh.jpg' )
            }else if (idade < 50) {
                //Adulto
                img.setAttribute ('src', 'imagens/Adultoh.jpg' )
            } else {
                // Idoso
                img.setAttribute ('src', 'imagens/idosoh.jpg' )
            }
        } else if (fsex[1].checked) {
           gênero = 'Mulher' 
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute ('src', 'imagens/bebem.jpg' )
            } else if (idade < 21){
                //Jovem
                img.setAttribute ('src', 'imagens/jovemf.jpg' )
            }else if (idade < 50) {
                //Adulto
                img.setAttribute ('src', 'imagens/adultom.jpg' )
            } else {
                // Idoso
                img.setAttribute ('src', 'imagens/idosof.jpg' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}