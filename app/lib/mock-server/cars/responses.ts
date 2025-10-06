export default {
    200: {
        full: {
            // items_count: 2,
            // items_qty: 4,
            items: [
                {
                    id: '1',
                    manufacturer: 'Pagani',
                    model: 'Utopia Roadster',
                    price: 500000,
                    img: 'https://www.pagani.com/app/uploads/2024/07/Pagani-Utopia-Roadster-1440-x-810-px-8.jpg'
                },
                {
                    id: '2',
                    manufacturer: 'Ferrari',
                    model: '296 GTB',
                    price: 200000,
                    img: 'https://cdn.ferrari.com/cms/network/media/img/resize/60d0b58c9b071e08fb36d6b5-ferrari-296-gtb-intro-desk-2?width=1920&height=1600'
                }
            ]
        },
        empty: {
            items_quantity: 0,
            items: [],
        }
    }
}
