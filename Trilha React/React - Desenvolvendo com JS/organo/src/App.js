import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Divisao from './componentes/Divisao';

function App() {

  const divisoes = [
    {
      nome: 'Primeira Divisão',
      corPrimaria: '#ed6b69',
      corSecundaria: '#fde7e8'
  },
  {
    nome: 'Segunda Divisão',
    corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
},
{
  nome: 'Terceira Divisão',
  corPrimaria: '#ffba05',
  corSecundaria: '#fff5d9'
},
{
  nome: 'Quarta Divisão',
  corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
}
]

  const [times, setTimes] = useState([])

  const aoNovoTimeAdicionado = (time) => {
    console.log(time)
    setTimes([...times, time])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario divisoes={divisoes.map(divisao => divisao.nome)} aoTimeCadastrado={time => aoNovoTimeAdicionado(time)}/>
      
      {divisoes.map(divisao => <Divisao 
      key={divisao.nome} 
      nome={divisao.nome} 
      corPrimaria={divisao.corPrimaria} 
      corSecundaria={divisao.corSecundaria}
      times={times.filter(time => time.divisao === divisao.nome)}
      /> )}

    </div>
  );
}

export default App;
