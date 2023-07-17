import Link from "next/link";
import { allComponents } from "contentlayer/generated";
import { H2, Text } from "@actionishope/shelley/Text";

interface NavProps {
  className?: string;
  content?: string;
}

export function Nav(props: NavProps) {
  const buttons = allComponents.filter((comp) => comp.category === "Buttons");
  const content = allComponents.filter((comp) => comp.category === "Content");

  return (
    <div className={props?.className}>
      <Link href="/">Getting started</Link>
      <H2 vol={1} uppercase>
        Introduction
      </H2>
      <Link href="/about">Getting started</Link>
      <H2 vol={1} uppercase>
        Content
      </H2>
      <nav>
        {content.map((component, idx) => (
          <Link key={idx} href={`/${component.url}`}>
            {component.title}
          </Link>
        ))}
      </nav>
      <H2 vol={1} uppercase>
        Buttons
      </H2>
      <nav>
        {buttons.map((component, idx) => (
          <Link key={idx} href={`/${component.url}`}>
            {component.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
