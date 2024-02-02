import Link from "next/link";
import { allComponents } from "contentlayer/generated";
import { H2, Text } from "@actionishope/shelley/Text";
import { st, classes } from "./nav.st.css";
interface NavProps {
  className?: string;
  content?: string;
}

export function Nav(props: NavProps) {
  const buttons = allComponents.filter((comp) => comp.category === "Buttons");
  const content = allComponents.filter((comp) => comp.category === "Content");
  return (
    <nav className={st(classes.root, props?.className)}>
      <div className={classes.section}>
        <Link href="/">Home</Link>
      </div>

      <div className={classes.section}>
        <H2 vol={1} className={classes.title} uppercase>
          Introduction
        </H2>
        <Link href="/about">Getting started</Link>
      </div>

      <div className={classes.section}>
        <H2 vol={1} className={classes.title} uppercase>
          Content
        </H2>
        {content.map((component, idx) => (
          <Link key={idx} href={`/${component.url}`}>
            {component.title}
          </Link>
        ))}
      </div>

      <div className={classes.section}>
        <H2 vol={1} className={classes.title} uppercase>
          Buttons
        </H2>
        {buttons.map((component, idx) => (
          <Link key={idx} href={`/${component.url}`}>
            {component.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
