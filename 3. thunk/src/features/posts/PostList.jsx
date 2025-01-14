import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostError,
  getPostStatus,
  fetchPosts,
} from "./postsSlice";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading ...."</p>;
  } else if (postStatus === "succeeded") {
    // const orderedPost = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    content = posts.map((post) => <PostExcerpt key={post.id} post={post} />);
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
