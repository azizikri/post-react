import axios from "axios";
import { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // "Access-Control-Allow-Origin": "*",
      Accept: "*",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body };

    setIsLoading(true);

    return axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: title,
          body: body,
		  userId: 1,
        },
        {
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="create">
      <h2>Add new Blog</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default PostCreate;
