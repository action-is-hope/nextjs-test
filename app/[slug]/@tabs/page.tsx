"use client";
import { allComponents } from "contentlayer/generated";
import { MDXContent } from "../../../components/MDXContent";
import { getTableOfContents } from "../../../utils/getTableOfContents";
import { Sandpack } from "@codesandbox/sandpack-react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import {
  Button,
  P,
  H2,
  ActionButton,
  RadioGroup,
  Radio,
} from "@actionishope/shelley";
import ReactLiveBlock from "../../../components/ReactLiveBlock";
export default function Page(props: { params: { slug: string } }) {
  const { params } = props;
  const component = allComponents.find(
    (component) => component._raw.sourceFileName.split(".")[0] === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);
  console.log(getTableOfContents(component?.body.raw));

  const scope = { Button, P, H2, ActionButton, RadioGroup, Radio };

  // const code = `
  //   <Button>Hello</Button>
  // `;

  const code = `
<RadioGroup label="Are you a wizard?" defaultValue="yes">
  <Radio value="yes">Yes</Radio>
  <Radio value="no">No</Radio>
</RadioGroup>
  `;

  return (
    <>
      {/* <ReactLiveBlock rawCode={code} editable /> */}

      {/* <LiveProvider code={code} scope={scope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider> */}

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
