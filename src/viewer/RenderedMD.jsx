import { useContext } from "react";
import { EuiPanel } from "@elastic/eui";
import { renderers } from "./renderers";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import MetaContext from "../MetaContext";
const Mustache = require("mustache");

const RenderedMD = () => {
  const { meta } = useContext(MetaContext);
  return (
    <EuiPanel paddingSize="m">
      <ReactMarkdown children={Mustache.render(meta.markdown, meta.json)} plugins={[gfm]} renderers={renderers} />
    </EuiPanel>
  );
};

export default RenderedMD;
