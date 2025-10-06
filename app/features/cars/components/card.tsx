import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import type Car from "@/types/car"

export default function CarCard(
    { description, manufacturer, model, price }: Car
) {
    return <Card>
        <CardHeader>
            <CardTitle>{manufacturer}</CardTitle>
            <CardDescription>{model}</CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent>
            <p style={{ whiteSpace: "pre-line" }}>{description}</p>
        </CardContent>
        <CardFooter>
            <p>{price}</p>
        </CardFooter>
    </Card>
}