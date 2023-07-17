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

const ComponentLayout = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find(
    (component) => component._raw.sourceFileName.split(".")[0] === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);

  return <ComponentDocs component={component} defaultSelectedKey="usage" />;
};

{
  /* <article className="mx-auto max-w-xl py-8">
Component Template with STYLING Tab enabled.
<Link href={`${component.url}/styling`}>Styling</Link>
<div className="mb-8 text-center">
  <time dateTime={component.date} className="mb-1 text-xs text-gray-600">
    {format(parseISO(component.date), "LLLL d, yyyy")}
  </time>
</div>
<MDXContent content={component.body.code} />
</article> */
}

export default ComponentLayout;
