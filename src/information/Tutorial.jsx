import { useState } from "react";
import {
  EuiButton,
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiLink,
  EuiText,
  EuiHorizontalRule,
  EuiModalFooter,
} from "@elastic/eui";
import Grid from "@material-ui/core/Grid";

const Tutorial = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => setIsModalVisible(false);

  const openModal = () => setIsModalVisible(true);

  return (
    <div className="no-print">
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <EuiButton size="m" onClick={openModal}>
          <p>Quick Start</p>
        </EuiButton>
      </Grid>
      {isModalVisible && (
        <EuiOverlayMask onClick={closeModal}>
          <EuiModal onClose={closeModal} maxWidth={500}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>Tutorial</EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
              <TutorialBody />
            </EuiModalBody>
            <EuiModalFooter>
              <TutorialFooter />
            </EuiModalFooter>
          </EuiModal>
        </EuiOverlayMask>
      )}
    </div>
  );
};

export default Tutorial;

const TutorialBody = () => {
  return (
    <>
      <EuiText>
        <ol>
          <li>
            Download the sample{" "}
            <FooterLink
              name="YAML"
              href="https://raw.githubusercontent.com/Noxsios/config-composer/main/sample/sample.yml"
              color="secondary"
            />{" "}
            and{" "}
            <FooterLink
              name="Markdown"
              href="https://raw.githubusercontent.com/Noxsios/config-composer/main/sample/sample.md"
              color="secondary"
            />
            .
            <br />
            <small>
              (right click -{">"} Save Link As -{">"} Save)
            </small>
          </li>
          <EuiHorizontalRule size="half" margin="xs" />
          <li>
            Either click or drag and drop your <code>.yml</code>/
            <code>.md</code> files onto their respective input fields.
          </li>
          <EuiHorizontalRule size="half" margin="xs" />
          <li>
            The content from the YAML file will replace the Mustache variables
            in the Markdown and render as clean HTML.
          </li>
        </ol>
      </EuiText>
    </>
  );
};

const TutorialFooter = () => {
  return (
    <>
      <FooterLink
        name="Markdown Syntax"
        href="https://github.github.com/gfm/"
      />
      <FooterLink
        name="Mustache Variables"
        href="https://github.com/janl/mustache.js/blob/master/README.md#variables"
      />
      <FooterLink
        name="YAML Syntax"
        href="https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html"
      />
    </>
  );
};

const FooterLink = ({ name, href, color = "primary" }) => {
  return (
    <EuiLink href={href} target="_blank" color={color} external>
      {name}
    </EuiLink>
  );
};

export { TutorialBody, TutorialFooter, FooterLink };
