// import "./style.css";
import type { ReactNode } from "react";
import Link from "next/link.js";
// import { Tab, TabList, TabPanel, Tabs } from "./tabs.jsx";
// app/[slug]/page.tsx
import { allComponents } from "contentlayer/generated";
import { ComponentDocs } from "../../components/ComponentDocs";

export const generateStaticParams = async () =>
  allComponents.map((component) => ({
    slug: `${component._raw.sourceFileName.split(".")[0]}`,
  }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find(
    (component) => component._raw.sourceFileName.split(".")[0] === params.slug
  );
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

  console.log(params.slug.split("/"));

  return (
    <main className="main">
      <h1 className="heading">Posts</h1>
      <ComponentDocs
        component={component}
        defaultSelectedKey="usage"
        styling={props.tabs}
      />
      ;
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
      <div className="wrapper">
        {props.children}
        {/* {props.tabs} */}
        {/* <Tabs>
          <TabList>
            <Tab href="/previews/tab-next-router">Hot</Tab>
            <Tab href="/previews/tab-next-router/new">New</Tab>
          </TabList>
          <TabPanel>{props.tabs}</TabPanel>
        </Tabs> */}
      </div>
    </main>
  );
}
