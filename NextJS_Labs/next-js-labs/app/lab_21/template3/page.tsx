import Image from "next/image";

export default function Template3() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Image Section */}
      <div className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="team work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Lab 21 Project UI
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why This Template?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Clean Design</h3>
            <p className="text-gray-600">
              Minimal and modern UI suitable for college labs and demos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Single Page</h3>
            <p className="text-gray-600">
              Simple one-page structure that is easy to understand and present.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Next.js Ready</h3>
            <p className="text-gray-600">
              Built fully with Next.js App Router and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
