const data = [
    {
        empresa: 'Digital House',
        profissao: 'Professor conteudista em Frontend',
        data:'Nov 2021 - Atual',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    },
    {
        empresa: 'Código Fonte TV',
        profissao: 'Professor conteudista em Frontend',
        data:'Nov 2021 - Atual',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    },
    {
        empresa: 'Zuplae',
        profissao: 'Professor conteudista em Frontend',
        data:'Nov 2021 - Atual',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    },
    {
        empresa: 'ContWeb',
        profissao: 'Professor conteudista em Frontend',
        data:'Nov 2021 - Atual',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    },
    {
        empresa: 'iuricode',
        profissao: 'Professor conteudista em Frontend',
        data:'Nov 2021 - Atual',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    },
    {
        empresa: 'Freelancer',
        profissao: 'Professor conteudista em Frontend',
        data:'Nov 2021 - Atual',
        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'
    }
]

const imagens = document.querySelectorAll('figure#imgs-js img')
const experience_companies = document.querySelector('.experience_companies ul')

/* animação */
imagens.forEach((elementoImagens , indexImagens) => {
    const calc = imagens.length - indexImagens

    elementoImagens.style.width = `${  indexImagens >= 29 ? 43 : calc + 5}%`
    elementoImagens.style.top = `${indexImagens >= 29 ? 47 : indexImagens + 19 }%`
    elementoImagens.style.right = `${ imagens.length - (indexImagens + 25)}%`
    elementoImagens.style.animationDelay = `${(indexImagens * 38)}ms`
    elementoImagens.style.opacity = `${indexImagens >= 10 ? 1 : (`0.${indexImagens}`) }`
})


data.map( empresa => {
    let li = document.createElement('li')
    let text = document.createTextNode(empresa.empresa)
    
    li.appendChild(text)
    experience_companies.appendChild(li)

    li.addEventListener('click' , (i)=>{
        i.target.classList.toggle('ativo')
        console.log(i.target.innerHTML)
    })
})

