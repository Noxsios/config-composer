import { EuiCodeBlock, EuiCode, EuiText, EuiTextColor, EuiHorizontalRule } from "@elastic/eui";
const renderers = {
  root: ({ children }) => {
    return <EuiText>{children}</EuiText>;
  },
  paragraph: ({ children }) => {
    return <EuiText>{children}</EuiText>;
  },
  strong: ({ children }) => {
    return (
      <EuiTextColor color="secondary">
        <strong>{children}</strong>
      </EuiTextColor>
    );
  },
  blockquote: ({ children }) => {
    return (
      <EuiText style={{ margin: "0.5rem" }}>
        <blockquote>{children}</blockquote>
      </EuiText>
    );
  },
  emphasis: ({ children }) => {
    return (
      <EuiTextColor color="accent">
        <em>{children}</em>
      </EuiTextColor>
    );
  },
  code: ({ language, value }) => {
    return <EuiCodeBlock language={language} isCopyable paddingSize="m" children={value} />;
  },
  thematicBreak: () => {
    return <EuiHorizontalRule size="half" />;
  },
  inlineCode: ({ language = "js", value }) => {
    return <EuiCode language={language} children={value} style={{ color: "#FFCE7A" }} />;
  },
};

export { renderers };
