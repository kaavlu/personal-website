import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-50 px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-purple-900 md:text-5xl">hi, i'm manav khanvilkar</h1>

        <p className="mb-4 text-lg text-purple-800">
          i'm a software developer + builder trying to build startups with my friends
        </p>

        <p className="mb-4 text-lg text-purple-800">
          currently working at{" "}
          <Link href="https://www.duolingo.com/" target="_blank" className="text-purple-600 underline hover:text-purple-700">
            Duolingo
          </Link>{" "} as a software engineer
          and building{" "}
          <Link href="/projects" className="text-purple-600 underline hover:text-purple-700">
            side projects
          </Link>{" "}
          in my free time.
        </p>

        <p className="mb-4 text-lg text-purple-800">
          previously at{" "}
          <Link href="https://www.siemens.com/global/en.html" target="_blank" className="text-purple-600 underline hover:text-purple-700">
            Siemens
          </Link>{" "}
          and{" "} currently studying cs @
          <Link href="#" className="text-purple-600 underline hover:text-purple-700">
            university of michigan
          </Link>
        </p>

        <p className="mb-8 text-lg text-purple-800">
          you can reach me via{" "}
          <Link href="https://www.linkedin.com/in/manav-khanvilkar/" target="_blank" className="text-purple-600 underline hover:text-purple-700">
            linkedin
          </Link>{" "}
          or email me at{" "}
          <Link href="mailto:manavk@umich.edu" className="text-purple-600 underline hover:text-purple-700">
            manavk@umich.edu
          </Link>
        </p>

        <div className="mt-12 flex space-x-6">
          <Link
            href="https://www.linkedin.com/in/manav-khanvilkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-600 hover:text-purple-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            linkedin
          </Link>
          <Link href="https://drive.google.com/file/d/1ZFAV4Z3hIWKkfhwnpfhW08460AeebgYx/view?usp=sharing" target="_blank" className="flex items-center text-purple-600 hover:text-purple-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            resume
          </Link>
          <Link
            href="https://github.com/kaavlu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-600 hover:text-purple-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            github
          </Link>
        </div>
      </div>
    </main>
  )
}
