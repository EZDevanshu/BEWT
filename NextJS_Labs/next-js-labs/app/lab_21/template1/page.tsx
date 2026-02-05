export default function Template1() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Lab 21 - Template 1
        </h1>

        <p className="text-gray-600 mb-6">
          This is a simple single-page UI built using Next.js and Tailwind CSS.
          Clean, minimal, and perfect for lab submission.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}
