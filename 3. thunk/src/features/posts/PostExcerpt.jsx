/* eslint-disable react/prop-types */
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";

import TimeAgo from "../../../../2. post/src/features/posts/TimeAgo";

const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        {/* <TimeAgo timestamp={post.date} /> */}
      </p>
      <ReactionButton post={post} />
    </article>
  );
};

export default PostExcerpt;
