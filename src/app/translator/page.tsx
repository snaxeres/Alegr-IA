import { Translator } from "@/components/translator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TranslatorPage() {
  return (
    <div className="container mx-auto py-10 md:py-20">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Traductor IA</CardTitle>
            <CardDescription className="text-lg">
              Traduce texto entre español, inglés y portugués usando IA.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Translator />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
