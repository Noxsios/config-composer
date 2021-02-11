import renderer from "react-test-renderer";
import FilePickerMD from "./FilePickerMD";

it("renders history modal skeleton", () => {
  const t = renderer.create(<FilePickerMD />).toJSON();
  expect(t).toMatchSnapshot();
});
