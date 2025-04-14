import Image from "next/image"

export default function Photos() {
  return (
    <main className="min-h-screen bg-purple-50 px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-purple-900">photos</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div
              key={num}
              className="relative aspect-[3/2] overflow-hidden rounded-lg bg-purple-100 shadow-sm transition-all hover:shadow-md"
            >
              <Image
                src={`/p${num}.png`}
                alt={`Gallery image ${num}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-purple-600">
          a collection of moments from my travels and adventures
        </p>
      </div>
    </main>
  )
}
