// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

// The node-fetch package (which only works on the server-side) can be used since
// this file always runs on the server-side, see https://vike.dev/data#server-side
import fetch from "node-fetch";
import type { Post } from "../type";
import type { PageContextServer } from "vike/types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (pageContext: PageContextServer) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postsData = (await response.json()) as Post[];

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.

  return {
    postsData,
    // The page's <title>
    title: `${postsData.length} blogs`,
  };
};
