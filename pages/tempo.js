import Link from 'next/link';


function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString() ;


    return(
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/tempo">
                <a>Tempo</a>
            </Link>
            <Contador />
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