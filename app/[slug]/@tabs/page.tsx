"use client";
import { allComponents } from "contentlayer/generated";
import { MDXContent } from "../../../components/MDXContent";
import { getTableOfContents } from "../../../utils/getTableOfContents";

export default function Page(props: { params: { slug: string } }) {
  const { params } = props;
  const component = allComponents.find(
    (component) => component._raw.sourceFileName.split(".")[0] === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);
  console.log(getTableOfContents(component?.body.raw));
  return <MDXContent content={component?.body.code} />;
}
