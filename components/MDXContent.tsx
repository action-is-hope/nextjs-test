import { useMDXComponent } from "next-contentlayer/hooks";
import { H1, H2, P, Text } from "@actionishope/shelley/Text";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import Code from "./Code";
import { ReactElement } from "react";
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
interface MDXComponentProps {
  content: string;
}

export function MDXContent(props: MDXComponentProps) {
  const MDX = useMDXComponent(props.content);
  // Define your custom MDX components.
  const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    h1: ({ children }) => <H1>{children}</H1>,
    h2: ({ children }) => <H2>{children}</H2>,
    ul: ({ children }) => <Text as="ul">{children}</Text>,
    p: ({ children }) => <P>{children}</P>,
    pre: ({ children }) => {
      const { children: childrenString, className } = (children as ReactElement)
        ?.props;
      return <Code language={className.split("-")[1]}>{childrenString}</Code>;
    },
    // Add a custom component.
    MyComponent: ({ children }) => <div>{children}</div>,
  };
  return <MDX components={mdxComponents} />;
}
