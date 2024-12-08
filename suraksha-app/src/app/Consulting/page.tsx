"use client";
import React, { useState } from "react";
import { AlertTriangle, UserCheck, Shield } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

interface IssueCategory {
  type: string;
  description: string;
  urgency: "High" | "Medium" | "Low";
  image: string;
}

const DomesticViolenceSupportPage: React.FC = () => {
  const [userType, setUserType] = useState<"victim" | "supporter" | null>(null);
  const [immediateHelp, setImmediateHelp] = useState<boolean | null>(null);
  const [issueType, setIssueType] = useState<IssueCategory | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter(); // Initialize useRouter at the top level

  const issueCategories: IssueCategory[] = [
    {
      type: "Physical Abuse",
      description: "Involves physical violence or bodily harm",
      urgency: "High",
      image: "/images/physical-abuse.jpg",
    },
    {
      type: "Emotional Abuse",
      description: "Psychological manipulation or verbal assault",
      urgency: "Medium",
      image: "/images/emotional-abuse.jpg",
    },
    {
      type: "Financial Abuse",
      description: "Control through economic means",
      urgency: "Medium",
      image: "/images/financial-abuse.jpg",
    },
    {
      type: "Sexual Abuse",
      description: "Non-consensual sexual acts",
      urgency: "High",
      image: "/images/sexual-abuse.jpg",
    },
  ];

  const getUserLocation = async () => {
    return new Promise<GeolocationPosition | null>((resolve) => {
      if (!navigator.geolocation) {
        toast.error("Geolocation is not supported by your browser.");
        resolve(null);
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          () => {
            toast.error("Unable to retrieve your location.");
            resolve(null);
          }
        );
      }
    });
  };

  const handleUserTypeSelection = (type: "victim" | "supporter") => {
    setUserType(type);
  };

  const handleImmediateHelpAssessment = (needHelp: boolean) => {
    setImmediateHelp(needHelp);
  };

  const handleNotifyAuthorities = async () => {
    setLoading(true);
    const location = await getUserLocation();
    if (location) {
      const { latitude, longitude } = location.coords;
      toast.success(
        `Your location has been shared: Lat ${latitude}, Long ${longitude}. Authorities have been informed.`
      );
      const authorities = [
        { name: "Local Police Station, Vaddeswaram", contact: "1234567890" },
        { name: "Emergency Response Team", contact: "9876543210" },
      ];
      authorities.forEach((authority) => {
        toast.info(
          `Notified: ${authority.name}, Contact: ${authority.contact}`
        );
      });
      setTimeout(() => {
        router.push("/report");
      }, 5000);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-red-600">
          Safe Support Network
        </h1>
        {!userType && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Who are you?</h2>
            <div className="space-y-4">
              <button
                onClick={() => handleUserTypeSelection("victim")}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                <UserCheck className="inline mr-2" /> I am a Victim
              </button>
              <button
                onClick={() => handleUserTypeSelection("supporter")}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
              >
                <Shield className="inline mr-2" /> I want to Help Someone
              </button>
            </div>
          </div>
        )}
        {userType === "victim" && immediateHelp === null && (
          <div>
            <h2 className="text-lg font-semibold mb-4">
              <AlertTriangle className="inline text-yellow-500 mr-2" />
              Do you need immediate help?
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => handleImmediateHelpAssessment(true)}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
              >
                Yes, I Need Urgent Support
              </button>
              <button
                onClick={() => handleImmediateHelpAssessment(false)}
                className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition"
              >
                I Need Support, But Not Urgent
              </button>
            </div>
          </div>
        )}
        {userType === "victim" && immediateHelp && !loading && (
          <button
            onClick={handleNotifyAuthorities}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            Notify Authorities and Continue
          </button>
        )}
        {userType === "victim" && immediateHelp === false && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Reports Summary</h2>
            {/* Add your report data here */}
            <div className="space-y-4">
              {/* Example of one report card */}
              <div className="bg-gray-50 border p-4 rounded-lg">
                <p>
                  <strong>Type:</strong> Physical Abuse
                </p>
                <p>
                  <strong>Urgency:</strong> High
                </p>
                <p>
                  <strong>Description:</strong> Involves physical violence or bodily
                  harm.
                </p>
              </div>
              {/* Redirect Button */}
              <button
                onClick={() => router.push("/")} // Navigate to the homepage
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition mt-4"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomesticViolenceSupportPage;
