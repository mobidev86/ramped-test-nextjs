import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

export const EmptyCard = () => {
    return (
        <Card className="h-96 flex items-center justify-center">
            <CardHeader>
                <CardTitle>
                We hit a snag with results😔
                </CardTitle>
                <CardDescription className="text-center mt-4">
                Try a different search above!
                </CardDescription>
            </CardHeader>
        </Card>
    )
}