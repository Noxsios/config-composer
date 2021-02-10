import Grid from "@material-ui/core/Grid";
import { EuiHorizontalRule } from "@elastic/eui";
import { FooterLink } from "./Tutorial";
const Footer = () => {
  return (
    <div
      style={{
        marginTop: "1rem",
        padding: "1rem",
        position: "relative",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <small style={{ userSelect: "none", textAlign: "center" }}>
          SrA Harry Randazzo - aka Razzle-Dazzle ✨
          <EuiHorizontalRule size="half" margin="xs" />
          <FooterLink
            name="Github"
            href="https://github.com/Noxsios/config-composer"
          />
        </small>
      </Grid>
    </div>
  );
};

export default Footer;
