import FilePickerYaml from "./FilePickerYaml";
import FilePickerMD from "./FilePickerMD";
import Grid from "@material-ui/core/Grid";

const CoverForm = () => {
  return (
    <div className="no-print">
      <Grid container spacing={1} direction="row" justify="center" alignItems="center" alignContent="center" wrap="nowrap">
        <Grid container spacing={1} direction="column" justify="center" alignItems="center" alignContent="center" wrap="nowrap">
          <FilePickerYaml />
        </Grid>
        <Grid container spacing={1} direction="column" justify="center" alignItems="center" alignContent="center" wrap="nowrap">
          <FilePickerMD />
        </Grid>
      </Grid>
    </div>
  );
};

export default CoverForm;
