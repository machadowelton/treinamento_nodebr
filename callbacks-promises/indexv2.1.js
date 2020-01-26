const { promisify } = require('util')


const obterUsuario = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nome: 'Welton'
            })
        }, 1000)
    })
}

const obterTelefone = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                ddd: 11,
                telefone: 979697822
            })
        }, 1000)
    })
}

const obterEndereco = (id, callback) => {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: '1000'
        })
    }, 1000)
}

const obterEnderecoAsync = promisify(obterEndereco)

const main = async () => {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        const result = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = result[1]
        const telefone = result[0]
        const objeto = {
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                endereco: endereco,
                telefone: telefone
            }
        }
        console.timeEnd('medida-promise')
        console.log(objeto)
    } catch (err) {
        console.error('Deu ruim')
    }
}

main()
