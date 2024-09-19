"use client";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardBody } from "@nextui-org/react";
import { NavBar } from "@/app/OELandingPage/NavBar";
import Image from "next/image";

export default function BlogContentPage({ params }) {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const fetchAllData = async () => {
    try {
      const response = await fetch("/api/blog/getcontent");
      if (!response.ok) throw new Error("Failed to fetch data!");

      const data = await response.json();
      setBlogPosts(data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error(error);
      setError(error.message); // Set error message
      setLoading(false); // Ensure loading is also false on error
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const blogPost = blogPosts.find((post) => post.id === params.blogId);

  const [estimatedReadTime, setEstimatedReadTime] = useState("");

  useEffect(() => {
    if (blogPost) {
      const wordCount = blogPost.content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200);
      setEstimatedReadTime(`${readingTime} min read`);
    }
  }, [blogPost]);

  if (loading) {
    return <div className="text-white">Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>; // Show error message if there's an error
  }

  if (!blogPost) {
    return <div className="text-white">Blog post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <header className="bg-black-900 text-white py-16"></header>

      <main className="container mx-auto px-4 py-8">
        <Card className="bg-gray-800 shadow-lg">
          <CardBody className="p-0">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              width={800} // Specify your image width
              height={400} // Specify your image height
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
              <div className="flex items-center text-gray-400 mb-6">
                <Image
                  src={blogPost.avatar}
                  alt={blogPost.author}
                  width={40} // Specify avatar width
                  height={40} // Specify avatar height
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span>{blogPost.author}</span>
                <span className="mx-2">•</span>
                <span>{blogPost.date}</span>
                <span className="mx-2">•</span>
                <span>{estimatedReadTime}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {blogPost.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="bg-purple-600 text-white px-2 py-1 rounded text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>{blogPost.content}</ReactMarkdown>
              </div>
            </div>
          </CardBody>
        </Card>
      </main>
    </div>
  );
}
