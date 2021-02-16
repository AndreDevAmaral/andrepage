import Link from 'next/link';

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Link href="/contador">
                <a>Contador</a>
            </Link>
            <br/>
            <Link href="/tempo">
                <a>Tempo</a>
            </Link>
        </div>
    )
}
 
export default Home;