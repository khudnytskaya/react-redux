import React from "react";
import { useParams } from "react-router-dom";
import SortedPosts from "./SortedPosts";

const Posts = () => {
  const { id } = useParams();
        console.log(id)
        console.log(1111)

  return (
    <div>
        <SortedPosts userId={id} />
    </div>
  );
};

export default Posts;