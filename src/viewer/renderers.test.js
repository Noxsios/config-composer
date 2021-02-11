import renderer from "react-test-renderer";
import { renderers } from "./renderers";

const coffeeIpsum =
  "Single shot and grounds, java aged rich spoon arabica flavour. Percolator eu, strong lungo ristretto saucer instant beans. Robust seasonal brewed mocha, extraction barista milk as mocha decaffeinated latte.";

describe("Markdown", () => {
  it("renders root", () => {
    const t = renderer
      .create(<renderers.root children={coffeeIpsum} />)
      .toJSON();
    expect(t).toMatchSnapshot();
  });
  it("renders p", () => {
    const t = renderer
      .create(<renderers.paragraph children={coffeeIpsum} />)
      .toJSON();
    expect(t).toMatchSnapshot();
  });
  it("renders strong", () => {
    const t = renderer
      .create(<renderers.strong children={coffeeIpsum} />)
      .toJSON();
    expect(t).toMatchSnapshot();
  });
  it("renders blockquote", () => {
    const t = renderer
      .create(<renderers.blockquote children={coffeeIpsum} />)
      .toJSON();
    expect(t).toMatchSnapshot();
  });
  it("renders em", () => {
    const t = renderer
      .create(<renderers.emphasis children={coffeeIpsum} />)
      .toJSON();
    expect(t).toMatchSnapshot();
  });
  it("renders codeblock", () => {
    const t = renderer
      .create(<renderers.code children={coffeeIpsum} />)
      .toJSON();
    expect(t).toMatchSnapshot();
  });
  it("renders hr", () => {
    const t = renderer.create(<renderers.thematicBreak />).toJSON();
    expect(t).toMatchSnapshot();
  });
  it("renders inlineCode", () => {
    const t = renderer
      .create(<renderers.inlineCode children={coffeeIpsum} />)
      .toJSON();
    expect(t).toMatchSnapshot();
  });
  it("renders table", () => {
    const SampleTable = () => {
      return (
        <renderers.table>
          <renderers.tableHead>
            <renderers.tableRow>
              <renderers.tableCell>Title</renderers.tableCell>
            </renderers.tableRow>
          </renderers.tableHead>
          <renderers.tableBody>
            <renderers.tableRow>
              <renderers.tableCell>Body</renderers.tableCell>
            </renderers.tableRow>
          </renderers.tableBody>
        </renderers.table>
      );
    };
    const t = renderer.create(<SampleTable />).toJSON();
    expect(t).toMatchSnapshot();
  });
});
