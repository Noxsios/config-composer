import { useContext, useEffect } from "react";
import { EuiPanel } from "@elastic/eui";
import { renderers } from "./renderers";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import MetaContext from "../MetaContext";
import { useIndexedDB } from "react-indexed-db";
const Mustache = require("mustache");

const RenderedMD = () => {
  const { add, clear } = useIndexedDB("history");
  const { meta } = useContext(MetaContext);

  useEffect(() => {
    clear().then(() => {
      add({ ...meta }, 0);
    });
    return () => {
      clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EuiPanel paddingSize="m">
      <ReactMarkdown children={Mustache.render(meta.markdown, meta.json)} plugins={[gfm]} renderers={renderers} />
    </EuiPanel>
  );
};

export default RenderedMD;
