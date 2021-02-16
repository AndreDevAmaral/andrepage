function tempo(request, reponse){
    const dynamicDate = new Date();

    reponse.setHeader('Cache-Control', 's-maxage=10', 'state-while-revalidate');

    reponse.json({
        date: dynamicDate.toGMTString()
    });
}

export default tempo;