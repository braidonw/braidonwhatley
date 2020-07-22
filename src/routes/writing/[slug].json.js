import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";
import hljs from "highlight.js";

const getArticle = (fileName) => {
  return fs.readFileSync(
    path.resolve("blog-content", `${fileName}.md`),
    "utf-8"
  );
};

export function get(req, res, next) {
  const { slug } = req.params;

  const article = getArticle(slug);

  const renderer = new marked.Renderer();

  renderer.code = (source, lang) => {
    const { value: highlighted } = hljs.highlight(lang, source);

    return `<pre class=""><code>${source}</code></pre>`;
  };

  const { data, content } = grayMatter(article);

  const html = marked(content, { renderer });

  if (html) {
    res.writeHead(200, {
      "Content-type": "application/json",
    });

    res.end(JSON.stringify({ html, ...data }));
  } else {
    res.writeHead(404, {
      "Content-type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: "Not found",
      })
    );
  }
}
