import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";

const Teams = () => {
  const teamMembers = [
    { name: "Sarah Johnson", role: "Founder & CEO" },
    { name: "Michael Chen", role: "CTO" },
    { name: "Emma Wilson", role: "Head of Community" },
    { name: "David Brown", role: "Lead Developer" },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg ring-1 ring-black/10">
            <Users className="h-8 w-8" />
          </div>
          <h1 className="section-title mb-4">Our Team</h1>
          <p className="text-gray-700 text-lg font-medium">
            Meet the amazing team behind BookNest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center ring-1 ring-black/5"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 font-extrabold">
                {member.name
                  .split(" ")
                  .slice(0, 2)
                  .map((p) => p[0])
                  .join("")}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-700 font-semibold text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur rounded-3xl p-10 border border-blue-200 mb-12 text-center shadow-xl ring-1 ring-black/5">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We believe that books have the power to transform lives, inspire
            minds, and connect people. Our team is dedicated to making reading
            accessible and enjoyable for everyone around the world.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teams;
