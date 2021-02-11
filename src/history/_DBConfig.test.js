import { useIndexedDB } from "react-indexed-db";

const dummy = {
  json: { key1: true, key2: "false" },
  markdown: `Decaffeinated rich affogato doppio chicory, 
    arabica organic shop sweet cultivar. Flavour, 
    percolator, sugar id, variety acerbic ristretto 
    body seasonal froth grounds.`,
};

describe("indexedDB", () => {
  it("initializes properly and empty", () => {
    const { getAll } = useIndexedDB("history");
    return expect(getAll()).resolves.toEqual([]);
  });
  it("adds an entry", async () => {
    const { getAll, add } = useIndexedDB("history");
    await add(dummy, 0);
    return expect(getAll()).resolves.toEqual([dummy]);
  });
  it("clears all entries", async () => {
    const { getAll, add, clear } = useIndexedDB("history");
    await clear();
    await add(dummy, 0);
    await clear();
    return expect(getAll()).resolves.toEqual([]);
  });
});
