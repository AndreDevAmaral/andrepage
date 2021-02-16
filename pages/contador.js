import { useState } from 'react';
import Link from 'next/link';

function Sobre(){
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <br/>
            <Link href="/tempo">
                <a>Tempo</a>
            </Link>
            <Contador />
        </div>
    )
}

function Contador() {
    const [Contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(Contador + 1);
    }

    return (
        <div>
            <div>{Contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
 
export default Sobre;