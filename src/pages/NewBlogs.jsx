import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaPhone } from "react-icons/fa";

const blogData = [
  { title: "Adapting Benefits Packages to Attract Top...", img: "https://mitchelladam.co.uk/wp-content/uploads/2024/08/campaign-creators-qCi_MzVODoU-unsplash-scaled-e1722601915925-1536x781.jpg" },
  { title: "Are CVs Outdated? Embracing Skills-Based...", img: "https://mitchelladam.co.uk/wp-content/uploads/2024/06/Cv-Pic-1536x1152.jpg" },
  { title: "The Growing Influence of AI in Recruitment", img: "https://mitchelladam.co.uk/wp-content/uploads/2024/06/steve-johnson-_0iV9LmPDn0-unsplash-1536x864.jpg" },
  { title: "How Can You Fund a Recruitment Start-Up?", img: "https://mitchelladam.co.uk/wp-content/uploads/2024/05/Blog-Pic-1536x1024.jpg" },
  { title: "Recruitment to Retention: Ensuring Seamless...", img: "https://mitchelladam.co.uk/wp-content/uploads/2024/05/ux-indonesia-qC2n6RQU4Vw-unsplash-1536x1024.jpg" },
  { title: "Things to Consider Before Accepting A Counter-...", img: "https://mitchelladam.co.uk/wp-content/uploads/2021/06/1-1536x1229.jpg" },
  { title: "What Recruiters Need to Know About AI", img: "https://mitchelladam.co.uk/wp-content/uploads/2021/08/about-tablet-min-1024x579.png" },
  { title: "Creating Culture in Hybrid Workplaces", img: "https://mitchelladam.co.uk/wp-content/uploads/2021/06/4-1536x1024.jpg" },
  { title: "How to Manage Candidate Ghosting", img: "https://mitchelladam.co.uk/wp-content/uploads/2021/08/hire-tablet-min-1024x579.png" },
  { title: "Tech Tools for Modern Recruitment", img: "" },
  { title: "Things to Consider Before Accepting A Counter-...", img: "" },
  { title: "What Recruiters Need to Know About AI", img: "/images/blog7.jpg" },
  { title: "Creating Culture in Hybrid Workplaces", img: "/images/blog8.jpg" },
  { title: "How to Manage Candidate Ghosting", img: "/images/blog9.jpg" },
  { title: "Tech Tools for Modern Recruitment", img: "/images/blog10.jpg" },
  { title: "Adapting Benefits Packages to Attract Top...", img: "/images/blog1.jpg" },
  { title: "Are CVs Outdated? Embracing Skills-Based...", img: "/images/blog2.jpg" },
  { title: "The Growing Influence of AI in Recruitment", img: "/images/blog3.jpg" },
  { title: "How Can You Fund a Recruitment Start-Up?", img: "/images/blog4.jpg" },
  { title: "Recruitment to Retention: Ensuring Seamless...", img: "/images/blog5.jpg" },
  { title: "Things to Consider Before Accepting A Counter-...", img: "/images/blog6.jpg" },
  { title: "What Recruiters Need to Know About AI", img: "/images/blog7.jpg" },
  { title: "Creating Culture in Hybrid Workplaces", img: "/images/blog8.jpg" },
  { title: "How to Manage Candidate Ghosting", img: "/images/blog9.jpg" },
  { title: "Tech Tools for Modern Recruitment", img: "/images/blog10.jpg" },
  { title: "Things to Consider Before Accepting A Counter-...", img: "/images/blog6.jpg" },
  { title: "What Recruiters Need to Know About AI", img: "/images/blog7.jpg" },
  { title: "Creating Culture in Hybrid Workplaces", img: "/images/blog8.jpg" },
  { title: "How to Manage Candidate Ghosting", img: "/images/blog9.jpg" },
  { title: "Tech Tools for Modern Recruitment", img: "/images/blog10.jpg" },
];

const ITEMS_PER_PAGE = 6;

const NewsBlogs = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);

  const currentItems = blogData.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-[#0a0f1c] text-white px-4 sm:px-8 lg:px-20 py-16 min-h-screen">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12">
        News & Blogs<span className="text-yellow-400">.</span>
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((blog, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={blog.img}
              alt="blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-4">{blog.title}</h3>
              <button className="flex items-center text-sm bg-yellow-400 rounded-full px-4 py-2 font-semibold hover:bg-yellow-500 transition">
                READ MORE <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-yellow-500 disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-10 h-10 rounded-full ${
              page === i ? "bg-yellow-400" : "bg-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-yellow-500 disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Call Button */}
      <div className="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-50">
        <FaPhone />
        <span className="font-medium">0121 651 1235</span>
      </div>
    </div>
  );
};

export default NewsBlogs;
