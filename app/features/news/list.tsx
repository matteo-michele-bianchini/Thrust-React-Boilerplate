import news from '@/lib/mock-server/news/responses'
import NewsCard from './card'

const items = news[200].full.items

export default () => {
    return items.map(
        ({ ...props }) => {
            return <NewsCard key={props.id} {...props} />
        }
    )
}