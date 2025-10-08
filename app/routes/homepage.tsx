import type { Route } from "./+types/homepage";
import { appTitle, projectName } from "@/utils/constants/uiText";
import { Card, CardContent } from "@/components/ui/card"

// eslint-disable-next-line no-empty-pattern
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
          {`${projectName}`}
        </h1>
      </CardContent>
    </Card>
  </div>
}
