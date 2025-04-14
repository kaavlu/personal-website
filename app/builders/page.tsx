import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

type Builder = {
  id: number
  name: string
  role: string
  bio: string
  imageUrl: string
  linkedin?: string
  github?: string
}

export default function Builders() {
  const builders: Builder[] = [
    {
      id: 1,
      name: "Ohm Patel",
      role: "Full-Stack Engineer + Builder",
      bio: "Ohm is a backend and full-stack engineer with a passion for building scalable systems and intelligent tools. Currently studying computer science at the University of Michigan, he's a developer at Atlas Digital Consulting Group and a member of Phi Gamma Nu. With experience in low-level programming and machine learning, Ohm is now honing his skills as a software engineer at Meta, where he's focused on creating impactful, high-performance backend solutions. When he's not coding, you’ll find him on the basketball court, dominating in pickleball, or enjoying a good poker night with friends.",
      imageUrl: "/ohm.jpeg",
      linkedin: "https://www.linkedin.com/in/ohm-patel7/",
      github: "https://github.com/ohmp7",
    },
    {
      id: 2,
      name: "Ram Gade",
      role: "Quantitative Trader + Builder",
      bio: "Ram is a data science student at the University of Michigan with minors in Math and Business, driven by the intersection of technology and business. As an avid problem solver, he's passionate about integrating advanced math into predictive models through modern software development. This summer, he’s joining BlackEdge Capital as a quantitative trading intern, where he'll apply his skills to real-world financial challenges.",
      imageUrl: "/ram.jpeg",
      linkedin: "https://www.linkedin.com/in/ramshreyas-gade/",
      github: "https://github.com/ramgade16",
    },
    {
      id: 3,
      name: "Ishan Deshpande",
      role: "Software Developer + Builder",
      bio: "Ishan is a builder and community organizer from San Diego with a passion for startups, storytelling, and scrappy projects. He's the founder of BuildIllinois, a student-led ecosystem that’s helped thousands of builders raise funding, land top internships, and launch ambitious ideas. From running hackathons and VC mixers to launching viral tools like DownloadMyTikToks, Ishan blends creativity with execution—always chasing the next big thing.",
      imageUrl: "/ishan.jpeg",
      linkedin: "https://www.linkedin.com/in/ishandeshpande9/",
      github: "https://github.com/ishandeshpande",
    },
    {
      id: 4,
      name: "Yash Gupta",
      role: "Backend Engineer + Builder",
      bio: "Yash is a versatile engineer passionate about building scalable solutions at the intersection of AI, distributed systems, and automation. With experience ranging from blockchain in healthcare to reinforcement learning at Qualcomm, he’s now gearing up to join Samsara as a Software Engineering intern. Outside of coding, he’s into fashion, travel, music, and good times with friends.",
      imageUrl: "/yash.jpeg",
      linkedin: "https://www.linkedin.com/in/yashsgupta/",
      github: "https://github.com/yashg4509",
    },
  ]

  return (
    <main className="min-h-screen bg-purple-50 px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-purple-900">builders</h1>
        <p className="mb-10 text-center text-lg text-purple-700">
          meet the amazing people i'm fortunate to build alongside
        </p>

        <div className="space-y-16">
          {builders.map((builder, index) => (
            <div
              key={builder.id}
              className={`flex flex-col gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
            >
              <div className="w-full md:w-2/5">
                <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full border-4 border-purple-200 md:w-full md:max-w-xs">
                  <Image
                    src={builder.imageUrl}
                    alt={builder.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-3/5">
                <h2 className="mb-2 text-2xl font-bold text-purple-800">{builder.name}</h2>
                <p className="mb-3 text-lg italic text-purple-600">{builder.role}</p>
                <p className="mb-4 text-purple-800">{builder.bio}</p>

                <div className="flex space-x-4">
                  {builder.linkedin && (
                    <Link
                      href={builder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-md bg-purple-100 px-3 py-2 text-sm text-purple-700 transition-colors hover:bg-purple-200"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      linkedin
                    </Link>
                  )}
                  {builder.github && (
                    <Link
                      href={builder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-md bg-purple-100 px-3 py-2 text-sm text-purple-700 transition-colors hover:bg-purple-200"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      github
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-purple-100 p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-purple-800">want to join this list?</h2>
          <p className="mb-6 text-purple-700">
            i'm always looking to connect with fellow builders who are passionate about creating meaningful projects.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700"
          >
            reach out
          </Link>
        </div>
      </div>
    </main>
  )
}
