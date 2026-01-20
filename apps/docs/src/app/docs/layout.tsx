import { DocsLayout } from "onedocs";
import type { ReactNode } from "react";
import { source } from "@/lib/source";
import config from "../../../onedocs.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout config={config} pageTree={source.pageTree}>
      {children}
    </DocsLayout>
  );
}
