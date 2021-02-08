import {
  EuiCodeBlock,
  EuiCode,
  EuiText,
  EuiTextColor,
  EuiHorizontalRule,
  EuiTableHeader,
  EuiTableBody,
  EuiTableRow,
  EuiTableRowCell,
} from "@elastic/eui";
const renderers = {
  root: ({ children }) => {
    return <EuiText>{children}</EuiText>;
  },
  paragraph: ({ children }) => {
    return <EuiText style={{ marginBottom: "0.5rem" }}>{children}</EuiText>;
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
    return (
      <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
        <EuiCodeBlock
          language={language}
          isCopyable
          paddingSize="m"
          children={value}
        />
      </div>
    );
  },
  thematicBreak: () => {
    return <EuiHorizontalRule size="half" />;
  },
  inlineCode: ({ language = "js", value }) => {
    return (
      <EuiCode
        language={language}
        children={value}
        style={{ color: "#FFCE7A" }}
      />
    );
  },
  table: ({ children }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <table style={{ display: "initial" }}>{children}</table>
      </div>
    );
  },
  tableHead: ({ children }) => {
    return (
      <EuiTableHeader style={{ fontWeight: "bold" }}>{children}</EuiTableHeader>
    );
  },
  tableBody: ({ children }) => {
    return <EuiTableBody>{children}</EuiTableBody>;
  },
  tableRow: ({ children }) => {
    return <EuiTableRow>{children}</EuiTableRow>;
  },
  tableCell: ({ children }) => {
    return <EuiTableRowCell>{children}</EuiTableRowCell>;
  },
};

export { renderers };
