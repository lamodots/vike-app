export default Page;

import { useState } from "react";
import { useData } from "../../../renderer/useData";
import { Data } from "./+data";

function Page() {
  const [loadmore, setLoadMore] = useState(20);
  const { postsData } = useData<Data>();

  const handleLoadMore = () => setLoadMore((prev) => prev + 20);

  return (
    <>
      <h1>Posts</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          paddingBottom: 40,
          marginTop: 80,
        }}
      >
        {postsData.slice(0, loadmore).map(({ id, title }) => (
          <div key={id}>
            <div>{id}</div>
            <a href={`/blog/${id}`}>{title}</a>
          </div>
        ))}
      </div>
      {loadmore < postsData.length ? (
        <button
          onClick={handleLoadMore}
          style={{
            backgroundColor: "#222",
            height: 40,
            textAlign: "center",
            color: "#fff",
            width: 220,
            display: "block",
            margin: "auto",
            cursor: "pointer",
          }}
        >
          Load more
        </button>
      ) : (
        <p style={{ textAlign: "center" }}>No more post</p>
      )}
    </>
  );
}
