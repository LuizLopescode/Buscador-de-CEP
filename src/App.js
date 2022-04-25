import React, {useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';




function App() {
  const [input, setInput] = useState('')
   async function handleSearch () {
    if(input == ""){
      alert("Preencha algum CEP!")
      return
    }
    try {
      const response = await api.get(`${input}/json`);
      console.log (response)
    } catch (error) {
      alert ("Erro ao buscar o cep")
    }
  }
  return (
    <div className="Container">
      <h1 className="title">
      Buscador de CEP

      </h1>
      <div className="containerInput">

        <input type="text" 
        placeholder="Digite seu CEP..."
        onChange={(e) => setInput (e.target.value) }
        />

      <button onClick={handleSearch}>
       <FiSearch size={25} color="#fff"/>
      </button>
      </div>
    <main>
      <h2>CEP: 88305-080</h2>
      <span>Rua Manoel Mello </span>
      <span> Complemento: Casa</span>
      <span> Bairro São joão </span>
      <span> Itajaí  - SC </span>
      



    </main>



    </div>
  );
}

export default App;
