import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { EuiPanel, EuiTitle, EuiSpacer } from "@elastic/eui";
import { Container } from "@material-ui/core";
import Footer from "./Footer";
import gfm from "remark-gfm";
import { renderers } from "./markdown/renderers";
import CoverForm from "./dragndrop/CoverForm";
import MetaContext from "./MetaContext";
import Mustache from "mustache";

const App = () => {
  const [meta, setMeta] = useState({
    json: "undefined",
    markdown: "undefined",
  });
  const value = { meta, setMeta };
  return (
    <MetaContext.Provider value={value}>
      <Container maxWidth="md">
        <EuiTitle size="l">
          <h1 style={{ textAlign: "center", padding: "1rem" }}>Config Composer</h1>
        </EuiTitle>
        <CoverForm />
        <EuiSpacer />
        {meta.json !== "undefined" && meta.markdown !== "undefined" && (
          <EuiPanel paddingSize="m">
            <ReactMarkdown children={Mustache.render(meta.markdown, meta.json)} plugins={[gfm]} renderers={renderers} />
          </EuiPanel>
        )}
        <Footer />
      </Container>
    </MetaContext.Provider>
  );
};

export default App;
