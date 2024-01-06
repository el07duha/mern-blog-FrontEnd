import React from "react";
import { RegisterBG } from "../../assets";
import "./detailBlog.scss";
import { Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBG} alt="thumb" />
      <p className="blog-title">Title</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos
        dolorem nostrum ea, eaque iusto deleniti facilis vel libero doloribus
        esse! Placeat nobis laudantium quis unde praesentium corrupti suscipit
        officiis!
      </p>
      <Gap height={10} />
      <Link title="Kembali Ke Home" onClick={() => navigate("/")} />
    </div>
  );
};

export default DetailBlog;
