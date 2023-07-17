"use client";
import Link from "next/link";
import { Component, allComponents } from "contentlayer/generated";
import { H1, P } from "@actionishope/shelley/Text";
import { Tabs } from "@actionishope/shelley/Tabs";
import { Item } from "@actionishope/shelley/Item";
import { MDXContent } from "./MDXContent";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ComponentDocsProps {
  component: Component;
  className?: string;
  content?: string;
  defaultSelectedKey?: string;
  styling?: any;
}

export function ComponentDocs(props: ComponentDocsProps) {
  const { component, defaultSelectedKey = "usage", styling } = props;
  const [activeTab, setActiveTab] = useState(defaultSelectedKey);
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   console.log(pathname.split("/")[2]);
  //   setActiveTab(pathname.split("/")[2] as string);
  // }, [pathname]);

  return (
    <article style={{ width: "500px" }}>
      <H1>{component.title}</H1>
      <Tabs
        selectedKey={activeTab}
        // defaultSelectedKey={defaultSelectedKey}
        onSelectionChange={(route) => {
          setActiveTab(route as string);
          const url =
            route === "usage"
              ? `/${component.url}`
              : `/${component.url}/${route}`;
          return router.push(url);
        }}
      >
        <Item key="usage" title="Usage">
          <MDXContent content={component.body.code} />
        </Item>
        <Item key="props" title="Props">
          Senatus Populusque Romanus.
        </Item>
        <Item key="styling" title="Styling">
          {styling}
          <P>
            Prefetching is a way to preload a route in the background before
            it's visited. The rendered result of prefetched routes is added to
            the router's client-side cache. This makes navigating to a
            prefetched route near-instant.
          </P>
        </Item>
      </Tabs>
      <Link href={`${component.url}/styling`}>Styling</Link>
    </article>
  );
}
