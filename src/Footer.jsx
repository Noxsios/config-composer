import Grid from "@material-ui/core/Grid";
const Footer = () => {
  return (
    <div style={{ marginTop: "1rem", padding: "1rem", position: "fixed", bottom: 0, left: 0, width: "100%" }}>
      <Grid container spacing={1} direction="row" justify="center" alignItems="center" alignContent="center" wrap="nowrap">
        <small style={{ userSelect: "none" }}>SrA Harry Randazzo - aka Razzle-Dazzle ✨</small>
      </Grid>
    </div>
  );
};

export default Footer;
