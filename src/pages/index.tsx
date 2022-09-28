import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { graphql } from "gatsby";

const IndexPage = ({ data }: Props) => {
  return (
    <main>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`${node.fields.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <small> {node.fields.slug}</small>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </main>
  );
};
type Props = PageProps & {
  data: {
    allMdx: {
      nodes: {
        id: string;
        excerpt: string;
        frontmatter: { date: string; title: string };
        fields: {
          slug: string;
        };
      }[];
    };
  };
};
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
