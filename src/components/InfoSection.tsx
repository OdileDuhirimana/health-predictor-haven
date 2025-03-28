
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Info, CheckCircle, AlertCircle } from "lucide-react";

const InfoSection = () => {
  return (
    <div className="space-y-12 py-12">
      <section id="about">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Info className="h-6 w-6 mr-2 text-medical-primary" />
          About This Tool
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              The Diabetes Risk Assessment Tool uses advanced machine learning algorithms to estimate your risk of developing type 2 diabetes.
              This assessment is based on the analysis of key health factors that are known to contribute to diabetes risk.
            </p>
            <p className="text-gray-700 mt-4">
              Our model has been trained on extensive health data and identifies patterns associated with diabetes development.
              While not a diagnostic tool, it can help identify potential risk factors that you may want to discuss with healthcare professionals.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="how-it-works">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Activity className="h-6 w-6 mr-2 text-medical-primary" />
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="health-card">
            <CardHeader>
              <CardTitle className="text-lg">1. Enter Your Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Complete the form with your personal health information. All data remains private and is only used for the current assessment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="health-card">
            <CardHeader>
              <CardTitle className="text-lg">2. AI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our machine learning model analyzes your inputs against thousands of data points to calculate your diabetes risk factors.
              </p>
            </CardContent>
          </Card>
          
          <Card className="health-card">
            <CardHeader>
              <CardTitle className="text-lg">3. Review Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Receive a detailed risk assessment with explanations of which factors are contributing most significantly to your risk profile.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="disclaimer">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <AlertCircle className="h-6 w-6 mr-2 text-medical-primary" />
          Medical Disclaimer
        </h2>
        <Card className="border-medical-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-3/4">
                <p className="text-gray-700">
                  <strong>This tool is not a substitute for professional medical advice, diagnosis, or treatment.</strong> Always consult with qualified healthcare providers before making any health-related decisions or changes to your lifestyle.
                </p>
                <p className="text-gray-700 mt-4">
                  The predictions made by this tool are based on statistical models and general population data. Individual health situations can vary significantly, and many factors beyond those included in this assessment can influence diabetes risk.
                </p>
                <p className="text-gray-700 mt-4">
                  If you are concerned about your diabetes risk or are experiencing symptoms, please consult with a healthcare professional immediately.
                </p>
              </div>
              <div className="md:w-1/4 flex justify-center items-center">
                <CheckCircle className="h-24 w-24 text-medical-secondary opacity-20" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default InfoSection;
