// "use client";
import { allComponents } from "contentlayer/generated";
import { MDXContent } from "../../../components/MDXContent";
import { getTableOfContents } from "../../../utils/getTableOfContents";
// import { Sandpack } from "@codesandbox/sandpack-react";
export default function Page(props: { params: { slug: string } }) {
  const { params } = props;
  const component = allComponents.find(
    (component) => component._raw.sourceFileName.split(".")[0] === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);
  console.log(getTableOfContents(component?.body.raw));

  return (
    <>
      {/* <Sandpack
        files={{
          "/Wrapper.js": `export default () => return "";`,

          "/Button.js": {
            code: `export default () => {
  return <button>Hello</button>
};`,
            // readOnly: true, // Set as non-editable, defaults to `false`
            // active: true, // Set as main file, defaults to `false`
            // hidden: false, // Tab visibility, defaults to `false`
          },
        }}
        template="react"
      /> */}
      <MDXContent content={component?.body.code} />
    </>
  );
}
