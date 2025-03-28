
export type GenderType = "Male" | "Female" | "Other";

export type SmokingHistoryType = 
  | "current" 
  | "ever" 
  | "former" 
  | "never" 
  | "not current" 
  | "No Info";

export type RiskLevel = "Low" | "Medium" | "High";

export interface FeatureImportance {
  feature: string;
  importance: number;
}
