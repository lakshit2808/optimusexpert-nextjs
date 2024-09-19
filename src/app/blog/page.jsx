"use client";

import { useState, useEffect, useMemo } from 'react';
import { Input, Card, CardBody, CardFooter, Checkbox, Image } from "@nextui-org/react";
import { NavBar } from '../OELandingPage/NavBar';
import Link from 'next/link';

const topics = [
  "All", "AI and data", "Aws", "Azure", "Business and leadership",
  "C sharp", "Cloud", "Cybersecurity", "Devops", "Data"
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopics, setSelectedTopics] = useState(["All"]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchAllData = async () => {
    try {
      const response = await fetch("/api/blog/getcontent");
      if (!response.ok) throw new Error("Failed to fetch data!");
      
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  useEffect(() => {
    fetchAllData(); // Fetch data when the component is rendered
  }, []); // Runs only once on mount

  const handleTopicChange = (topic) => {
    setSelectedTopics((prev) => {
      if (topic === "All") return ["All"];
      const newTopics = prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic];
      return newTopics.includes("All") ? newTopics.filter(t => t !== "All") : newTopics;
    });
  };

  const filteredPosts = useMemo(() => blogPosts.filter(post => 
    (selectedTopics.includes("All") || post.topics.some(topic => selectedTopics.includes(topic))) &&
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  ), [blogPosts, searchTerm, selectedTopics]);

  if (loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <header className="bg-black-900 text-white py-16"></header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4">
            <h2 className="text-2xl font-bold mb-4">Search</h2>
            <Input
              type="text"
              placeholder="Search resources"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-8 bg-gray-800 text-white"
            />

            <h2 className="text-2xl font-bold mb-4">Filter</h2>
            <h3 className="text-xl font-semibold mb-2">Topic</h3>
            <div className="space-y-2">
              {topics.map((topic) => (
                <Checkbox
                  key={topic}
                  isSelected={selectedTopics.includes(topic)}
                  onValueChange={() => handleTopicChange(topic)}
                  color="secondary"
                  classNames={{
                    base: "inline-flex max-w-md w-full bg-gray-800 hover:bg-gray-700 items-center justify-start cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent data-[selected=true]:border-purple-500 transition-all",
                    label: "w-full text-sm text-white",
                    wrapper: "rounded-sm",
                    checkbox: "rounded-sm border-2 border-white data-[selected=true]:border-purple-500 data-[selected=true]:bg-purple-500",
                  }}
                >
                  {topic}
                </Checkbox>
              ))}
            </div>
          </aside>

          <section className="w-full md:w-3/4">
            <h1 className="text-4xl font-bold text-center">Blog</h1>
            <p className="text-gray-400 mb-4">Viewing {filteredPosts.length} of {blogPosts.length} results</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="bg-gray-800 border-gray-700">
                  <CardBody className="p-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover"
                      loading="lazy" // Lazy load images
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:line-clamp-none transition-all duration-300 ease-in-out">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-400">by {post.author}</p>
                      <p className="text-sm text-gray-400">{post.date} • {post.duration}</p>
                    </div>
                  </CardBody>
                  <CardFooter className="p-4">
                    <Link href={`/blog/${post.id}`} color="secondary" variant="light" className="p-0 text-purple-500">
                      Learn more
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
