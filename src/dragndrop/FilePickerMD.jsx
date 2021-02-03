import { useContext } from "react";
import { EuiFilePicker, EuiText } from "@elastic/eui";
import { ToastContainer, toast } from "react-toastify";
import DarkTheme from "@elastic/eui/dist/eui_theme_dark.json";
import MetaContext from "../MetaContext";

const FilePickerMD = () => {
  const { meta, setMeta } = useContext(MetaContext);
  const wrongFile = () => toast("Only .md or .markdown files are accepted");

  const onChange = async (files) => {
    if (files.length > 0) {
      const md = await readFileMD(files[0]);
      if (
        files[0].name
          .split(".")
          .slice(-1)[0]
          .match(/md|markdown/g) === null
      ) {
        wrongFile();
        setMeta({ ...meta, markdown: "undefined" });
      } else {
        setMeta({ ...meta, markdown: md });
      }
    } else {
      setMeta({ ...meta, markdown: "undefined" });
    }
  };

  const readFileMD = async (blob) => {
    let textBlob = new Blob([blob], { type: "text" });
    let text = await textBlob.text();
    return text;
  };

  return (
    <>
      <EuiFilePicker
        id="md-picker"
        initialPromptText="Drag n Drop your Markdown config file here."
        onChange={(files) => {
          onChange(files);
        }}
        display="large"
      />
      <EuiText>{meta.markdown !== "undefined" && JSON.stringify(meta.markdown, null, 2)}</EuiText>
      <ToastContainer closeOnClick autoClose={5000} toastStyle={toastStyles} closeButton={false} />
    </>
  );
};

export default FilePickerMD;

const toastStyles = {
  background: DarkTheme.euiCodeBlockBackgroundColor,
};
