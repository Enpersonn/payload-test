import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "/media",
    adminThumbnail: "thumbnail",
    crop: true,
    focalPoint: true,
    disableLocalStorage: true,
    imageSizes: [
      {
        name: "thumbnail",
        width: 100,
        height: 100,
        position: "center",
      },
      {
        name: "cover",
        width: 160,
        height: 160,
        position: "center",
        crop: "center",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
