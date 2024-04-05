export { data };

export type Data = Awaited<ReturnType<typeof data>>;

import type { Post } from "../type";
import type { PageContextServer } from "vike/types";

const data = async (pageContext: PageContextServer) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${pageContext.routeParams!.id}`
  );
  const singlePostData = (await response.json()) as Post;
  console.log(singlePostData);

  return { singlePostData, title: `${singlePostData.title}` };
};
