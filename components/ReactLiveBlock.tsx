import React, { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import scope from "./ReactLiveScope";
import { st, classes } from "./reactLiveBlock.st.css";
import { Text } from "@actionishope/shelley";
// import { liveEditorStyle, liveErrorStyle } from './styles'
// import { t } from 'utils/i18n'

// const LiveCodePreview = chakra(LivePreview, {
//   baseStyle: {
//     fontFamily: 'body',
//     mt: 5,
//     p: 3,
//     borderWidth: 1,
//     borderRadius: '12px',
//     overflowX: 'auto',
//   },
// })

// const EditableNotice = (props: BoxProps) => {
//   return (
//     <Box
//       position='absolute'
//       width='full'
//       top='-1.25em'
//       roundedTop='8px'
//       bg='#011627'
//       py='2'
//       zIndex='0'
//       letterSpacing='wide'
//       color='gray.400'
//       fontSize='xs'
//       fontWeight='semibold'
//       textAlign='center'
//       textTransform='uppercase'
//       pointerEvents='none'
//       {...props}
//     >
//       {t('component.mdx-components.react-live-block.editable-example')}
//     </Box>
//   )
// }

interface ReactLiveProps {
  editable?: boolean;
  rawCode: string;
}

function ReactLiveBlock({ editable, rawCode, ...rest }: ReactLiveProps) {
  const code = rawCode.trim().replace("// prettier-ignore", "");
  const [editorCode, setEditorCode] = useState(code.trim());
  const onChange = (newCode: string) => setEditorCode(newCode.trim());
  const liveProviderProps = {
    code: editorCode,
    scope,
    ...rest,
  };
  // return (
  //   <LiveProvider {...liveProviderProps}>
  //     <LivePreview />
  //     {/* <Box position='relative' zIndex='0'> */}
  //     <div style={{ position: "relative" }}>
  // {editable && (
  //   // <CodeContainer padding='5'>
  //   <LiveEditor onChange={onChange} />
  //   // </CodeContainer>
  // )}
  //       {/* <CopyButton code={editorCode} /> */}
  //       {/* {editable && <EditableNotice />} */}
  //       {/* </Box> */}
  //     </div>
  //     {editable && <LiveError />}
  //   </LiveProvider>
  // );
  return (
    <LiveProvider {...liveProviderProps}>
      {editable && (
        // <CodeContainer padding='5'>
        <Text as="div" vol={1} className={classes.codeBlock}>
          <LiveEditor onChange={onChange} />
        </Text>
        // </CodeContainer>
      )}
      {editable && <LiveError />}

      <LivePreview className={classes.preview} />
    </LiveProvider>
  );
}

export default ReactLiveBlock;
