import { marked } from "marked";

export const convertMarkdownToHTML = (markdown) => {
  return marked(markdown);
};

