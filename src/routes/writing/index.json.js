import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllArticles = () => {
  fs.readdirSync("blog-content").map((filename) => {
    const post = fs.readFileSync(
      path.resolve("blog-content", filename),
      "utf-8"
    );
    return grayMatter(post).data;
  });
};

export function get(req, res) {
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  const posts = getAllArticles();
  res.end(JSON.stringify(posts));
}
