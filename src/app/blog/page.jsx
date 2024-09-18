"use client"
import { useState } from 'react'
import { Input, Button, Card, CardBody, CardFooter, Checkbox, Image } from "@nextui-org/react"
import { NavBar } from '../OELandingPage/NavBar'

const topics = [
  "All", "AI and data", "Aws", "Azure", "Business and leadership",
  "C sharp", "Cloud", "Cybersecurity", "Devops", "Data"
]

const blogPosts = [
  {
    title: "IT job growth in 2025: 5 ways to advance your tech career",
    author: "Pluralsight Content Team",
    date: "Sep 17, 2024",
    duration: "5 min",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["AI and data", "Business and leadership"]
  },
  {
    title: "How fintech companies build future-ready teams with upskilling",
    author: "Pluralsight Content Team",
    date: "Sep 13, 2024",
    duration: "3 min",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Fintech", "Business and leadership"]
  },
  {
    title: "AIOps vs. MLOps vs. LLMOps: Navigating the future of AI operations",
    author: "Kesha Williams",
    date: "Sep 13, 2024",
    duration: "6 min",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["AI and data", "Cloud"]
  }
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTopics, setSelectedTopics] = useState(["All"])

  const handleTopicChange = (topic) => {
    setSelectedTopics(prev => {
      if (topic === "All") {
        return ["All"]
      }
      const newTopics = prev.filter(t => t !== "All")
      if (newTopics.includes(topic)) {
        return newTopics.filter(t => t !== topic)
      } else {
        return [...newTopics, topic]
      }
    })
  }

  const filteredPosts = blogPosts.filter(post => 
    (selectedTopics.includes("All") || post.topics.some(topic => selectedTopics.includes(topic))) &&
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-black text-white">
        <NavBar/>
      <header className="bg-black-900 text-white py-16">      </header>

      
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
              {filteredPosts.map((post, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardBody className="p-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover"
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
                    <Button color="secondary" variant="light" className="p-0 text-purple-500">
                      Learn more
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}