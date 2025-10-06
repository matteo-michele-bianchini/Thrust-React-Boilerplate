import type { Route } from "./+types/homepage";
import { appTitle } from "@/lib/constants/uiText";
import { Card, CardContent } from "@/components/ui/card"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: appTitle },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default () => {
  return <div className="flex items-center justify-center h-screen bg-background">
    <Card className="shadow-lg border rounded-2xl">
      <CardContent className="p-10">
        <h1 className="text-5xl font-bold text-center tracking-tight">
          NewtonThrust
        </h1>
      </CardContent>
    </Card>
  </div>
}
