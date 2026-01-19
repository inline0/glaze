import { createFileRoute } from "@tanstack/react-router";
import { createLLMsFullHandler, createLLMsSource } from "onedocs/llms";
import { source } from "@/lib/source";

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: createLLMsFullHandler(createLLMsSource(source)),
  },
});
