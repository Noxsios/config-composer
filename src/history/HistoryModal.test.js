import renderer from "react-test-renderer";
import HistoryModal from "./HistoryModal";

it("renders history modal skeleton", () => {
  const t = renderer.create(<HistoryModal />).toJSON();
  expect(t).toMatchSnapshot();
});
