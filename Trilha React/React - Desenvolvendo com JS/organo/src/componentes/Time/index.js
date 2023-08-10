import './Time.css'

const Time = ({nome, escudo, estado}) => {
    return (
        <div className='time'>
            <div className='cabecalho'>
                <img src={escudo} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{estado}</h5>
            </div>
        </div>
    )
}

export default Time