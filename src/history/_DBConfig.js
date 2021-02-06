export const _DBConfig = {
  name: "history",
  version: 3,
  objectStoresMeta: [
    {
      store: "history",
      // storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "json", keypath: "json", options: { unique: false } },
        { name: "markdown", keypath: "markdown", options: { unique: false } },
      ],
    },
  ],
};
