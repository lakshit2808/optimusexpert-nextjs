"use client";
import { useState } from "react";

export default function UploadBlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    avatar: "",
    date: "",
    duration: "",
    topics: "",
    content: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("image", imageFile);
    form.append("title", formData.title);
    form.append("author", formData.author);
    form.append("avatar", formData.avatar);
    form.append("date", formData.date);
    form.append("duration", formData.duration);
    form.append("topics", formData.topics);
    form.append("content", formData.content);

    try {
      const response = await fetch("/api/blog/postcontent", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Your Blog</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter blog title"
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Enter author's name"
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="avatar">Avatar URL</label>
        <input
          type="text"
          name="avatar"
          id="avatar"
          placeholder="Enter avatar URL"
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="duration">Duration</label>
        <input
          type="text"
          name="duration"
          id="duration"
          placeholder="Enter duration"
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="topics">Topics (JSON format)</label>
        <input
          type="text"
          name="topics"
          id="topics"
          placeholder='["topic1", "topic2"]'
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          placeholder="Write your blog content here..."
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="image">Upload Image</label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
          className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Upload Blog
      </button>
    </form>
  );
}
