import {
    Card,
    CardAction,
    CardContent,
    // CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

import { Ellipsis } from 'lucide-react'

import type News from '@/types/news'

export default function NewsCard(
    { title, text, img }: News
) {
    return <Card className="overflow-hidden rounded-2xl shadow-md max-w-xl mx-auto"> {/* to do explain this */}
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            {/* <CardDescription>{model}</CardDescription> */}
            <CardAction><Ellipsis /></CardAction>
        </CardHeader>
        <CardContent>
            <img
                src={img}
                alt={title}
                className="w-full h-auto object-cover rounded-2xl"
            />
            <br></br>
            <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
        </CardContent>
        <CardFooter>
            {/* <p>{price}</p> */}
        </CardFooter>
    </Card>
}