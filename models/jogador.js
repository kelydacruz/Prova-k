import conexao from '../config/conexao.js'

const Jogador = conexao.Schema({
    nome: {type:String, required:true},
    time:{type:String, required:true},
    posicao:{type:String, required:true},
    idade:{type:Number, required:true},
    altura:{type:Number, required:true}
})

export default conexao.model('Jogador', Jogador)