import { useRef } from "react";
import {
  useGetCommentsByProductQuery,
  useCreateCommentMutation,
} from "../store/products-api";

import Comment from "./Comment";

export default function CommentList({ id }) {
  const { data, error, isLoading } = useGetCommentsByProductQuery(id);
  const [createComment] = useCreateCommentMutation();

  const username_input = useRef();
  const comment_input = useRef();

  function handleAddComment(e) {
    e.preventDefault();
    const username = username_input.current.value;
    const comment = comment_input.current.value;
    if (!username || username.trim().length === 0) return;
    if (!comment || comment.trim().length === 0) return;
    // console.log(username, comment)
    createComment({ id, username, comment });
    // console.log(results)
  }
  return (
    <div className="all-comments">
      <h2>Comments</h2>
      <form onSubmit={handleAddComment}>
        <input ref={username_input} id="username" placeholder="Username" />
        <textarea
          ref={comment_input}
          rows="5"
          cols="33"
          id="comment"
          name="comment"
          placeholder="Your comment here..."
        ></textarea>
        <button type="submit">Add a comment</button>
      </form>
      <div className="list">
        {error && (
          <p>
            Something wrong happened when loading comments. Please try again.
          </p>
        )}
        {isLoading && <p>Loading...</p>}
        {data &&
          data.length > 0 &&
          data.map((comment, index) => <Comment key={index} {...comment} />)}
        {data && data.length === 0 && <p>Create the first comment</p>}
      </div>
    </div>
  );
}
