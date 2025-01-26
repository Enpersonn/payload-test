import { getPayload } from "payload";
import config from "@payload-config";
import RichText from "@/app/components/layout/richtext";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import Grid from "@/app/components/layout/Grid";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page(props: PageProps) {
  const { slug } = await props.params;
  const payload = await getPayload({ config });
  const page = await payload.find({
    where: {
      slug: {
        equals: slug,
      },
    },
    collection: "pages",
  });
  const pageData = page.docs[0];
  return (
    <Grid>
      <Grid.Item size="lg">
        <div className="text-2xl font-bold">{pageData?.title}</div>
      </Grid.Item>
      <Grid.Item size="md">
        <RichText data={pageData.content as SerializedEditorState} />
      </Grid.Item>
    </Grid>
  );
}
