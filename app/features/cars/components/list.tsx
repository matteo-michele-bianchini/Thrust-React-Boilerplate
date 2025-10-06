import cars from '@/lib/mock-server/cars/responses'
import CarCard from './card'

const items = cars[200].full.items
console.log(items)

export default function CarsList() {
    return (
        <>{items.map(({ ...props }) => {
            return <CarCard
                {...props} />
        })}</>
    )
}