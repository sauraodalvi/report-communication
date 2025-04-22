
import { useNavigate } from "react-router-dom";
import { ReportCommunication } from "@/components/ReportCommunication";

const Reports = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/archives');
  };

  return <ReportCommunication onBack={handleBack} />;
};

export default Reports;
