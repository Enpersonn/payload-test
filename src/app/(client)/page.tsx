import HomePage from "@/pages/home.page";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function Page() {
  const payload = await getPayload({ config });
  const albums = await payload.find({
    collection: "albums",
  });
  return <pre>{JSON.stringify(albums, null, 2)}</pre>;
}
