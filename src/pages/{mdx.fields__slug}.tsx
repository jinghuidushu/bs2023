import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

const SlugPage = ({ data, children }: Props) => {
  console.log(data,children);
  
  return <div>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
  </div>;
};
type Props = PageProps & {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
      fields: {
        slug: string;
      };
    };
  };
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      fields {
        slug
      }
    }
  }
`;
export default SlugPage;

export const Head = ({ data }: Props) => (
  <title>{data.mdx.frontmatter.title}</title>
);
