import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Ellipsis } from "lucide-react"

import type Car from "@/types/car"

export default function CarCard(
    { description, manufacturer, model, price, img }: Car
) {
    return <Card className="overflow-hidden rounded-2xl shadow-md max-w-xl mx-auto"> {/* to do explain this */}
        <CardHeader>
            <CardTitle>{manufacturer}</CardTitle>
            <CardDescription>{model}</CardDescription>
            <CardAction><Ellipsis /></CardAction>
        </CardHeader>
        <CardContent>
            <img
                src={img}
                alt={`${manufacturer} ${model}`}
                className="w-full h-auto object-cover"
            />
            <br></br>
            <p style={{ whiteSpace: "pre-line" }}>{description}</p>
        </CardContent>
        <CardFooter>
            <p>{price}</p>
        </CardFooter>
    </Card>
}