import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '13d8835ac87f2e0c50985638f1010c'
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "1073707",
            ...request.body,
            // title: 'Comunidade de teste',
            // imageUrl: 'https://github.com/marcoscurymoreira.png',
            // creatorSlug: 'marcoscurymoreira',
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}
