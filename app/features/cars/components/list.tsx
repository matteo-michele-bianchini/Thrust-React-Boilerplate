import cars from '@/lib/mock-server/cars/responses'
import CarCard from './card'

const items = cars[200].full.items

export default function CarsList() {
    return (
        <>{items.map(({ ...props }) => {
            return <CarCard key={props.id}
                {...props} />
        })}</>
    )
}