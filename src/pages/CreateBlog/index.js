import React from "react";
import { Button, Gap, Input, TextArea, Upload, Link } from "../../components";
import "./createBlog.scss";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => navigate("/")} />
      <p className="title">Create new content blog</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={10} />
      <div className="button-action">
        <Button title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
