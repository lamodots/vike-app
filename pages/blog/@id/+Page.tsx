export { Page };
import { useData } from "../../../renderer/useData";
import type { Data } from "./+data";
function Page() {
  const { singlePostData } = useData<Data>();
  return (
    <div>
      <a href="."> Back</a>
      <h1>{singlePostData.title}</h1>
      <p>{singlePostData.body}</p>
    </div>
  );
}
