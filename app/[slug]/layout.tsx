// import "./style.css";
import type { ReactNode } from "react";
import Link from "next/link.js";
// import { Tab, TabList, TabPanel, Tabs } from "./tabs.jsx";
// app/[slug]/page.tsx
import { allComponents } from "contentlayer/generated";
import { ComponentDocs } from "../../components/ComponentDocs";
import { H1, P } from "@actionishope/shelley/Text";
import { st, classes } from "../../theme/main.st.css";
export const generateStaticParams = async () =>
  allComponents.map((component) => ({
    slug: `${component._raw.sourceFileName.split(".")[0]}`,
  }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find(
    (component) => component._raw.sourceFileName.split(".")[0] === params.slug
  );
  console.log("allComponents", allComponents);
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: component.title };
};

export default function Layout(props: {
  tabs: ReactNode;
  children: ReactNode;
  params: { slug: string };
}) {
  const { params } = props;
  const component = allComponents.find(
    (component) => component._raw.sourceFileName.split(".")[0] === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);

  console.log(props.tabs);
  return (
    <article className={classes.article}>
      <H1>{component.title}</H1>
      <P>
        <Link href={`/${component.url}`}>Usage</Link> |{" "}
        <Link href={`/${component.url}/styling`}>Styling</Link>
      </P>
      <div className="wrapper">{props.tabs}</div>
      {/* <ComponentDocs
        component={component}
        defaultSelectedKey="styling"
        styling={props.tabs}
      /> */}

      <p>
        Check out the{" "}
        <Link href="/previews/tab-next-router" className="link">
          trending posts
        </Link>{" "}
        or stay up to date with the{" "}
        <Link href="/previews/tab-next-router/new" className="link">
          latest posts
        </Link>
      </p>

      {/* {props.children} */}
      {/* {props.tabs} */}
    </article>
  );
}
