import Time from '../Time'
import './Divisao.css'

const Divisao = (props) => {
    const css = {backgroundColor: props.corSecundaria}

    return (
        props.times.length > 0 &&
       <section className='divisao' style={css}> 
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        <div className='times'>
            {props.times.map(time => <Time nome={time.nome} estado={time.estado} escudo={time.escudo}/>)}
        </div>
       </section> 
    )
}

export default Divisao