import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogPostList from "./components/BlogPostList";


const App: React.FC = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("./data/daten.ts")
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => {
        console.error("Error loading blog data:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="py-12">
        <Outlet context={blogData} />
        <BlogPostList/>
      </main>
      <Footer />
    </>
  );
};

export default App;