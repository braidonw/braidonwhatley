import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllArticles = () => {
  try {
    return fs.readdirSync("static/posts/").map((filename) => {
      const post = fs.readFileSync(
        path.resolve("static/posts", filename),
        "utf-8"
      );
      return grayMatter(post).data;
    });
  } catch (e) {
    return [];
  }
};

export function get(_, res) {
  res.writeHead(200, {
    "Content-type": "application/json",
  });

  let articles = getAllArticles();
  res.end(JSON.stringify(articles));
}
