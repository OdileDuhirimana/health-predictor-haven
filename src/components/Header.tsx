
import { HeartPulse } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b mb-8">
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
        <div className="bg-medical-primary p-2 rounded-lg">
          <HeartPulse className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">HealthPredictor</h1>
          <p className="text-sm text-gray-500">Diabetes Risk Assessment Tool</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
        <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900">How it Works</a>
        <a href="#disclaimer" className="text-sm text-gray-600 hover:text-gray-900">Medical Disclaimer</a>
      </div>
    </div>
  );
};

export default Header;
