import Image from "next/image";

export default function Template2() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to Lab 21
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            This template demonstrates a clean hero section with image and
            content using Next.js and Tailwind CSS. Designed for academic
            projects and labs.
          </p>

          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Explore More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="coding"
            width={450}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}
