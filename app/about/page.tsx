"use client";
import { Text, H2 } from "@actionishope/shelley/Text";
import { ProgressCircle } from "@actionishope/shelley/ProgressCircle";
import dedent from "dedent";
import { allComponents } from "contentlayer/generated";

import Code from "../../components/Code";

export default function About(): JSX.Element {
  const codeExample = dedent`
  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;
  console.log(allComponents);
  return (
    <>
      <div>
        <Text as="h1" vol={10}>
          Nextjs - shelley
        </Text>
        <Code language="css">{codeExample}</Code>
        <ProgressCircle aria-label="Loading…" value={90} />
        <H2 vol={6} uppercase>
          Heading level two
        </H2>
      </div>
    </>
  );
}
