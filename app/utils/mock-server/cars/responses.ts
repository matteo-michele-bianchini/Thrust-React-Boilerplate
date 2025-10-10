import type Car from '@/types/car'

export default {
    200: {
        full: {
            items: [
                {
                    id: '1',
                    manufacturer: 'Pagani',
                    model: 'Utopia',
                    description: 'La Pagani Utopia rappresenta l’apice di una continua ricerca che unisce la più sofisticata tecnologia a un design senza tempo.\n\nLeggera, dinamica e performante, è progettata in continuità con la versione Coupé, pur presentando elementi distintivi.',
                    price: '€ 500.000',
                    img: 'https://www.pagani.com/app/uploads/2022/09/1440x81016-1-1980x1114.jpg'
                },
                {
                    id: '2',
                    manufacturer: 'Ferrari',
                    model: '296 GTB',
                    description: 'La Ferrari 296 GTB, evoluzione del concetto di berlinetta sportiva a 2 posti a motore centrale-posteriore Ferrari, rappresenta una rivoluzione per la Casa di Maranello in quanto introduce la nuova motorizzazione V6 a 120° accoppiata a un motore elettrico plug-in (PHEV) in grado di erogare fino a 830 cv. La vettura ridefinisce così l’idea di divertimento al volante per garantire emozioni pure non solo quando si è alla ricerca delle massime prestazioni, ma anche nella guida di tutti i giorni.',
                    price: '€ 250.000',
                    img: 'https://cdn.ferrari.com/cms/network/media/img/resize/60d0c76ec72d35651787ea05-ferrari-296-gtb-assetto-fiorano-cover-desk?width=1920&height=1080'
                }
            ] satisfies Car[]
        },
        empty: {
            items_quantity: 0,
            items: [],
        }
    }
}