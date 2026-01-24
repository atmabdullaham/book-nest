import Link from "next/link";

const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">About BookNest</h1>
        <p className="text-gray-700 mb-4">
          This page has been moved. Please visit our home page to learn more
          about BookNest.
        </p>
        <Link href="/#about" className="text-blue-600 hover:underline">
          ← Go back to home
        </Link>
      </div>
    </div>
  );
};

export default About;
