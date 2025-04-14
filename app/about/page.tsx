"use client"

import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-purple-50 px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-purple-900">about me</h1>

        <div className="space-y-12">
          {/* First section - text left, image right */}
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="w-full md:w-2/3">
              <p className="text-lg text-purple-800">
                i was born in chicago but have been living in san diego since 2006. i spent a lot of my childhood
                exploring creative pursuits—building toys and trying to make my lazy life easier.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="overflow-hidden rounded-lg bg-purple-100 shadow-sm">
                <Image
                  src="/baby.jpg?height=300&width=300"
                  alt="Childhood photo"
                  width={300}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second section - image left, text right */}
          <div className="flex flex-col-reverse items-center gap-6 md:flex-row">
            <div className="w-full md:w-1/3">
              <div className="overflow-hidden rounded-lg bg-purple-100 shadow-sm">
                <Image
                  src="/robot.png?height=300&width=300"
                  alt="High school activities"
                  width={300}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-purple-800">
                in high school, i was deeply involved in robotics, spending several years developing my skills and
                passion. i also organized hackathons, bringing together over 200 participants from around the country and rasing 100k+ in prizes.
              </p>
            </div>
          </div>

          {/* Third section - text left, image right */}
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="w-full md:w-2/3">
              <p className="text-lg text-purple-800">
                during my time at university of michigan, i was inspired by my tech consulting group atlas digital to start exploring software
                development more deeply. i've been working on various projects and collaborating with amazing people and
                organizations.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="overflow-hidden rounded-lg bg-purple-100 shadow-sm">
                <Image
                  src="/atlas.jpg?height=300&width=300"
                  alt="University years"
                  width={300}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Fourth section - image left, text right */}
          <div className="flex flex-col-reverse items-center gap-6 md:flex-row">
            <div className="w-full md:w-1/3">
              <div className="overflow-hidden rounded-lg bg-purple-100 shadow-sm">
                <Image
                  src="/cook.jpg?height=300&width=300"
                  alt="Current work"
                  width={300}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-purple-800">
                apart from work i love cooking new dishes, hanging out with my friends, going to the gym, and traveling the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
