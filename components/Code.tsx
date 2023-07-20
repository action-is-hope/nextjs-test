"use client";
import { Text } from "@actionishope/shelley/Text";
import React, { FC } from "react";

import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeProps
  extends Pick<SyntaxHighlighterProps, "language" | "children"> {
  highlight?: number[] | number;
  highlightFitContent?: boolean;
  "data-id"?: string;
}
// add https://github.com/nkbt/react-copy-to-clipboard
// or https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
const Code: FC<CodeProps> = (props) => {
  const {
    language,
    // copy = true,
    highlight = [1, 3, 5, 20],
    children,
    highlightFitContent,
  } = props;
  return (
    <Text as="div" vol={2}>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        wrapLines
        // showLineNumbers
        lineProps={(lineNumber: number): React.HTMLProps<HTMLElement> => {
          const style: React.CSSProperties = {
            display: "block",
            width: highlightFitContent ? "fit-content" : undefined,
          };
          if (
            highlight === lineNumber ||
            (Array.isArray(highlight) &&
              highlight.find((i) => i === lineNumber))
          ) {
            style.backgroundColor = "#ffffff21";
          }

          return { style };
        }}
      >
        {children}
      </SyntaxHighlighter>
    </Text>
  );
};

export default React.memo(Code);
