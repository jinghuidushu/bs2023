import { MDXProvider } from "@mdx-js/react";
import React from "react";

const MyH1 = (props: {}) => <h1 style={{ color: `tomato` }} {...props} />;
const MyParagraph = (props: {}) => (
  <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
);

const components = {
  h1: MyH1,
  p: MyParagraph,
};

export const ComponentsWrapper = ({ children }: { children: any }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
