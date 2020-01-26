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

obterUsuario()
    .then((usuario) => {
        obterTelefone(usuario.id)
            .then((telefone) => {
                return {
                    usuario: {
                        id: usuario.id,
                        nome: usuario.nome,
                        telefone: {
                            ddd: telefone.ddd,
                            numero: telefone.telefone
                        }
                    }
                }
            })
            .then((resultado) => {
                return obterEnderecoAsync(resultado.usuario.id)
                    .then((result) => {
                        const usuario = {
                            id: resultado.usuario.id,
                            nome: resultado.usuario.nome,
                            telefone: resultado.usuario.telefone,
                            endereco: result
                        }
                        return usuario
                    })
            })
            .then((result) => {
                console.log('Resultado: ', result)
            })
            .catch((err) => {

            })
    })
    .catch((err) => {
        console.log(`erro: ${err}`)
    })