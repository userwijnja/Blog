import React, { useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { blog } from "../../assets/data/data";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
  }, []);

  return (
    <>
      {blogs ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} alt="" />
            </div>
            <div className="right">
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
              <p>{blogs.desc2}</p>
              <p>{blogs.desc3}</p>
              <p>{blogs.desc4}</p>
              <p>{blogs.sources}</p>
              <p>Author: Maarten</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
