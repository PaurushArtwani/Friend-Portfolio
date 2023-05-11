import "../../Maincontainer.css";
import { useState } from "react";
import { useEffect } from "react";

import SectionHeading from "../../BuildingBlocks/SectionHeading";
import styled from "styled-components";

const Blog = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("project.json").then((project) => {
      project.json().then((project) => {
        setData(project);
        console.log(project);
      });
    });
  }, []);
  return (
    <>
      <SectionHeading title={"Projects"}></SectionHeading>

      {data &&
        data.projects.map((record) => {
          return (
            <MyBlog className="row blog ">
              <div className="col-md-4 blog-img">
                <img src={record.image} alt="" />
              </div>
              <div className="col-md-6 blog-content">
                <h4 className="blog-card-title py-2">{record.projectname}</h4>
                <p className="py-2">Team Member:{record.members} </p>
                <p className="py-1">Language Used : {record.language}</p>
                <p>My Role : {record.role}</p>
                <p>About Project:{record.description}</p>
              </div>
            </MyBlog>
          );
        })}
    </>
  );
};
const MyBlog = styled.div`
  .blog-img img {
    width: 80%;
    height: 72%;
    padding: 17px;
    padding-left: 4em;
    padding-right: 4em;
  }
  .blog-img {
    padding: 0px;
  }
  .blog {
    margin-bottom: 20px;
  }
  .blog-card-title {
    font-weight: 100 !important;
    margin-top: 20px;
  }
  .blog-content > p {
    font-family: monospace;
    color: #6f6f6f;
  }
  .blog {
    border: 1px solid #dee2e6;
  }
  .blog-card-caption {
    margin: 15px 0 15px !important;
  }
  .blog-card-caption a {
    margin-right: 10px;
    color: #444;
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
    opacity: 0.7;
    font-size: 13px;
  }
  .social-media-logos svg path {
    color: red;
    font-size: 23px;
    background: transparent;
  }
  .blog-card-link {
    text-decoration: none;
    margin-top: 20px;
    display: block;
    font-size: 13px;
    color: #444;
  }
`;
export default Blog;
