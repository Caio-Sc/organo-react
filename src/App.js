import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulatrio';

function App() {
    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    }

    return (
    <div className="App">
        <Banner />
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>    
);
}

export default App;
