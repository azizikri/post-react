import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PostList = ({ posts, title }) => {
  return (
    <div className="post-list">
      <h2>{title}</h2>
      {posts
        .sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
        .map(({ id, title }) => (
          <div className="post-preview" key={id}>
            <Link to={`/posts/${id}`} key={id}>
              <h2>{title}</h2>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
