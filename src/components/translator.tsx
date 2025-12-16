'use client';

import { useState } from 'react';
import {
  translateText,
  type TranslateTextInput,
  type TranslateTextOutput,
} from '@/ai/flows/translator-flow';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertCircle } from 'lucide-react';
import { z } from 'zod';

const languageSchema = z.enum(['English', 'Spanish', 'Portuguese']);

export function Translator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TranslateTextOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [targetLanguage, setTargetLanguage] =
    useState<TranslateTextInput['targetLanguage']>('Spanish');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const text = formData.get('textToTranslate') as string;

    try {
      const response = await translateText({ text, targetLanguage });
      setResult(response);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="textToTranslate">Texto a Traducir</Label>
          <Textarea
            id="textToTranslate"
            name="textToTranslate"
            placeholder="Escribe tu texto aquí..."
            rows={5}
            required
            className="font-code"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="language">Traducir a</Label>
          <Select
            name="language"
            value={targetLanguage}
            onValueChange={(value) =>
              setTargetLanguage(
                value as TranslateTextInput['targetLanguage']
              )
            }
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languageSchema.options.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" disabled={loading} className="w-full sm:w-auto">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Traduciendo...
            </>
          ) : (
            'Traducir'
          )}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Traducción</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm dark:prose-invert bg-muted/50 p-4 rounded-md text-sm">
              <p>{result.translatedText}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
