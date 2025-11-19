import type News from '@/types/news'

export default {
    200: {
        full: {
            items: [
                {
                    id: '1',
                    title: 'Maserati',
                    text: 'Con la GranTurismo GT2 Stradale, Maserati porta la tradizione nel futuro: il primo modello 100% elettrico che combina eleganza e prestazioni da pista.',
                    img: 'https://cdn.motor1.com/images/mgl/40KBBZ/s3/maserati-gt2-stradale.webp'
                },
                {
                    id: '2',
                    title: 'Alfa Romeo',
                    text: 'La nuova 33 Stradale celebra la storia sportiva di Alfa Romeo con linee ispirate al passato e una meccanica progettata per il futuro.',
                    img: 'https://www.alfaromeo.it/content/dam/alfa/cross/33-stradale/gallery-exterior/3/mobile.jpg'
                }
            ] satisfies News[]
        },
        empty: {
            items: []
        }
    }
}