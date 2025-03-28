
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GenderType, SmokingHistoryType } from "@/types";
import { PatientData } from "@/services/predictionService";

interface HealthFormProps {
  onSubmit: (data: PatientData) => void;
  isLoading: boolean;
}

const HealthForm = ({ onSubmit, isLoading }: HealthFormProps) => {
  const [patientData, setPatientData] = useState<PatientData>({
    age: 45,
    gender: "Male",
    hypertension: 0,
    heart_disease: 0,
    smoking_history: "never",
    bmi: 25.0,
    HbA1c_level: 5.7,
    blood_glucose_level: 100,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setPatientData({
      ...patientData,
      [name]: type === "number" ? parseFloat(value) : value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const handleBinaryChange = (name: string, value: number) => {
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(patientData);
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Age */}
            <div className="health-input">
              <Label htmlFor="age" className="health-label">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={patientData.age}
                onChange={handleInputChange}
                min={1}
                max={120}
                className="health-input-field"
                required
              />
            </div>

            {/* Gender */}
            <div className="health-input">
              <Label htmlFor="gender" className="health-label">Gender</Label>
              <Select
                value={patientData.gender}
                onValueChange={(value) => handleSelectChange("gender", value)}
              >
                <SelectTrigger className="health-select">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* BMI */}
            <div className="health-input">
              <Label htmlFor="bmi" className="health-label">BMI</Label>
              <Input
                id="bmi"
                name="bmi"
                type="number"
                value={patientData.bmi}
                onChange={handleInputChange}
                step="0.1"
                min={10}
                max={50}
                className="health-input-field"
                required
              />
              <p className="text-xs text-muted-foreground">Body Mass Index (weight in kg / height in m²)</p>
            </div>

            {/* Blood Glucose Level */}
            <div className="health-input">
              <Label htmlFor="blood_glucose_level" className="health-label">Blood Glucose Level (mg/dL)</Label>
              <Input
                id="blood_glucose_level"
                name="blood_glucose_level"
                type="number"
                value={patientData.blood_glucose_level}
                onChange={handleInputChange}
                min={50}
                max={300}
                className="health-input-field"
                required
              />
            </div>

            {/* HbA1c Level */}
            <div className="health-input">
              <Label htmlFor="HbA1c_level" className="health-label">HbA1c Level (%)</Label>
              <Input
                id="HbA1c_level"
                name="HbA1c_level"
                type="number"
                value={patientData.HbA1c_level}
                onChange={handleInputChange}
                step="0.1"
                min={3}
                max={15}
                className="health-input-field"
                required
              />
            </div>

            {/* Smoking History */}
            <div className="health-input">
              <Label htmlFor="smoking_history" className="health-label">Smoking History</Label>
              <Select
                value={patientData.smoking_history}
                onValueChange={(value) => handleSelectChange("smoking_history", value)}
              >
                <SelectTrigger className="health-select">
                  <SelectValue placeholder="Select smoking history" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current smoker</SelectItem>
                  <SelectItem value="ever">Ever smoked</SelectItem>
                  <SelectItem value="former">Former smoker</SelectItem>
                  <SelectItem value="never">Never smoked</SelectItem>
                  <SelectItem value="not current">Not current smoker</SelectItem>
                  <SelectItem value="No Info">No information</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Health Conditions */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Health Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hypertension */}
              <div className="health-input">
                <Label className="health-label">Hypertension (High Blood Pressure)</Label>
                <div className="flex space-x-4 mt-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="hypertension-no"
                      name="hypertension"
                      checked={patientData.hypertension === 0}
                      onChange={() => handleBinaryChange("hypertension", 0)}
                      className="mr-2"
                    />
                    <Label htmlFor="hypertension-no">No</Label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="hypertension-yes"
                      name="hypertension"
                      checked={patientData.hypertension === 1}
                      onChange={() => handleBinaryChange("hypertension", 1)}
                      className="mr-2"
                    />
                    <Label htmlFor="hypertension-yes">Yes</Label>
                  </div>
                </div>
              </div>

              {/* Heart Disease */}
              <div className="health-input">
                <Label className="health-label">Heart Disease</Label>
                <div className="flex space-x-4 mt-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="heart-disease-no"
                      name="heart_disease"
                      checked={patientData.heart_disease === 0}
                      onChange={() => handleBinaryChange("heart_disease", 0)}
                      className="mr-2"
                    />
                    <Label htmlFor="heart-disease-no">No</Label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="heart-disease-yes"
                      name="heart_disease"
                      checked={patientData.heart_disease === 1}
                      onChange={() => handleBinaryChange("heart_disease", 1)}
                      className="mr-2"
                    />
                    <Label htmlFor="heart-disease-yes">Yes</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Analyzing..." : "Calculate Diabetes Risk"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default HealthForm;
