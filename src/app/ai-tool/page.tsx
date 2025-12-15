import { CodeQualityTool } from "@/components/ai/code-quality-tool";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AiToolPage() {
  return (
    <div className="container mx-auto py-10 md:py-20">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Code Quality Evaluation Tool</CardTitle>
            <CardDescription className="text-lg">
              Use our AI model to analyze code snippets. It detects disallowed branding (e.g., Firebase) and ensures adherence to project guidelines.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeQualityTool />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
