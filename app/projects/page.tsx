"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

type Project = {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  imageUrl: string
  link?: string
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "HappyHr",
      shortDescription: "Dynamic Price Adjustment and Analytics for Small Businesses",
      fullDescription:
        "HappyHr is a startup I’m building to help small businesses maximize revenue through dynamic pricing and smart analytics. Inspired by a late-night line at Joe’s Pizza in Ann Arbor, the idea was born from a simple question: would paying a little more during peak demand stop customers from buying? This summer, I’m diving deep—conducting customer interviews, researching surge pricing strategies, and building an MVP to bring real-time, data-driven pricing to restaurants and retailers.",
      technologies: ["next.js", "react", "tailwind css", "clover api", "supabase", "OpenAI", "scikit-learn"],
      imageUrl: "/happyhr.png?height=400&width=600",
      link: "https://happyhr-website.vercel.app/",
    },
    {
      id: 2,
      title: "Chopsticks",
      shortDescription: "AI-powered Video Editor",
      fullDescription:
        "Chopsticks is an AI-powered video editing platform built for creators. Designed to streamline long-form content editing, it features a chat-based interface for intuitive video manipulation and an automated clip generator that identifies and extracts the most engaging moments. By blending deep learning with a seamless user experience, Chopsticks saves time, boosts productivity, and helps creators grow their channels faster.",
      technologies: ["deepface", "hugging face", "OpenAI", "python", "reflex", "t5", "whisper"],
      imageUrl: "/chopsticks.png?height=400&width=600",
      link: "https://devpost.com/software/clipgenius-ai-powered-streamedit",
    },
    {
      id: 3,
      title: "HiveHunt",
      shortDescription: "AI-powered Real Estate Assistant",
      fullDescription:
        "HiveHunt is dedicated to enabling users to confidently represent themselves in real estate transactions, providing the tools and resources necessary to navigate the home buying or selling process independently.",
      technologies: ["next.js", "react", "tailwind css", "OpenAI", "supabase"],
      imageUrl: "/hivehunt.png?height=400&width=600",
      link: "https://docs.google.com/presentation/d/1oak1w58FFLt2k-hx4h9F8Ir6CJxHZuK4C3bKMjBHvAk/edit?usp=sharing",
    },
    {
      id: 4,
      title: "PupPod",
      shortDescription: "ML-based Web App for PHD students to analyze dog behavior",
      fullDescription:
        "Led the web development and machine learning teams to implement a dynamic web application for PhD students, facilitating advanced data analysis and improving research efficiency by 40% when using calculated automated insights. Collaborated with co-founder to develop a MySQL data storage system managing information for 5,000 dogs and 130,000 game sessions. Created a custom GUI to streamline data retrieval increasing interpretability of complex datasets.",
      technologies: ["next.js", "react", "tailwind css", "OpenAI", "supabase", "python", "scikit-learn"],
      imageUrl: "/puppod.png?height=400&width=600",
      link: "https://github.com/kaavlu/puppod-ml",
    },
    {
      id: 5,
      title: "Earning Calls Stock Predictor",
      shortDescription: "a tool to help track expenses and plan budgets",
      fullDescription:
        "Created an intuitive algorithm, using scikit-learn and open-ai, to analyze investor reports and predictions for all relevant stocks before an earnings call, buy x amount of the stock 1 day before the call, and sell 1 day after. Resulted in a 15-20% ROI in April 2023 - May 2024, on a month to month basis. Scraped Zacks Investment Research to get/store earnings call data in a MySQL schema. Used data to train regression model. Created GUI using tkinter to display useful inferences made and change metrics used to judge data.",
      technologies: ["mysql", "python", "scikit-learn", "tkinter"],
      imageUrl: "/ecsp.png?height=400&width=600",
    },
    {
      id: 6,
      title: "personal website",
      shortDescription: "a minimalist personal website with a purple theme",
      fullDescription:
        "this is my personal website built with next.js and tailwind css. it features a clean, minimalist design with a purple color scheme. the site includes information about me, my projects, and ways to contact me.",
      technologies: ["next.js", "react", "tailwind css"],
      imageUrl: "/website.png?height=400&width=600",
      link: "https://github.com/kaavlu/movie-recommender",
    },
  ]

  // Group projects into rows of 3 (or fewer for the last row)
  const projectRows = projects.reduce<Project[][]>((rows, project, index) => {
    if (index % 3 === 0) {
      rows.push([project])
    } else {
      rows[rows.length - 1].push(project)
    }
    return rows
  }, [])

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null)
    } else {
      setExpandedId(id)
    }
  }

  return (
    <main className="min-h-screen bg-purple-50 px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-purple-900">projects</h1>

        <div className="space-y-8">
          {projectRows.map((row, rowIndex) => (
            <div key={rowIndex} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {row.map((project) => (
                  <div
                    key={project.id}
                    className="overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-200 hover:shadow-md"
                    onClick={() => toggleExpand(project.id)}
                  >
                    <div className="cursor-pointer">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-purple-800">{project.title}</h3>
                          {expandedId === project.id ? (
                            <ChevronUp className="h-5 w-5 text-purple-600" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-purple-600" />
                          )}
                        </div>
                        <p className="mt-2 text-sm text-purple-600">{project.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Expanded project details - shown below the row */}
              {row.some((project) => project.id === expandedId) && (
                <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all duration-300">
                  {row
                    .filter((project) => project.id === expandedId)
                    .map((project) => (
                      <div key={`expanded-${project.id}`} className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="relative h-64 overflow-hidden rounded-lg md:col-span-1">
                          <Image
                            src={project.imageUrl || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <h3 className="mb-3 text-xl font-medium text-purple-800">{project.title}</h3>
                          <p className="mb-4 text-purple-800">{project.fullDescription}</p>
                          <div className="mb-4">
                            <h4 className="mb-2 text-sm font-medium text-purple-700">technologies used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-800"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800"
                              onClick={(e) => e.stopPropagation()}
                            >
                              view project <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
