import renderer from "react-test-renderer";
import Tutorial from "./Tutorial";
import { TutorialBody, TutorialFooter, FooterLink } from "./Tutorial";

describe("Tutorial", () => {
  it("renders correctly", () => {
    const t = renderer.create(<Tutorial />).toJSON();
    expect(t).toMatchSnapshot();
  });
  it("renders body", () => {
    const tBody = renderer.create(<TutorialBody />).toJSON();
    expect(tBody).toMatchSnapshot();
  });
  it("renders footer", () => {
    const tFooter = renderer.create(<TutorialFooter />).toJSON();
    expect(tFooter).toMatchSnapshot();
  });
  it("renders footer links", () => {
    const fLink = renderer
      .create(<FooterLink name="Hello" href="There" />)
      .toJSON();
    expect(fLink).toMatchSnapshot();
  });
});
