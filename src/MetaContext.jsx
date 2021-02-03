import { createContext } from "react";
const MetaContext = createContext({
  meta: "",
  setMeta: () => {},
});
export default MetaContext;
