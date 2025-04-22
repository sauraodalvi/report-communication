
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-xl p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <img src="/lovable-uploads/2818f1d0-82c6-432c-bb5c-e4e1422f27fd.png" alt="GVK Logo" className="h-16 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold mb-4">GVK Medical Dashboard</h1>
        <p className="text-xl text-gray-600 mb-8">A comprehensive medical information system for healthcare professionals</p>
        
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <Link to="/dashboard">
            <Button className="w-full p-6 text-lg bg-blue-600 hover:bg-blue-700">
              Operations Dashboard
            </Button>
          </Link>
          
          <Link to="/archives">
            <Button className="w-full p-6 text-lg bg-blue-600 hover:bg-blue-700">
              Patient Archives
            </Button>
          </Link>
          
          <Link to="/reports">
            <Button className="w-full p-6 text-lg bg-blue-600 hover:bg-blue-700">
              Report Communications
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
