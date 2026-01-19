import { createFileRoute } from "@tanstack/react-router";
import { createLLMsHandler, createLLMsSource } from "onedocs/llms";
import { source } from "@/lib/source";
import config from "../../onedocs.config";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: createLLMsHandler(createLLMsSource(source), {
      title: config.title,
      description: config.description,
    }),
  },
});
