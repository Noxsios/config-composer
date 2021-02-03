import { useContext } from "react";
import { EuiFilePicker, EuiText } from "@elastic/eui";
import MetaContext from "../MetaContext";

const FilePickerMD = () => {
  const { meta, setMeta } = useContext(MetaContext);

  const onChange = async (files) => {
    const md = await readFileMD(files[0]);
    setMeta({ ...meta, markdown: md });
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
    </>
  );
};

export default FilePickerMD;
