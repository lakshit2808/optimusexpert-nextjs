// components/BlogContent.js
import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogContent = ({ content }) => {
  return (
    <div className="prose prose-lg mx-auto my-8">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogContent;
