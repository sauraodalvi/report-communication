
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronDown, Edit } from "lucide-react";

interface PatientDetail {
  id: string;
  name: string;
  gender: string;
  age: number;
  organization: string;
  referral: string;
  contact: string;
  address: string;
}

interface TestReport {
  billId: string;
  testName: string;
  status: string;
  date: string;
}

const patientDetails: Record<string, PatientDetail> = {
  "10743": {
    id: "#10743",
    name: "Musaddiq",
    gender: "M",
    age: 25,
    organization: "ELITE PLUS MEDICAL CENTRE",
    referral: "Dr. ELITE PLUS MEDICAL CENTRE",
    contact: "-/-",
    address: "- -",
  },
};

const patientReports: Record<string, TestReport[]> = {
  "10743": [
    {
      billId: "14817",
      testName: "Uric Acid, Serum",
      status: "Dispatched",
      date: "21st Apr, 2025 05:45 pm",
    },
  ],
};

export function PatientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const patient = id ? patientDetails[id] : undefined;
  const reports = id ? patientReports[id] : [];

  if (!patient) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold mb-4">Patient not found</h2>
        <Button onClick={() => navigate("/dashboard")}>Return to Dashboard</Button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header with back button */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="flex items-center gap-2 text-gray-700">
            <ChevronLeft className="h-5 w-5" />
            <span>Back</span>
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Link to="/archives" className="text-blue-600 hover:underline">Archives</Link>
              <span>/</span>
              <span>{patient.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Patient details section */}
      <div className="p-4 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Musaddiq (M)</p>
              <p className="font-medium">{patient.id}</p>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">DOB/Age</p>
            <p>{patient.age} years</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Organization</p>
            <p>{patient.organization}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Referral</p>
            <p>{patient.referral}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Attachments</p>
            <div className="flex items-center">
              <button className="text-blue-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="flex gap-2">
              <Button variant="outline">Trends <ChevronDown className="ml-1 h-4 w-4" /></Button>
              <Button className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
              <Button variant="outline">Hide</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-6">
          <div>
            <p className="text-sm text-gray-600">Contact/Email</p>
            <p>{patient.contact}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Address</p>
            <p>{patient.address}</p>
          </div>
        </div>

        <div className="mt-6 p-3 bg-gray-100 rounded flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>Delivery status not available</span>
          <div className="flex-1"></div>
          <span className="px-3 py-1 bg-gray-600 text-white rounded">Not Sent</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            Bill Updates <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline">Audit Trail</Button>
          <Button variant="outline" className="text-green-600 border-green-600">Share Report to provider</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Selective Review</Button>
        </div>
      </div>

      {/* Reports tabs */}
      <div className="px-4 border-b border-gray-200">
        <div className="flex gap-6">
          <button className="py-3 px-2 border-b-2 border-blue-600 font-medium">Submitted Reports</button>
          <button className="py-3 px-2 text-gray-600">All Reports</button>
          <button className="py-3 px-2 text-gray-600 relative">
            Overview
            <span className="absolute top-2 right-0 bg-blue-600 text-white text-xs px-1 rounded">NEW</span>
          </button>
          <button className="py-3 px-2 text-gray-600">Trends</button>
        </div>
      </div>

      {/* Report table */}
      <div className="p-4">
        <p className="text-sm font-medium mb-4">Rows: {reports.length}</p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-t border-b border-gray-200 bg-gray-50 text-left">
                <th className="p-3 text-sm font-medium text-gray-800">
                  <div className="flex items-center gap-1">
                    Bill ID <ChevronDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="p-3 text-sm font-medium text-gray-800">
                  <div className="flex items-center gap-1">
                    Reports <ChevronDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="p-3 text-sm font-medium text-gray-800">
                  <div className="flex items-center gap-1">
                    Status <ChevronDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="p-3 text-sm font-medium text-gray-800">
                  <div className="flex items-center gap-1">
                    Report Date <ChevronDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="p-3 text-sm font-medium text-gray-800"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td colSpan={5} className="p-3">
                  <button className="flex items-center gap-2 text-sm font-medium">
                    <ChevronDown className="h-4 w-4 transform rotate-180" />
                    21st Apr, 2025 (1)
                  </button>
                </td>
              </tr>
              
              {reports.map(report => (
                <tr key={report.billId} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex flex-col">
                      <span className="text-sm">{report.billId}</span>
                      <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 w-fit rounded mt-1">Amount Due</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">{report.testName}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">{report.status}</span>
                  </td>
                  <td className="p-3 text-sm">{report.date}</td>
                  <td className="p-3">
                    <div className="flex gap-2 justify-end">
                      <div className="px-3 py-1 bg-gray-600 text-white rounded text-sm">Not Sent</div>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        Review 0
                      </Button>
                      <button>⋮</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between">
          <Button variant="outline" className="text-green-600 border-green-600">Share Report</Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Review All <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
