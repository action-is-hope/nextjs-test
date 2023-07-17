// app/[slug]/styling/page.tsx
import { allComponents } from "contentlayer/generated";
import { ComponentDocs } from "../../../components/ComponentDocs";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find(
    (component) => component._raw.sourceFileName.split(".")[0] === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: component.title };
};

const ComponentLayoutStyling = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find(
    (component) => component._raw.sourceFileName.split(".")[0] === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);

  return <ComponentDocs component={component} defaultSelectedKey="styling" />;
};

export default ComponentLayoutStyling;
