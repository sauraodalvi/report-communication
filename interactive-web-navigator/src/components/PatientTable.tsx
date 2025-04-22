
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface Patient {
  id: string;
  name: string;
  gender: string;
  age: number;
  testName: string;
  referral: string;
  organization: string;
}

const patients: Patient[] = [
  {
    id: "#10743",
    name: "Mr. Musaddiq",
    gender: "M",
    age: 25,
    testName: "Uric Acid, Serum",
    referral: "Dr. ELITE PLUS MEDICAL",
    organization: "ELITE PLUS MEDICAL CENTER",
  },
  {
    id: "#148158",
    name: "Mr/G RATNA RAO",
    gender: "M",
    age: 41,
    testName: "2D echocardiography",
    referral: "abhinandan Reddy",
    organization: "DIRECT",
  },
  {
    id: "#10745",
    name: "Mr.Mohammed Faiyaz",
    gender: "M",
    age: 30,
    testName: "Complete Blood Picture (CBP), C-Reactive Protein",
    referral: "Dr. ELITE PLUS MEDICAL",
    organization: "ELITE PLUS MEDICAL CENTER",
  },
  {
    id: "#10746",
    name: "Mrs.Satyamma",
    gender: "F",
    age: 75,
    testName: "Haemogram With ESR, C-Reactive Protein (CRP)",
    referral: "Dr. ELITE PLUS MEDICAL",
    organization: "ELITE PLUS MEDICAL CENTER",
  },
  {
    id: "#143214",
    name: "Mrs/TSVL KAMESWARI",
    gender: "F",
    age: 62,
    testName: "Pap Smear, Liquid Based (LBC), Mammogram",
    referral: "Dr. Rakhee Kumar Parusharamulu",
    organization: "DIRECT",
  },
  {
    id: "#10744",
    name: "Mrs.Pehana Begum",
    gender: "F",
    age: 62,
    testName: "Glucose Fasting (FBS)",
    referral: "Dr. ELITE PLUS MEDICAL",
    organization: "ELITE PLUS MEDICAL CENTER",
  },
  {
    id: "#143090",
    name: "Mr/B RAJA GOUD",
    gender: "M",
    age: 69,
    testName: "Troponin T, Serum, Electrocardiogram (ECG)",
    referral: "N G SASTRY",
    organization: "DIRECT",
  },
  {
    id: "#148152",
    name: "Mr/ISRAEL K",
    gender: "M",
    age: 78,
    testName: "Creatinine Serum, Urea, Complete Urine Examination",
    referral: "PAVAN KUMAR SURAPANENI",
    organization: "DIRECT",
  },
  {
    id: "#148153",
    name: "Mr/GOWTHAM KUMAR E",
    gender: "M",
    age: 14,
    testName: "Liver Function Test (LFT), Urea, Uric Acid, Serum",
    referral: "KRIPA BAJAJ",
    organization: "DIRECT",
  },
];

export function PatientTable() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleReview = (id: string) => {
    navigate(`/patient/${id}`);
  };

  return (
    <div className="bg-white">
      <div className="p-4">
        <p className="text-sm font-medium">Rows: {patients.length}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-t border-b border-gray-200 bg-gray-50 text-left">
              <th className="p-3 text-sm font-medium text-gray-800">
                <div className="flex items-center gap-1">
                  Patient ID <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-sm font-medium text-gray-800">Patient Details</th>
              <th className="p-3 text-sm font-medium text-gray-800">
                <div className="flex items-center gap-1">
                  Test Name <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="p-3 text-sm font-medium text-gray-800">Referral</th>
              <th className="p-3 text-sm font-medium text-gray-800">Organisation</th>
              <th className="p-3 text-sm font-medium text-gray-800"></th>
            </tr>
            <tr className="border-b border-gray-200">
              <th className="p-2">
                <input className="w-full border border-gray-300 rounded px-2 py-1 text-sm" type="text" />
              </th>
              <th className="p-2">
                <input className="w-full border border-gray-300 rounded px-2 py-1 text-sm" type="text" />
              </th>
              <th className="p-2">
                <input className="w-full border border-gray-300 rounded px-2 py-1 text-sm" type="text" />
              </th>
              <th className="p-2">
                <input className="w-full border border-gray-300 rounded px-2 py-1 text-sm" type="text" />
              </th>
              <th className="p-2">
                <input className="w-full border border-gray-300 rounded px-2 py-1 text-sm" type="text" />
              </th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 border-b border-gray-200">
              <td colSpan={6} className="p-3">
                <button
                  onClick={() => setCollapsed(!collapsed)}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  {collapsed ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4 transform rotate-180" />
                  )}
                  21st Apr, 2025 (44)
                </button>
              </td>
            </tr>
            {!collapsed &&
              patients.map((patient) => (
                <tr key={patient.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 text-sm">{patient.id}</td>
                  <td className="p-3">
                    <div>
                      <p className="text-sm font-medium">{patient.name}</p>
                      <p className="text-xs text-gray-500">
                        ({patient.gender} - {patient.age} years)
                      </p>
                    </div>
                  </td>
                  <td className="p-3 text-sm">{patient.testName}</td>
                  <td className="p-3 text-sm">{patient.referral}</td>
                  <td className="p-3 text-sm">{patient.organization}</td>
                  <td className="p-3">
                    <div className="flex justify-end">
                      <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => handleReview(patient.id.replace("#", ""))}
                      >
                        Review <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
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
