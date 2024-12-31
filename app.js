const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const connectToDatabase = require('./src/database.js');
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')

connectToDatabase();

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer(`Bienvenido a 90R! 🥕🥔\n\nGracias por contactarnos! Nos enorgullece ofrecerte los mejores precios en productos frescos en Mar del Plata  🍉🍇\n\n¿Cómo te podemos ayudar? Por favor, elige una de las siguientes opciones:\n\n✅ Compra: Escribe ⿡ para conocer el proceso de compra\n✅ Pedidos: Escribe ⿢ para revisar tus pedidos\n✅ Contacto: Escribe ⿣ para hablar con nosotros`,{
        delay: 5000
    },
    async (ctx, ctxFn) => {
        console.log(ctx);
        
    }
    
    )
    

const main = async () => {
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
    })

    QRPortalWeb()
}

main()
