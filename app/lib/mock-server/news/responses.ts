import type News from "@/types/news"

export default {
    200: {
        full: {
            items: [
                {
                    "id": "1",
                    "title": "Maserati",
                    "text": "Con la GranTurismo Folgore, Maserati porta la tradizione nel futuro: il primo modello 100% elettrico che combina eleganza e prestazioni da pista.",
                    "img": "https://www.maserati.com/content/dam/maserati/international/Models/granturismo/my24/overview/maserati-granturismo-folgore-hero.jpg"
                },
                {
                    "id": "2",
                    "title": "Alfa Romeo",
                    "text": "La nuova 33 Stradale celebra la storia sportiva di Alfa Romeo con linee ispirate al passato e una meccanica progettata per il futuro.",
                    "img": "https://www.alfaromeo.com/content/dam/alfa/international/models/33-stradale/gallery/33-stradale-01.jpg"
                }
            ] satisfies News[]
        },
        empty: {
            items: [],
        }
    }
}
