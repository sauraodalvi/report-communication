import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ChevronLeft } from "lucide-react";

interface Report {
  id: string;
  testName: string;
  date: string;
  patientName: string;
  patientPortal: string;
  patientSMS: string;
  patientWhatsApp: string;
  patientEmail: string;
  referralName: string;
  referralEmail: string;
  referralFax: string;
  organizationName: string;
  orgEmail: string;
  orgFax: string;
}

const reports: Report[] = [
  {
    id: "14219",
    testName: "2D echocardiography",
    date: "21st Apr, 2025",
    patientName: "G RATNA RAO",
    patientPortal: "Activated",
    patientSMS: "Sent",
    patientWhatsApp: "Not Sent",
    patientEmail: "Not Sent",
    referralName: "abhinandan Reddy",
    referralEmail: "Not Sent",
    referralFax: "Not Sent",
    organizationName: "DIRECT",
    orgEmail: "Not Sent",
    orgFax: "Not Sent",
  },
  {
    id: "14817",
    testName: "Uric Acid, Serum",
    date: "21st Apr, 2025",
    patientName: "Musaddiq",
    patientPortal: "Activated",
    patientSMS: "Not Sent",
    patientWhatsApp: "Not Sent",
    patientEmail: "Not Sent",
    referralName: "ELITE PLUS MEDICAL CENTRE",
    referralEmail: "Not Sent",
    referralFax: "Not Sent",
    organizationName: "ELITE PLUS MEDICAL CENTRE",
    orgEmail: "Not Sent",
    orgFax: "Not Sent",
  },
  {
    id: "14830",
    testName: "Complete Blood Picture (CBP)",
    date: "21st Apr, 2025",
    patientName: "Mohammed Faiyaz",
    patientPortal: "Activated",
    patientSMS: "Not Sent",
    patientWhatsApp: "Not Sent",
    patientEmail: "Not Sent",
    referralName: "ELITE PLUS MEDICAL CENTRE",
    referralEmail: "Not Sent",
    referralFax: "Not Sent",
    organizationName: "ELITE PLUS MEDICAL CENTRE",
    orgEmail: "Not Sent",
    orgFax: "Not Sent",
  },
];

export function ReportCommunication({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header with back button */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-700">
            <ChevronLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <h1 className="font-medium text-lg">Report Communication</h1>
        </div>
      </div>

      {/* Date Filter */}
      <div className="border-b border-gray-200 p-4 flex justify-end">
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1">
          <span className="text-sm">21st Apr, 2025 - 21st Apr, 2025</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Reports Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Lab Bill Id <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Reports <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Report Date <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Patient Name <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Patient Portal <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Patient SMS <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Patient WhatsApp <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Patient Email <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Referral Name <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Referral Email <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Referral Fax <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Organization Name <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Org Email <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-left text-sm font-medium">
                <div className="flex items-center gap-1">
                  Org Fax <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 text-sm">{report.id}</td>
                <td className="p-3 text-sm">{report.testName}</td>
                <td className="p-3 text-sm">{report.date}</td>
                <td className="p-3 text-sm">{report.patientName}</td>
                <td className="p-3 text-sm">
                  <span className={`px-2 py-1 rounded text-xs ${report.patientPortal === "Activated" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}>
                    {report.patientPortal}
                  </span>
                </td>
                <td className="p-3 text-sm">
                  <span className={`px-2 py-1 rounded text-xs ${report.patientSMS === "Sent" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                    {report.patientSMS}
                  </span>
                </td>
                <td className="p-3 text-sm">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                    {report.patientWhatsApp}
                  </span>
                </td>
                <td className="p-3 text-sm">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                    {report.patientEmail}
                  </span>
                </td>
                <td className="p-3 text-sm">{report.referralName}</td>
                <td className="p-3 text-sm">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                    {report.referralEmail}
                  </span>
                </td>
                <td className="p-3 text-sm">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                    {report.referralFax}
                  </span>
                </td>
                <td className="p-3 text-sm">{report.organizationName}</td>
                <td className="p-3 text-sm">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                    {report.orgEmail}
                  </span>
                </td>
                <td className="p-3 text-sm">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                    {report.orgFax}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Audit Trail</Button>
                    <Button size="sm">Review All</Button>
                    <Button size="sm" variant="outline">Resend</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
