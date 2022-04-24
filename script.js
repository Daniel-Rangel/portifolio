const data = [
    {
        id: 1,
        empresa: 'Digital House',
        profissao: 'Professor conteudista em Frontend',
        data:'Nov 2018 - Atual',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    },
    {
        id: 2,
        empresa: 'Código Fonte TV',
        profissao: 'Condutor',
        data:'Jun 2015 - 2018',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    },
    {
        id: 3,
        empresa: 'Zuplae',
        profissao: 'Front-end',
        data:'Abr 2012 - 2015',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    },
    {
        id: 4,
        empresa: 'ContWeb',
        profissao: 'Calculador',
        data:'Mar 2010 - 2012',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    },
    {
        id: 5,
        empresa: 'iuricode',
        profissao: 'Separador',
        data:'Dez 2009 - 2010',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    },
    {
        id: 6,
        empresa: 'Freelancer',
        profissao: 'Juntador',
        data:'Nov 2007 - 2008',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    }
]

const figureImg = document.querySelector('figure#imgs-js')

// const imagens = document.querySelectorAll('figure#imgs-js img')
// const experience_companies = document.querySelector('.experience_companies ul')

/* animação 
imagens.forEach((elementoImagens , indexImagens) => {
    const calc = imagens.length - indexImagens

    elementoImagens.style.width = `${  indexImagens >= 29 ? 43 : calc + 5}%`
    elementoImagens.style.top = `${indexImagens >= 29 ? 47 : indexImagens + 19 }%`
    elementoImagens.style.right = `${ imagens.length - (indexImagens + 25)}%`
    elementoImagens.style.animationDelay = `${(indexImagens * 38)}ms`
    elementoImagens.style.opacity = `${indexImagens >= 10 ? 1 : (`0.${indexImagens}`) }`
})
*/


/* Variação de cofigo com SVG */
const imagensSvg = document.querySelector('.hexagono')

const vetorImages = []
const quantidade = 65

const widthImg = imagensSvg.width.baseVal.value
const heightImg = imagensSvg.height.baseVal.value


for(let i = 0; i < quantidade; i++){
    const imageClone = imagensSvg.cloneNode(true)
    imageClone.attributes.width.value = widthImg - i
    imageClone.attributes.height.value = heightImg - (i * 4.5)
    // console.log(heightImg - (i * 4.2), i)
    vetorImages.push(imageClone)
}

vetorImages.map((elementoImagens , index)=>{

    elementoImagens.style.bottom = 10
    elementoImagens.style.left = `${index * 9.5}`
    elementoImagens.style.animationDelay = `${index * 45}ms`
    elementoImagens.style.opacity =  `${index >= 10 ? 1 : (`0.${index}`) }`

    figureImg.appendChild( elementoImagens )

})






data.map( empresa => {
    let li = document.createElement('li')
    let text = document.createTextNode(empresa.empresa)

    const compH3 = document.querySelector('.comp_description h3')
    const compSpan = document.querySelector('.comp_description span')
    const companiesSpan = document.querySelector('.companies_profession')
    const companiesP = document.querySelector('.companies_description p')
    
    li.appendChild(text)
    experience_companies.appendChild(li)

    //faz verificação e permite o primeiro objeto ser adicionado
    if(empresa.id === 1 && li.className === ''){
        li.classList.add('ativo')
        
        companiesSpan.innerText = empresa.profissao
        companiesP.innerText = empresa.descrição
        compH3.innerText = empresa.empresa
        compSpan.innerText = empresa.data
    }

    //1° cria uma lista e verifica se tem uma classe "ativo" para ser removido,
    //2° adiciona uma classe "ativo" no elemento clicado;
    //3° preenche as informação de acordo o objeto;
    li.addEventListener('click' , (i)=>{
        let lists = document.querySelectorAll('.experience_companies ul li')
        
        for(let list of lists){
            list.classList.remove('ativo')
        }

        i.target.classList.toggle('ativo')
        
        if(i.target.innerText === empresa.empresa){

            companiesSpan.innerText = empresa.profissao
            companiesP.innerText = empresa.descrição
            compH3.innerText = empresa.empresa
            compSpan.innerText = empresa.data
        }

    })
})
