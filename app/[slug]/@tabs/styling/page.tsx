import { allComponentDetails, allComponents } from "contentlayer/generated";
import { MDXContent } from "../../../../components/MDXContent";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find(
    (component) => component._raw.sourceFileName.split(".")[0] === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: `${component.title} styling and theming` };
};

export default function Page(props: { params: { slug: string } }) {
  const { params } = props;
  const componentDetails = allComponentDetails.find(
    (item) => item.component === params.slug && item.category === "styling"
  );

  return (
    <MDXContent content={componentDetails ? componentDetails?.body.code : ""} />
  );
}
