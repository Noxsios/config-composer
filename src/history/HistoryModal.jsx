import { useState, useContext, useEffect } from "react";
import MetaContext from "../MetaContext";
import { EuiConfirmModal, EuiOverlayMask } from "@elastic/eui";
import { useIndexedDB } from "react-indexed-db";

const HistoryModal = () => {
  const { getByID, getAll, clear } = useIndexedDB("history");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { meta, setMeta } = useContext(MetaContext);

  useEffect(() => {
    getAll().then((entries) => {
      if (
        entries.length !== 0 &&
        meta.json === "undefined" &&
        meta.markdown === "undefined"
      ) {
        setIsModalVisible(true);
      } else {
        setIsModalVisible(false);
      }
    });
  }, [getAll, meta, isModalVisible]);

  const closeModal = () => {
    clear().then(() => {
      setIsModalVisible(false);
    });
  };

  const closeAndUseLast = () => {
    getByID(0).then((entry) => {
      setMeta({ ...entry });
      setIsModalVisible(false);
    });
  };

  return (
    <div className="no-print">
      {isModalVisible && (
        <EuiOverlayMask>
          <EuiConfirmModal
            maxWidth={500}
            title="Pick up where you left off?"
            onCancel={closeModal}
            confirmButtonText="Yes"
            cancelButtonText="No"
            onConfirm={closeAndUseLast}
          />
        </EuiOverlayMask>
      )}
    </div>
  );
};

export default HistoryModal;
