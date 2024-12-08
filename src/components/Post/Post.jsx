export function Post({ author, description }) {
  return (
    <div>
      <strong>{author}</strong>
      <p>{description}</p>
    </div>
  );
}
