import Image from "next/image"
import { ExternalLink } from "lucide-react"

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
  const projects: Project[] = [
    {
      id: 1,
      title: "Dyno",
      shortDescription: "Local-first AI Inference SDK with Cloud Fallback",
      fullDescription:
        "Dyno is an SDK and runtime system that helps developers offload AI inference to users' own devices when possible, while falling back to cloud providers when needed. The system includes a TypeScript SDK, local agent, hosted control plane, and dashboard for configuring execution policies, device readiness, and model routing. Dyno is built around the idea that AI apps should be cheaper, faster, and more privacy-preserving by using local compute whenever it is reliable enough.",
      technologies: ["typescript", "next.js", "node.js", "supabase", "sqlite", "openai api", "gemini", "electron"],
      imageUrl: "/dyno.png?height=400&width=600",
      link: "https://github.com/kaavlu/local-ai-sdk",
    },
    {
      id: 2,
      title: "Multi-GPU AI Server",
      shortDescription: "Self-hosted Local LLM Infrastructure",
      fullDescription:
        "I built a multi-GPU local AI server to run open-source language models on my own hardware. The system uses repurposed GPU mining hardware with vLLM, Ollama, and Open WebUI to serve models through OpenAI-compatible APIs. I configured multi-GPU inference, Docker-based deployments, remote access through Tailscale, and model serving for experiments with local AI agents, private inference, and cost-efficient development workflows.",
      technologies: ["vllm", "ollama", "docker", "linux", "tailscale", "open webui", "cuda", "qwen"],
      imageUrl: "/server.png?height=400&width=600",
      link: "https://substack.com/@manavkhanvilkar/p-183704693",
    },
    {
      id: 3,
      title: "HFT-LLVM",
      shortDescription: "Compiler Optimizations for High-Frequency Trading Systems",
      fullDescription:
        "HFT-LLVM is a compiler optimization project focused on improving the performance of latency-sensitive trading workloads. I built a realistic C++ limit order book benchmark and implemented LLVM passes that optimize hot-path execution by improving cache locality and removing unnecessary atomic overhead in single-threaded production settings. The project explores how domain-specific compiler transformations can make systems code faster without changing application-level logic.",
      technologies: ["c++", "llvm", "compiler passes", "order book", "cache locality", "atomics", "profiling", "linux"],
      imageUrl: "/hft.png?height=400&width=600",
      link: "https://github.com/rjshs/hft-llvm",
    },
    {
      id: 4,
      title: "HappyHr",
      shortDescription: "Dynamic Price Adjustment and Analytics for Small Businesses",
      fullDescription:
        "HappyHr is a startup I’m building to help small businesses maximize revenue through dynamic pricing and smart analytics. Inspired by a late-night line at Joe’s Pizza in Ann Arbor, the idea was born from a simple question: would paying a little more during peak demand stop customers from buying? This summer, I’m diving deep—conducting customer interviews, researching surge pricing strategies, and building an MVP to bring real-time, data-driven pricing to restaurants and retailers.",
      technologies: ["next.js", "react", "tailwind css", "clover api", "supabase", "OpenAI", "scikit-learn"],
      imageUrl: "/happyhr.png?height=400&width=600",
      link: "https://happyhr-website.vercel.app/",
    },
    {
      id: 5,
      title: "Chopsticks",
      shortDescription: "AI-powered Video Editor",
      fullDescription:
        "Chopsticks is an AI-powered video editing platform built for creators. Designed to streamline long-form content editing, it features a chat-based interface for intuitive video manipulation and an automated clip generator that identifies and extracts the most engaging moments. By blending deep learning with a seamless user experience, Chopsticks saves time, boosts productivity, and helps creators grow their channels faster.",
      technologies: ["deepface", "hugging face", "OpenAI", "python", "reflex", "t5", "whisper"],
      imageUrl: "/chopsticks.png?height=400&width=600",
      link: "https://devpost.com/software/clipgenius-ai-powered-streamedit",
    },
    {
      id: 6,
      title: "HiveHunt",
      shortDescription: "AI-powered Real Estate Assistant",
      fullDescription:
        "HiveHunt is dedicated to enabling users to confidently represent themselves in real estate transactions, providing the tools and resources necessary to navigate the home buying or selling process independently.",
      technologies: ["next.js", "react", "tailwind css", "OpenAI", "supabase"],
      imageUrl: "/hivehunt.png?height=400&width=600",
      link: "https://docs.google.com/presentation/d/1oak1w58FFLt2k-hx4h9F8Ir6CJxHZuK4C3bKMjBHvAk/edit?usp=sharing",
    },
    {
      id: 7,
      title: "PupPod",
      shortDescription: "ML-based Web App for PHD students to analyze dog behavior",
      fullDescription:
        "Led the web development and machine learning teams to implement a dynamic web application for PhD students, facilitating advanced data analysis and improving research efficiency by 40% when using calculated automated insights. Collaborated with co-founder to develop a MySQL data storage system managing information for 5,000 dogs and 130,000 game sessions. Created a custom GUI to streamline data retrieval increasing interpretability of complex datasets.",
      technologies: ["next.js", "react", "tailwind css", "OpenAI", "supabase", "python", "scikit-learn"],
      imageUrl: "/puppod.png?height=400&width=600",
      link: "https://github.com/kaavlu/puppod-ml",
    },
    {
      id: 8,
      title: "Earning Calls Stock Predictor",
      shortDescription: "a tool to help track expenses and plan budgets",
      fullDescription:
        "Created an intuitive algorithm, using scikit-learn and open-ai, to analyze investor reports and predictions for all relevant stocks before an earnings call, buy x amount of the stock 1 day before the call, and sell 1 day after. Resulted in a 15-20% ROI in April 2023 - May 2024, on a month to month basis. Scraped Zacks Investment Research to get/store earnings call data in a MySQL schema. Used data to train regression model. Created GUI using tkinter to display useful inferences made and change metrics used to judge data.",
      technologies: ["mysql", "python", "scikit-learn", "tkinter"],
      imageUrl: "/ecsp.png?height=400&width=600",
    },
    {
      id: 9,
      title: "personal website",
      shortDescription: "a minimalist personal website with a purple theme",
      fullDescription:
        "this is my personal website built with next.js and tailwind css. it features a clean, minimalist design with a purple color scheme. the site includes information about me, my projects, and ways to contact me.",
      technologies: ["next.js", "react", "tailwind css"],
      imageUrl: "/website.png?height=400&width=600",
      link: "https://github.com/kaavlu/personal-website",
    },
  ]

  return (
    <main className="min-h-screen bg-purple-50 px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-5xl">
          <p className="text-sm font-medium text-purple-600">selected work</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-purple-900 md:text-5xl">projects</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-purple-700 md:text-lg">
            a closer look at products, experiments, and tools i have built across ai, data, and product engineering.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-8 md:space-y-10">
          {projects.map((project, index) => {
            const imageFirst = index % 2 === 0

            return (
              <section
                key={project.id}
                className="overflow-hidden rounded-2xl border border-purple-200 bg-white shadow-[0_14px_36px_rgba(76,29,149,0.14)] lg:h-[540px]"
              >
                <div className="grid h-full items-stretch lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
                  <div
                    className={`flex h-full flex-col border-b border-purple-800 bg-purple-900 px-4 pt-4 pb-[20px] sm:px-5 sm:pt-5 sm:pb-[20px] lg:border-b-0 ${
                      imageFirst ? "lg:order-1 lg:border-r" : "lg:order-2 lg:border-l"
                    } ${imageFirst ? "lg:border-r-purple-800" : "lg:border-l-purple-800"}`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-purple-700 bg-purple-950/70 p-2 shadow-lg shadow-black/25 sm:p-3">
                      <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 55vw, (min-width: 768px) 92vw, 100vw"
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="mt-4 sm:mt-5">
                      <p className="mb-2 text-xs font-medium text-purple-200">technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-purple-700 bg-purple-800/70 px-2.5 py-1 text-xs font-medium text-purple-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.link && (
                      <div className="mt-5">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-1 rounded-md border border-purple-500 bg-purple-700/70 px-3 py-1.5 text-sm font-medium text-purple-50 transition hover:border-purple-300 hover:bg-purple-700"
                        >
                          view project <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex flex-col justify-center p-5 sm:p-7 lg:h-full lg:p-9 ${
                      imageFirst ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <p className="text-xs font-medium text-purple-500">project {String(index + 1).padStart(2, "0")}</p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-purple-900 md:text-3xl">{project.title}</h2>
                    <p className="mt-2 text-base font-medium text-purple-700">{project.shortDescription}</p>
                    <p className="mt-4 text-sm leading-7 text-purple-900/80 md:text-base">{project.fullDescription}</p>
                  </div>
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </main>
  )
}
