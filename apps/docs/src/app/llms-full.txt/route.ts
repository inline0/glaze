import { createLLMsSource, generateLLMsFullText } from "onedocs/llms";
import { source } from "@/lib/source";

export async function GET() {
  const llmsSource = createLLMsSource(source);
  const text = await generateLLMsFullText(llmsSource);

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
