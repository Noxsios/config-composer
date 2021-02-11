import renderer from "react-test-renderer";
import FilePickerYaml from "./FilePickerYaml";

it("renders history modal skeleton", () => {
  const t = renderer.create(<FilePickerYaml />).toJSON();
  expect(t).toMatchSnapshot();
});
