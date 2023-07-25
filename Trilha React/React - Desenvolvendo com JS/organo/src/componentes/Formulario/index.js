import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = () => {

    const divisoes = [
        'Série A',
        'Série B',
        'Série C',
        'Série D'
    ]

    const [nome, setNome] = useState('')
    const [estado, setEstado] = useState('')
    const [escudo, setEscudo] = useState('')
    const [divisao, setDivisao] = useState('')


    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log(nome, estado, escudo, divisao)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do time</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Time" 
                placeholder="Digite o nome do time" 
                valor={nome}
                aoAlterado={valor => setNome(valor)} 
                />
                <CampoTexto label="Estado" 
                placeholder="Digite o estado do time"
                obrigatorio={true}
                valor={estado}
                aoAlterado={valor => setEstado(valor)}  
                />
                <CampoTexto label="Escudo" 
                placeholder="Digite o endereço do escudo do time" 
                valor={escudo}
                aoAlterado={valor => setEscudo(valor)} 
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Divisão" 
                itens={divisoes}
                valor={divisao}
                aoAlterado={valor => setDivisao(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario