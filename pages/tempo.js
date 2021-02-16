import Link from 'next/link';


function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString() ;


    return(
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <br/>
            <Link href="/contador">
                <a>Contador</a>
            </Link>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString() ;

    return{
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;