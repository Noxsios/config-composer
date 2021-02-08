import { useState, lazy, Suspense } from "react";
import { EuiTitle, EuiSpacer } from "@elastic/eui";
import { Container, Grid, LinearProgress } from "@material-ui/core";
import MetaContext from "./MetaContext";
import DarkTheme from "@elastic/eui/dist/eui_theme_dark.json";
import Footer from "./Footer";
const Tutorial = lazy(() => import("./Tutorial"));
const RenderedMD = lazy(() => import("./viewer/RenderedMD"));
const CoverForm = lazy(() => import("./dragndrop/CoverForm"));
const HistoryModal = lazy(() => import("./history/HistoryModal"));

const Loading = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      alignContent="center"
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <LinearProgress
          style={{
            width: "80%",
            backgroundColor: DarkTheme.euiColorDisabledText,
          }}
          color="secondary"
        />
      </Grid>
    </Grid>
  );
};

const App = () => {
  const [meta, setMeta] = useState({
    json: "undefined",
    markdown: "undefined",
  });
  const value = { meta, setMeta };
  // console.log(meta);
  return (
    <MetaContext.Provider value={value}>
      <Container maxWidth="md" style={{ paddingBottom: "3.5rem" }}>
        <EuiTitle size="l">
          <h1 style={{ textAlign: "center", padding: "1rem" }}>
            Config Composer
          </h1>
        </EuiTitle>
        <Suspense fallback={<div />}>
          <Tutorial />
        </Suspense>
        <Suspense fallback={<div />}>
          <HistoryModal />
        </Suspense>
        <EuiSpacer />
        <Suspense fallback={<Loading />}>
          <CoverForm />
          <EuiSpacer />
          {meta.json !== "undefined" && meta.markdown !== "undefined" && (
            <RenderedMD />
          )}
        </Suspense>
        <Footer />
      </Container>
    </MetaContext.Provider>
  );
};

export default App;
