import type { CollectionConfig } from "payload";
export const Albums: CollectionConfig = {
  slug: "albums",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "albumImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "albumCover",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "songs",
      type: "join",
      collection: "songs",
      on: "album",
      hasMany: true,
    },
  ],
};
