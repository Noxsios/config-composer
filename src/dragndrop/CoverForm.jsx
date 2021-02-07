import FilePickerYaml from "./FilePickerYaml";
import FilePickerMD from "./FilePickerMD";
import Grid from "@material-ui/core/Grid";

const CoverForm = () => {
  return (
    <div className="no-print">
      <Grid container direction="column" justify="center" alignItems="center" alignContent="center">
        <Grid container direction="row" justify="center" alignItems="center" alignContent="center">
          <FilePickerYaml />
          <FilePickerMD />
        </Grid>
      </Grid>
    </div>
  );
};

export default CoverForm;
