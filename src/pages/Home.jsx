import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner"
import axios from "axios";
const Home = () => {
  const url = "https://fakestoreapi.com/products";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchProductData() {
    setLoading(true);
    try {
      const data = await axios.get(url);
      const output = data.data;
      setPosts(output);
      console.log(output);
    } catch {
      console.log("Unable to fetch api data...");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-8 my-10">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1  px-12 md:px-2 md:grid-cols-3 lg:grid-cols-4 justify-center  items-center gap-6">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : 
        <div>
          <p>No Data Found</p>
        </div>
      }
    </div>
  );
};

export default Home;
