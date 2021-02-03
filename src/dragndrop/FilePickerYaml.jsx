import { useContext } from "react";
import { EuiFilePicker, EuiText } from "@elastic/eui";
import jsyaml from "js-yaml";
import MetaContext from "../MetaContext";

const FilePickerYaml = () => {
  const { meta, setMeta } = useContext(MetaContext);

  const onChange = async (files) => {
    const json = await readFileYaml(files[0]);
    setMeta({ ...meta, json: json });
  };

  const readFileYaml = async (blob) => {
    let textBlob = new Blob([blob], { type: "text" });
    let text = await textBlob.text();
    let json = jsyaml.load(text, "utf8");
    return json;
  };

  return (
    <>
      <EuiFilePicker
        id="yaml-picker"
        initialPromptText="Drag n Drop your YAML cutsheet file here."
        onChange={(files) => {
          onChange(files);
        }}
        display="large"
      />
      <EuiText>{meta.json !== "undefined" && JSON.stringify(meta.json, null, 2)}</EuiText>
    </>
  );
};

export default FilePickerYaml;
