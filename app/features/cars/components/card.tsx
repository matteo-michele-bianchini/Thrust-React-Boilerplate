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
    { id, manufacturer }: Car
) {
    console.log("Rendering:", manufacturer);
    return <Card>
        <CardHeader>
            <CardTitle>Card Title {manufacturer}</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
}