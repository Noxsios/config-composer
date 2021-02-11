import renderer from "react-test-renderer";
import CoverForm from "./CoverForm";

it("renders history modal skeleton", () => {
  const t = renderer.create(<CoverForm />).toJSON();
  expect(t).toMatchSnapshot();
});
