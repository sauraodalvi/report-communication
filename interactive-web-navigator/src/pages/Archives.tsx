import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const patientList = [
  { id: "10743", name: "Musaddiq", age: "25", gender: "M", date: "25/04/2025" },
  { id: "148158", name: "G RATNA RAO", age: "41", gender: "M", date: "01/04/1981" },
  { id: "10745", name: "Mohammed Faiyaz", age: "30", gender: "M", date: "25/04/2025" },
  { id: "10746", name: "Satyamma", age: "75", gender: "F", date: "25/04/2025" },
  { id: "143214", name: "TSVL KAMESWARI", age: "62", gender: "F", date: "01/09/1958" },
  { id: "10744", name: "Pehana Begum", age: "62", gender: "F", date: "25/04/2025" },
  { id: "143090", name: "B RAJA GOUD", age: "69", gender: "M", date: "01/09/1956" },
  { id: "148152", name: "ISRAEL K", age: "78", gender: "M", date: "05/08/1947" },
  { id: "148153", name: "GOWTHAM KUMAR E", age: "14", gender: "M", date: "01/04/2011" },
  { id: "149001", name: "T RAMA DEVI", age: "74", gender: "F", date: "01/10/1951" },
  { id: "148100", name: "B SUNEELA DEVI", age: "51", gender: "F", date: "01/04/1974" },
  { id: "147023", name: "Swaroop Reddy", age: "76", gender: "M", date: "01/01/1949" },
  { id: "146511", name: "SUPRIYA M", age: "59", gender: "F", date: "31/07/1966" },
];

const Archives = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDate] = useState("21st Apr, 2025");
  const navigate = useNavigate();
  
  const filteredPatients = patientList.filter(patient => 
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    patient.id.includes(searchQuery)
  );
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="flex items-center gap-2 text-gray-700">
              <ChevronLeft className="h-5 w-5" />
              <span>Back</span>
            </Link>
            <h1 className="font-medium text-lg">Archives</h1>
          </div>
          <Button onClick={() => navigate('/reports')}>
            Report Communication
          </Button>
        </div>
      </div>
      
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Search Patient Name, ID, Accession, Bill ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <div className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50">
              {currentDate}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <div className="border-b border-gray-200">
          {filteredPatients.map(patient => (
            <Link 
              key={patient.id} 
              to={`/patient/${patient.id}`} 
              className="block border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="p-3">
                <div className="font-medium">{patient.name}</div>
                <div className="text-sm text-gray-500">
                  {patient.age} years - {patient.gender}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archives;
