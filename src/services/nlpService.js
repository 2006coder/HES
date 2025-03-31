// matching :)
const symptomsMapping = {
  // orthopedics
  "leg pain": ["orthopedics"],
  "broken bone": ["orthopedics", "emergency"],
  "back pain": ["orthopedics", "physical therapy"],
  "joint pain": ["rheumatology", "orthopedics"],
  "shoulder dislocation": ["orthopedics", "emergency"],
  "ankle dislocation": ["orthopedics", "emergency"],
  "wrist dislocation": ["orthopedics", "emergency"],
  "finger dislocation": ["orthopedics", "emergency"],
  "ankle sprains": ["orthopedics", "sports medicine"],
  "wrist sprain": ["orthopedics", "sports medicine"],
  "knee sprain": ["orthopedics", "sports medicine"],
  
  // general practice
  "minor illness": ["general practice", "urgent care"],
  "minor headache": ["general practice", "urgent care"],
  "severe headache": ["neurology", "emergency"],
  "headache": ["neurology", "general practice"],
  "fever": ["general practice", "urgent care"],
  "high fever": ["emergency", "urgent care"],
  "cough": ["pulmonology", "general practice"],
  "cold": ["general practice", "urgent care"],
  "sore throat": ["general practice", "urgent care"],
  "sinus infection": ["general practice", "urgent care"],
  "flu": ["general practice", "urgent care"],
  "mono": ["general practice", "urgent care"],
  
  // gastroenterology
  "stomach ache": ["gastroenterology", "general practice"],
  "stomach pain": ["gastroenterology", "general practice"],
  "stomach bug": ["gastroenterology", "general practice"],
  "vomiting": ["gastroenterology", "emergency", "urgent care"],
  "diarrhea": ["gastroenterology", "general practice"],
  "nausea": ["gastroenterology", "general practice"],
  
  // other specialties
  "allergies": ["allergy", "general practice"],
  "allergic reaction": ["allergy", "emergency"],
  "covid-19": ["infectious disease", "general practice"],
  "strep throat": ["general practice", "urgent care"],
  "cuts": ["emergency", "urgent care"],
  "lacerations": ["emergency", "urgent care"],
  "bruises": ["general practice", "urgent care"],
  "burns": ["emergency", "urgent care"],
  "minor burns": ["urgent care", "general practice"],
  "skin rashes": ["dermatology", "general practice"],
  "rash": ["dermatology", "general practice"],
  "infections": ["infectious disease", "general practice"],
  "concussion": ["neurology", "emergency"],
  
  "mental health": ["psychiatry", "psychology"],
  "depression": ["psychiatry", "psychology"],
  "anxiety": ["psychiatry", "psychology"],
  "pregnancy": ["obstetrics", "gynecology"],
  "children": ["pediatrics"]

  // todo: add xray specialty separately
};

export const analyzeSymptoms = async (userInput) => {
  // todo: use gpt-4 api to analyze if the input does not fall into any of the above categories :)
  
  const input = userInput.toLowerCase();
  let matchedKeywords = [];
  
  // check for matches.
  for (const [symptom, keywords] of Object.entries(symptomsMapping)) {
    if (input.includes(symptom)) {
      matchedKeywords = [...matchedKeywords, ...keywords];
    }
  }
  
  // if no matches found, provide general categories for now. I will add gpt api later to analyze this.
  if (matchedKeywords.length === 0) {
    matchedKeywords = ["general practice", "urgent care"];
  }
  
  // Remove duplicates
  matchedKeywords = [...new Set(matchedKeywords)];
  
  return matchedKeywords;
};
