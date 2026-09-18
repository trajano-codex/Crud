const express = require ('express')
const porta = 3000
const servidor = express()

servidor.use(express.json())

let array_roupa = [

    {
        "descricao":"blusa nike",
        "preco":"150.00",
        "cor":"preta",    
        "tamanho":"G"
    }
]

servidor.listen(porta,()=>{
    console.log("Servidor rodando!")
})

servidor.get("/ver_catalogo",(req,res)=>{
    res.json(array_roupa)
}) 
servidor.post("/cadastrar_produto",(req,res)=>{
    const {descricao,preco,cor,tamanho} = req.body
    if (descricao == "" ){

        return res.send("preencha a descricao do Produto!")
    }else if (preco <= 40){
        return res.send("preencha o valor do produto")
    }else if (tamanho == ""){
         return res.send("preencha o tamanho do produto")
    }else if (cor == ""){
        return res.send("preencha a cor do produto ")
    }
   
    
    
    
    const produto = {descricao,preco,cor,tamanho}    
        

    array_roupa.push(dados)

    res.send("produto adicionado!")
})

servidor.delete("/deletar_produto",(req,res)=>{
    const deletar =  req.body.apagar
    array_roupa.splice(deletar,1)
    res.send("Produto apagado!")
})
