//Desafio Node
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')

//Será usada no filter
const chineses = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'

//Reduce para retornar o menor salário
const salariosMenor = (funcAcc, funCurr) => {
    return funcAcc.salario < funCurr.salario ? funcAcc : funCurr
}


axios.get(url).then(res => {
    const funcionarios = res.data
    //console.log (funcionarios)    
    
    //retornando a mulher chinesa com o menor salário
    const func = funcionarios
                .filter(chineses)
                .filter(mulheres)
                .reduce(salariosMenor)

    console.log(func)
})
    
    