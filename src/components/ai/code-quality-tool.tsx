"use client";

import { useState } from "react";
import { evaluateCodeQuality, type CodeQualityOutput } from "@/ai/flows/code-quality-evaluation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, ShieldAlert, ShieldCheck } from "lucide-react";

export function CodeQualityTool() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CodeQualityOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const codeSnippet = formData.get("codeSnippet") as string;
    const projectName = formData.get("projectName") as string;

    try {
      const response = await evaluateCodeQuality({ codeSnippet, projectName });
      setResult(response);
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="projectName">Project Name</Label>
          <Input 
            id="projectName" 
            name="projectName" 
            defaultValue="PixelPro Folio" 
            required
            className="font-code"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="codeSnippet">Code Snippet</Label>
          <Textarea
            id="codeSnippet"
            name="codeSnippet"
            placeholder="Paste your code here to analyze..."
            rows={10}
            required
            className="font-code"
          />
        </div>
        <Button type="submit" disabled={loading} className="w-full sm:w-auto">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Evaluate Code Quality"
          )}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive">
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Analysis Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant={result.hasDisallowedBranding ? "destructive" : "default"}>
              {result.hasDisallowedBranding ? <ShieldAlert className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
              <AlertTitle>
                {result.hasDisallowedBranding ? "Disallowed Branding Detected" : "No Disallowed Branding Found"}
              </AlertTitle>
              <AlertDescription>
                The AI model has completed its analysis of the code snippet.
              </AlertDescription>
            </Alert>
            <div>
              <h4 className="font-semibold mb-2">Detailed Report:</h4>
              <div className="prose prose-sm dark:prose-invert bg-muted/50 p-4 rounded-md text-sm">
                <p>{result.report}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
