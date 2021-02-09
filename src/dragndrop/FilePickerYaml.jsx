import { useContext, useState } from "react";
import {
  EuiFilePicker,
  // EuiText
} from "@elastic/eui";
import { ToastContainer, toast } from "react-toastify";
import DarkTheme from "@elastic/eui/dist/eui_theme_dark.json";
import jsyaml from "js-yaml";
import MetaContext from "../MetaContext";

const FilePickerYaml = () => {
  const [valid, setValid] = useState(true);
  const { meta, setMeta } = useContext(MetaContext);
  const wrongFile = () => toast("Only .yml or .yaml files are accepted");

  const onChange = async (files) => {
    if (files.length > 0) {
      const json = await readFileYaml(files[0]);
      if (
        files[0].name
          .split(".")
          .slice(-1)[0]
          .match(/yaml|yml/g) === null
      ) {
        wrongFile();
        setValid(false);
        setMeta({ ...meta, json: "undefined" });
      } else {
        setValid(true);
        setMeta({ ...meta, json: json });
      }
    } else {
      setValid(false);
      setMeta({ ...meta, json: "undefined" });
    }
  };

  const readFileYaml = async (blob) => {
    let textBlob = new Blob([blob], { type: "text" });
    let text = await textBlob.text();

    try {
      let json = jsyaml.load(text);
      return json;
    } catch (error) {
      toast(error.reason);
      return "undefined";
    }
  };

  return (
    <div style={{ minWidth: 300, margin: "1rem" }}>
      <EuiFilePicker
        id="yaml-picker"
        initialPromptText="YAML"
        onChange={(files) => {
          onChange(files);
        }}
        display="large"
        isInvalid={!valid}
        aria-label="YAML File Picker"
      />
      {/* <EuiText>{meta.json !== "undefined" && JSON.stringify(meta.json, null, 2)}</EuiText> */}
      <ToastContainer
        closeOnClick
        autoClose={5000}
        toastStyle={toastStyles}
        closeButton={false}
      />
    </div>
  );
};

export default FilePickerYaml;

const toastStyles = {
  background: DarkTheme.euiCodeBlockBackgroundColor,
};
