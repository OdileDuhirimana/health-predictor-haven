
import { useState } from "react";
import Header from "@/components/Header";
import HealthForm from "@/components/HealthForm";
import PredictionResults from "@/components/PredictionResults";
import InfoSection from "@/components/InfoSection";
import { PatientData, PredictionResult, predictDiabetes } from "@/services/predictionService";
import { toast } from "sonner";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleSubmit = async (data: PatientData) => {
    setIsLoading(true);
    try {
      const predictionResult = await predictDiabetes(data);
      setResult(predictionResult);
      toast.success("Risk assessment completed successfully!");
    } catch (error) {
      console.error("Error in prediction:", error);
      toast.error("Failed to complete the risk assessment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <Header />
      
      <main className="py-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Diabetes Risk Assessment
          </h1>
          <p className="text-lg text-gray-600">
            Complete the form below to receive an assessment of your type 2 diabetes risk based on key health factors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Health Information</h2>
            <HealthForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Assessment Results</h2>
            {result ? (
              <PredictionResults result={result} />
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 h-full flex items-center justify-center border border-dashed border-gray-300">
                <div className="text-center">
                  <p className="text-gray-500 mb-4">Complete the form to see your diabetes risk assessment</p>
                  <div className="inline-block rounded-full bg-medical-primary/10 p-3">
                    <div className="h-12 w-12 rounded-full border-4 border-medical-primary/30 border-t-medical-primary animate-spin"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <InfoSection />
      </main>
      
      <footer className="py-8 border-t text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} HealthPredictor. All rights reserved.</p>
        <p className="mt-2">This is a demonstration project and not intended for actual medical use.</p>
      </footer>
    </div>
  );
};

export default Index;
