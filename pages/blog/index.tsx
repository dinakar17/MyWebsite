import Image from "next/image";
import React from "react";
import { BlogHome, BlogsList, LatestBlog } from "../../components";

const index = () => {
  return (
    <>
    <BlogHome/>
    <LatestBlog/>
    <BlogsList/>
    </>
  );
};

export default index;
