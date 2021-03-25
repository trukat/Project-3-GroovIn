import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../components/PostContainer.css";

const PostContainer = () => {
  const [form, setForm] = useState({ title: "", text: "" });

  let [post, setPost] = useState([]);
  const history = useHistory();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    try {
      let newPost = await axios.post("/post", form, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      let post = newPost.data;
      setPost([...post]);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    try {
      await axios.delete("/post", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      let userPosts = await axios.get("/post", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      let post = userPosts.data;
      setPost([...post]);
    } catch (err) {
      console.log(err);
    }
  };

  // pushes user input data into database
  const updatePost = async (e) => {
    e.preventDefault();
    if (post[e.target.value]) {
      form["_id"] = post[e.target.value]._id;
    }
    try {
      const updateUserPost = await axios.patch("/post/edit", form, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      for (let i = 0; i < post.length; i++) {
        if (updateUserPost.data[0]._id === post[i]._id) {
          console.log(post[i]);
          post[i] = updateUserPost.data[0];
          console.log(post[i]);
          setPost([...post]);
        }
      }
      console.log(updateUserPost.data);
    } catch (err) {
      console.log(err, "hi");
    }
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    (async () => {
      try {
        const allPost = await axios.get("/post", {
          cancelToken: source.token,
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        });
        setPost(allPost.data);
      } catch (err) {
        console.log(err);
      }
    })();
    return () => source.cancel();
  }, []);

  return (
    <div>
      <form onSubmit={submitPost}>
        <label className="TitlesBox">Title:</label>
        <input onChange={onChange} type="text" name="title" />
        <label className="TextBox">Text:</label>
        <input onChange={onChange} type="text" name="text" />
        <button type="submit">Submit</button>
      </form>

      <div className="Box">
        {post.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
            <form onClick={(e) => updatePost(e)}>
              <label className="userName">Name:</label>
              <input onChange={onChange} type="text" name="title" />
              <label className="Desc">Description:</label>
              <input onChange={onChange} type="text" name="text" />
              <button value={index} type="submit">
                Edit
              </button>
            </form>
            {/* <button onClick={updatePost}>Update</button> */}
            <button onClick={deletePost}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
