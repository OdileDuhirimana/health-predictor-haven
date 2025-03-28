
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PredictionResult } from "@/services/predictionService";
import { FeatureImportance, RiskLevel } from "@/types";
import { AlertTriangle, Check, Info } from "lucide-react";

interface PredictionResultsProps {
  result: PredictionResult;
}

const getRiskColor = (risk: RiskLevel) => {
  switch (risk) {
    case "Low":
      return "bg-green-100 text-green-800 border-green-200";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "High":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-blue-100 text-blue-800 border-blue-200";
  }
};

const getRiskIcon = (risk: RiskLevel) => {
  switch (risk) {
    case "Low":
      return <Check className="h-5 w-5 text-green-500" />;
    case "Medium":
      return <Info className="h-5 w-5 text-yellow-500" />;
    case "High":
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    default:
      return <Info className="h-5 w-5 text-blue-500" />;
  }
};

const getFeatureName = (feature: string): string => {
  const featureMap: Record<string, string> = {
    "blood_glucose_level": "Blood Glucose Level",
    "HbA1c_level": "HbA1c Level",
    "age": "Age",
    "bmi": "BMI (Body Mass Index)",
    "hypertension": "Hypertension",
    "heart_disease": "Heart Disease",
    "smoking_history": "Smoking History",
    "gender": "Gender"
  };
  
  return featureMap[feature] || feature;
};

const FeatureImportanceBar = ({ feature, importance }: FeatureImportance) => {
  const percentage = Math.round(importance * 100);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{getFeatureName(feature)}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

const PredictionResults = ({ result }: PredictionResultsProps) => {
  const { risk, probability, explanation } = result;
  const probabilityPercentage = Math.round(probability * 100);
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Your Diabetes Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-4">
            <div className={`relative w-36 h-36 rounded-full flex items-center justify-center mb-4 ${getRiskColor(risk as RiskLevel)}`}>
              <div className="text-center">
                <div className="text-3xl font-bold">{probabilityPercentage}%</div>
                <div className="text-sm mt-1">Risk Level</div>
              </div>
            </div>
            
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${getRiskColor(risk as RiskLevel)}`}>
              {getRiskIcon(risk as RiskLevel)}
              <span className="font-medium">{risk} Risk</span>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-500 max-w-md">
              {risk === "Low" ? (
                <p>Your current risk factors suggest a low probability of diabetes. Continue maintaining a healthy lifestyle.</p>
              ) : risk === "Medium" ? (
                <p>Your results indicate some risk factors for diabetes. Consider discussing these results with a healthcare provider.</p>
              ) : (
                <p>Your results indicate significant risk factors for diabetes. We strongly recommend consulting with a healthcare professional.</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Risk Factors Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              The following factors contribute to your risk assessment. Higher percentages indicate a stronger influence on the risk prediction.
            </p>
            <div className="space-y-3">
              {explanation.map((item) => (
                <FeatureImportanceBar key={item.feature} feature={item.feature} importance={item.importance} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Important Note</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm">
            <p>This assessment is for informational purposes only and is not a medical diagnosis. 
            Always consult with healthcare professionals before making any health-related decisions.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionResults;
