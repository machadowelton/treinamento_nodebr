const service = require('./services')



const main = async () => {
    try {
        const result = await service.obterPessoas('a')
        const pessoas = []
        console.time('for')
        for(let i = 0; i < result.results.length; i++) {
            const pessoa = result.results[i]
            pessoas.push(pessoa.name)
        }
        console.timeEnd('for')
        console.time('forIn')
        for(let i in result.results) {
            const pessoa = result.results[i]
            pessoas.push(pessoa.name)
        }
        console.timeEnd('forIn')
        console.time('forOf')
        for(pessoa of result.results) {
            pessoas.push(pessoa.name)
        }
        console.timeEnd('forOf')
        console.log('pessoas', pessoas)
    } catch (err) {
        console.error('Deu ruim', err)
    }
}

main()