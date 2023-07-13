// 2) with line 15 uncommented (with error); uncommenting the below will 'resolve' the error.
// "use client";
import { Text, H2 } from "@actionishope/shelley/Text";
import { ProgressCircle } from "@actionishope/shelley/ProgressCircle";
import {
  st,
  classes as defaultStyles,
} from "@actionishope/shelley/styles/default/project.st.css";
import { classes as shelleyStyles } from "@actionishope/shelley/styles/shelley/project.st.css";

// default styles files
import "@actionishope/shelley/styles/default/text.st.css";
// shelley styles
import "@actionishope/shelley/styles/shelley/text.st.css";
/**
 * Note: text.st.css does NOT invoke the error which makes sense as
 * the Text component does not include the "use client" directive.
 *
 * ProgressCircle makes use of Adobe hooks thus includes the "use client" directive.
 */

// 1) Uncomment the line below to see the error:
// import "@actionishope/shelley/styles/shelley/progressCircle.st.css";
// See https://github.com/wix/stylable/issues/2028 for a teaser :-)

/**
 * Note: Importing the ProgressCirle CSS into a local theme.st.css file also invokes the error.
 */

import "../../theme.st.css";

export default function About(): JSX.Element {
  return (
    <>
      <div className={st(defaultStyles.root, shelleyStyles.root)}>
        <Text as="h1" vol={10}>
          Nextjs - shelley
        </Text>
        <ProgressCircle aria-label="Loading…" value={90} />
        <H2 vol={6} uppercase>
          Heading level two
        </H2>
      </div>
    </>
  );
}
