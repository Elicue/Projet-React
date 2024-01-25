export default function Comment({ username, comment }) {
  return (
    <div>
      <p className="user">
        Comment from <span>{username}</span>:
      </p>
      <p className="com">→ {comment}</p>
      <hr />
    </div>
  );
}
