const service = require('./services')
Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice < this.length; indice++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

const main = async () => {
    try {
        const results = await service.obterPessoas('a')
        // const names = []
        // results.results.forEach((element) => {
        //     names.push(element.name)
        // })
        // const names = results.results.map((pessoa) => {
        //     return pessoa.name
        // })
        // const names = results.results.map((pessoa) => pessoa.name)
        // const names = results.results.meuMap(function (pessoa, indice) {
        //     console.log(pessoa.name)
        //     return pessoa.name
        // })
        // const names = results.results.meuMap((pessoa, indice) => {
        //     return pessoa.name
        // })
        const names = results.results.meuMap((pessoa, indice) => pessoa.name)
        console.log('names', names)
    } catch (err) {
        console.error('erro', err)
    }
}

main()