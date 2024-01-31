import React, { useEffect, useCallback } from "react";
import { useParams, Link, } from "react-router-dom";
import daten from "../assets/daten.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogPostDetail: React.FC = () => {
  const { id } = useParams();
  const post = id ? daten.find((post) => post.id === parseInt(id)) : null;
  if (!post) {
    return <div>Blog post not found.</div>;
  }

  const previousPostId = post.id - 1;
  const nextPostId = post.id + 1;
  const memoizedPreviousPostId = useCallback(() => previousPostId, [previousPostId]);
  const memoizedNextPostId = useCallback(() => nextPostId, [nextPostId]);

  useEffect(() => {
    const previousPostButton = document.querySelector('.previous-post-button');
    const nextPostButton = document.querySelector('.next-post-button');

    if (previousPostButton && previousPostButton.classList) {
      if (memoizedPreviousPostId() <= 0) {
        previousPostButton.classList.add('hidden');
      } else {
        previousPostButton.classList.remove('hidden');
      }
    }
    if (nextPostButton && nextPostButton.classList) {
      if (memoizedNextPostId() > daten.length) {
        nextPostButton.classList.add('hidden');
      } else {
        nextPostButton.classList.remove('hidden');
      }
    }
  }, [memoizedPreviousPostId, memoizedNextPostId]);

  return (
<>
  <div className="h-screen">
    <Header />
    <div className="max-w-full mx-auto px-32 m-8">
      <div className="flex justify-between mt-6 mb-5">
        <Link to={`/blog/${memoizedPreviousPostId()}`} className="text-lg font-bold text-white bg-blue-600 p-2 px-4 hover:underline previous-post-button">
          Vorheriger Beitrag
        </Link>
        <div className="hidden md:block"></div>
        <Link to={`/blog/${memoizedNextPostId()}`} className="text-lg font-bold text-white bg-blue-600 p-2 px-4 hover:underline next-post-button">
          Nächster Beitrag
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <img src={post.image} alt={post.title} className="object-cover object-center w-full md:w-1/2 max-h-[400px] mb-6" />
        <div className="flex-row my-auto mr-52">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">{post.title}</h1>
          <div className="border-t border-gray-300 pt-4">
            <p className="text-sm text-blue-600"><span className="text-gray-500">Erstellt am: </span>{post.date}</p>
          </div>  
        </div>
      </div>
      <div className="text-xl text-black font-semibold mb-12">
          {post.desc}
      </div>
    </div>
    <Footer />
  </div>
</>
  );
};

export default BlogPostDetail;