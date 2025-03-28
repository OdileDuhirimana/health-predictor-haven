
import { toast } from "sonner";

export interface PatientData {
  age: number;
  gender: string;
  hypertension: number;
  heart_disease: number;
  smoking_history: string;
  bmi: number;
  HbA1c_level: number;
  blood_glucose_level: number;
}

export interface PredictionResult {
  prediction: number;
  probability: number;
  risk: string;
  explanation: {
    feature: string;
    importance: number;
  }[];
}

// Simulate feature importances (would come from actual model)
const FEATURE_IMPORTANCES = {
  "blood_glucose_level": 0.28,
  "HbA1c_level": 0.24,
  "age": 0.15,
  "bmi": 0.13,
  "hypertension": 0.08,
  "heart_disease": 0.06,
  "smoking_history": 0.04,
  "gender": 0.02,
};

// Risk thresholds
const LOW_RISK_THRESHOLD = 0.3;
const MEDIUM_RISK_THRESHOLD = 0.7;

export const predictDiabetes = async (patientData: PatientData): Promise<PredictionResult> => {
  try {
    // In a real app, this would make an API call to your Python backend
    // For now, we'll simulate a prediction with a simplified algorithm
    
    // This is a simple heuristic based on key diabetes risk factors
    // NOT a real medical model - just for demonstration
    let riskScore = 0;
    
    // Blood glucose is a major factor
    if (patientData.blood_glucose_level > 140) {
      riskScore += 0.4;
    } else if (patientData.blood_glucose_level > 100) {
      riskScore += 0.2;
    }
    
    // HbA1c level is another key indicator
    if (patientData.HbA1c_level > 6.5) {
      riskScore += 0.35;
    } else if (patientData.HbA1c_level > 5.7) {
      riskScore += 0.2;
    }
    
    // Age increases risk
    if (patientData.age > 45) {
      riskScore += 0.1;
    }
    
    // BMI is a risk factor
    if (patientData.bmi > 30) {
      riskScore += 0.1;
    } else if (patientData.bmi > 25) {
      riskScore += 0.05;
    }
    
    // Hypertension increases risk
    if (patientData.hypertension === 1) {
      riskScore += 0.05;
    }
    
    // Heart disease increases risk
    if (patientData.heart_disease === 1) {
      riskScore += 0.05;
    }
    
    // Smoking increases risk
    if (patientData.smoking_history === 'current') {
      riskScore += 0.05;
    }
    
    // Cap the risk score at 1
    riskScore = Math.min(riskScore, 1);
    
    // Determine prediction (0: no diabetes, 1: diabetes)
    const prediction = riskScore > 0.5 ? 1 : 0;
    
    // Generate explanation with feature importances
    const explanation = Object.entries(FEATURE_IMPORTANCES).map(([feature, importance]) => ({
      feature,
      importance
    })).sort((a, b) => b.importance - a.importance);
    
    // Determine risk level
    let risk = "Low";
    if (riskScore > MEDIUM_RISK_THRESHOLD) {
      risk = "High";
    } else if (riskScore > LOW_RISK_THRESHOLD) {
      risk = "Medium";
    }
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      prediction,
      probability: riskScore,
      risk,
      explanation
    };
  } catch (error) {
    console.error("Prediction error:", error);
    toast.error("Failed to make prediction. Please try again.");
    throw error;
  }
};
