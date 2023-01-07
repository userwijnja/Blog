import React from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <>
      {/* Blog Cards */}

      <section className="blog">
        <div className="container grid3">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="item" />
              </div>

              {/* Link to full blogpost */}

              <div className="details">
                <Link to={`/details/${item.id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>

                {/* Bottom info*/}

                <div className="date">
                  <AiOutlineClockCircle className="icon" />{" "}
                  <label htmlFor="">{item.date}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
