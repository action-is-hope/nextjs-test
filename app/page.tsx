// app/page.tsx
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allComponents, Component } from "contentlayer/generated";
import { MDXContent } from "../components/MDXContent";

function Component(component: Component) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={component.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {component.title}
        </Link>
      </h2>
      <time
        dateTime={component.date}
        className="mb-2 block text-xs text-gray-600"
      >
        {format(parseISO(component.date), "LLLL d, yyyy")}
      </time>
      {/* {component?.description && (
        <div
          className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: component.description?.html }}
        />
      )} */}
      <MDXContent content={component.body.code} />
    </div>
  );
}

export default function Home() {
  // const posts = allComponents.sort((a, b) =>
  //   compareDesc(new Date(a.date), new Date(b.date))
  // );
  const posts = allComponents;

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {posts.map((component, idx) => (
        <Component key={idx} {...component} />
      ))}
    </div>
  );
}
