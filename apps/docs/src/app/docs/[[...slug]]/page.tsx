import { source } from "@/lib/source";
import { DocsPage, mdxComponents } from "onedocs";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const filePath = page.file.path;

  return (
    <DocsPage
      toc={page.data.toc}
      editOnGithub={{
        owner: "inline0",
        repo: "glaze",
        sha: "main",
        path: filePath,
      }}
    >
      <MDX components={mdxComponents} />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const ogImageUrl = params.slug
    ? `/docs/og/${params.slug.join("/")}`
    : "/docs/opengraph-image";

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      images: [ogImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: [ogImageUrl],
    },
  };
}
