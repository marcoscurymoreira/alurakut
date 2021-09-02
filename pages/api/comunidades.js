import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if (request.method === 'POST') {
        const TOKEN = '13d8835ac87f2e0c50985638f1010c'
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "1073707",
            title: 'Comunidade de teste',
            imageUrl: 'https://github.com/marcoscurymoreira.png',
            creatorSlug: 'marcoscurymoreira',
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
    }
}
