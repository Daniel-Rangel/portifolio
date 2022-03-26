const imagens = document.querySelectorAll('figure#imgs-js img')
const posicaoTop = 1
const posicaoLeft = 6

imagens.forEach((elementoImagens , indexImagens) => {
    const calc = imagens.length - indexImagens



    console.log( calc , indexImagens)

    elementoImagens.style.width = `${  indexImagens >= 29 ? 43 : calc + 5}%`
    elementoImagens.style.top = `${indexImagens >= 29 ? 47: indexImagens + 19 }%`
    elementoImagens.style.right = `${ imagens.length - (indexImagens + 25)}%`
    elementoImagens.style.animationDelay = `${(indexImagens * 60)}ms`
    elementoImagens.style.opacity = `${indexImagens >= 10 ? 1 : (`0.${indexImagens}`) }`
})
