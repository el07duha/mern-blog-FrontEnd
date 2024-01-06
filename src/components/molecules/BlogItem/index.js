import React from "react";
import { RegisterBG } from "../../../assets";
import "./blogItem.scss";
import { Button, Gap } from "../../atoms";
import { useNavigate } from "react-router-dom";

const BlogItem = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBG} alt="post" />
      <div className="content-detail">
        <p className="title">TitleBlog</p>
        <p className="author">AuthorDate post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          consequuntur sit assumenda distinctio esse dolorum odit ratione
          corrupti quibusdam cumque?
        </p>
        <Gap height={10} />
        <Button title="View Detail" onClick={() => navigate("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
