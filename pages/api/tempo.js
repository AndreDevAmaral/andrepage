function tempo(request, reponse) {
    const dynamicDate = new Date();

    const a = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const b = await a.json();
    const c = b.userId;

    //Cache de 10 segundos
    reponse.setHeader('Cache-Control', 's-maxage=10', 'state-while-revalidate');

    reponse.json({
        date: dynamicDate.toGMTString(),
        id: c
    });
}

export default tempo;