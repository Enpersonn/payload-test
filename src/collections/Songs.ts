import type { CollectionConfig } from "payload";

export const Songs: CollectionConfig = {
  slug: "songs",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "featured",
      type: "array",
      fields: [
        {
          name: "artist",
          type: "relationship",
          relationTo: "artists",
          hasMany: true,
        },
      ],
    },
    {
      name: "position",
      type: "number",
      required: true,
    },
    {
      name: "duration",
      type: "text",
      required: true,
    },
    {
      name: "isSingle",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "album",
      type: "relationship",
      relationTo: "albums",
      admin: {
        condition: (_, siblingData) => !siblingData?.isSingle,
      },
    },
    {
      name: "lyrics",
      type: "richText",
    },
  ],
};
