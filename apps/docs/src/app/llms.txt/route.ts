import { createLLMsSource, generateLLMsText } from "onedocs/llms";
import { source } from "@/lib/source";
import config from "../../../onedocs.config";

export async function GET() {
  const llmsSource = createLLMsSource(source);
  const text = await generateLLMsText(llmsSource, {
    title: config.title,
    description: config.description,
  });

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
