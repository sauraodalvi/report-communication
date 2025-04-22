
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronDown } from "lucide-react";

export function Header() {
  const [dateRange, setDateRange] = useState("21st Apr, 2025 - 21st Apr, 2025");

  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1">
          <div className="relative max-w-3xl">
            <input
              type="text"
              placeholder="Select by Patient Id / Name / Accession Number / National ID / DOB(YYYYMMDD)"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Report Communication</Button>
          <div className="flex items-center gap-2">
            <div className="border border-gray-300 rounded-lg flex items-center">
              <Button variant="ghost" className="text-gray-700">
                Select Branches: 1 Selected <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="border border-gray-300 rounded-lg flex items-center">
              <Button variant="ghost" className="text-gray-700 flex items-center gap-2">
                {dateRange} <CalendarIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
