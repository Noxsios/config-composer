import renderer from "react-test-renderer";
import App from "./App";

it("renders with the title", () => {
  const t = renderer.create(<App />).toJSON();
  expect(t.children[0].children[0]).toBe("Config Composer");
});
