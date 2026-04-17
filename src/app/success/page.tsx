export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          🎉 Donation Successful!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for supporting this cause.
        </p>

        <a
          href="/"
          className="text-green-600 underline font-medium"
        >
          Go Back Home
        </a>

      </div>
    </div>
  );
}