// Import TensorFlow.js for embeddings
import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

let isTfInitialized = false;

// Specialty-based mapping of symptoms and conditions
const specialtiesMapping = {
  "orthopedics": [
    "leg pain", "broken bone", "broken leg", "back pain", "joint pain", "shoulder dislocation",
    "ankle dislocation", "wrist dislocation", "finger dislocation", "ankle sprains",
    "wrist sprain", "knee sprain", "hip pain", "osteoporosis", "arthritis", "fracture",
    "neck pain", "spinal stenosis", "carpal tunnel syndrome", "rotator cuff injury", "scoliosis"
  ],
  "emergency": [
    "broken bone", "shoulder dislocation", "ankle dislocation", "wrist dislocation",
    "finger dislocation", "severe headache", "high fever", "vomiting", "allergic reaction",
    "cuts", "lacerations", "burns", "concussion", "chest pain", "shortness of breath",
    "seizures", "stroke symptoms", "heart attack symptoms", "uncontrolled bleeding",
    "poisoning", "drug overdose", "acute asthma attack", "loss of consciousness", "acute abdominal pain"
  ],
  "physical therapy": [
    "back pain", "neck pain", "joint stiffness", "mobility issues", "sports injury rehabilitation",
    "post-operative recovery", "balance disorders", "muscle weakness", "chronic pain"
  ],
  "rheumatology": [
    "joint pain", "arthritis", "rheumatoid arthritis", "lupus", "fibromyalgia", "gout",
    "autoimmune disease", "systemic sclerosis", "sjogren's syndrome", "ankylosing spondylitis"
  ],
  "sports medicine": [
    "ankle sprains", "wrist sprain", "knee sprain", "ACL injury", "meniscus tear", "sports-related concussion",
    "tennis elbow", "golfer's elbow", "hamstring strain", "shin splints", "stress fractures"
  ],
  "general practice": [
    "minor illness", "minor headache", "headache", "fever", "cough", "cold", "sore throat",
    "sinus infection", "flu", "mono", "stomach ache", "stomach pain", "stomach bug", "diarrhea",
    "nausea", "allergies", "covid-19", "strep throat", "bruises", "minor burns", "skin rashes",
    "rash", "infections", "hypertension", "diabetes management", "cholesterol management",
    "fatigue", "ear infections", "urinary tract infections (UTI)", "eye infections"
  ],
  "urgent care": [
    "minor illness", "minor headache", "fever", "high fever", "cold", "sore throat", "sinus infection",
    "flu", "mono", "vomiting", "strep throat", "cuts", "lacerations", "bruises", "minor burns",
    "sprains", "strains", "ear pain", "eye irritation", "UTI symptoms", "minor allergic reaction"
  ],
  "neurology": [
    "severe headache", "headache", "concussion", "migraine", "epilepsy", "Parkinson's disease",
    "multiple sclerosis", "neuropathy", "memory loss", "tremors", "stroke", "Alzheimer's disease"
  ],
  "pulmonology": [
    "cough", "asthma", "COPD", "bronchitis", "pneumonia", "shortness of breath", "lung infections",
    "sleep apnea", "tuberculosis", "emphysema"
  ],
  "gastroenterology": [
    "stomach ache", "stomach pain", "stomach bug", "vomiting", "diarrhea", "nausea",
    "IBS", "Crohn's disease", "ulcerative colitis", "gastritis", "acid reflux", "ulcers",
    "celiac disease", "gastroenteritis", "hepatitis", "pancreatitis"
  ],
  "allergy": [
    "allergies", "allergic reaction", "seasonal allergies", "food allergies", "insect bite reaction",
    "anaphylaxis", "hay fever", "eczema", "hives"
  ],
  "infectious disease": [
    "covid-19", "infections", "HIV/AIDS", "hepatitis B", "hepatitis C", "MRSA", "Lyme disease",
    "malaria", "measles", "mumps", "rubella", "chickenpox", "meningitis", "influenza", "mononucleosis"
  ],
  "dermatology": [
    "skin rashes", "rash", "acne", "eczema", "psoriasis", "skin infections", "dermatitis",
    "skin cancer", "melanoma", "fungal infections", "warts", "rosacea"
  ],
  "psychiatry": [
    "mental health", "depression", "anxiety", "bipolar disorder", "schizophrenia", "PTSD",
    "OCD", "ADHD", "panic disorder", "eating disorders", "substance abuse"
  ],
  "psychology": [
    "mental health", "depression", "anxiety", "stress management", "behavioral therapy",
    "family counseling", "grief counseling", "psychological assessments", "PTSD"
  ],
  "obstetrics": [
    "pregnancy", "prenatal care", "labor and delivery", "postpartum care", "gestational diabetes",
    "pre-eclampsia", "ectopic pregnancy", "miscarriage management"
  ],
  "gynecology": [
    "pregnancy", "menstrual disorders", "menopause", "uterine fibroids", "PCOS", "endometriosis",
    "ovarian cysts", "pelvic pain", "cervical cancer screening", "sexually transmitted infections (STI)"
  ],
  "pediatrics": [
    "children", "childhood immunizations", "growth and developmental issues", "ear infections",
    "common colds", "fevers in children", "asthma in children", "allergies in children", "child behavioral issues",
    "nutrition guidance", "childhood diabetes"
  ],
  "xray": [
    "broken", "fracture", "dislocation", "sprains", "chest pain", "cough", "pneumonia",
    "lung infections", "arthritis", "joint pain", "osteoporosis", "scoliosis", "tumors",
    "foreign body", "sinus infections", "digestive tract obstructions", "abdominal pain",
    "swallowed objects", "kidney stones", "spinal injuries"
  ]
};

// Create reverse mapping for efficient lookup: symptom -> specialties
const symptomsMapping = {};
for (const [specialty, symptoms] of Object.entries(specialtiesMapping)) {
  symptoms.forEach(symptom => {
    if (!symptomsMapping[symptom]) {
      symptomsMapping[symptom] = [];
    }
    symptomsMapping[symptom].push(specialty);
  });
}

// Cache for storing embeddings
const embeddingsCache = {
  symptoms: null,
  symptomKeys: null,
};

// Load Universal Sentence Encoder model (full version)
let model = null;
const loadModel = async () => {
  if (!model) {
    try {
      if (!isTfInitialized) {
        await tf.ready();
        isTfInitialized = true;
        console.log("TensorFlow.js is ready, attempting to load model...");
      }
      
      model = await use.load();
      console.log("Model loaded successfully");
    } catch (modelError) {
      console.error("Error loading model:", modelError);
      model = null;
    }
  }
  return model;
};

// Create embeddings function
const embed = async (texts) => {
  const model = await loadModel();
  if (!model) return null;
  return model.embed(texts);
};

const initializeEmbeddings = async () => {
  if (embeddingsCache.symptoms) return;

  const allSymptoms = Object.keys(symptomsMapping);
  const allTexts = [...allSymptoms, ...Object.keys(specialtiesMapping)];
  
  try {
    const embeddings = await embed(allTexts);
    
    embeddingsCache.symptoms = embeddings;
    embeddingsCache.symptomKeys = allTexts;
  } catch (error) {
    console.error("Error initializing embeddings:", error);
  }
};

// Calculate cosine similarity between two tensors
const cosineSimilarity = (tensorA, tensorB) => {
  return tf.tidy(() => {
    const a = tf.div(tensorA, tf.norm(tensorA));
    const b = tf.div(tensorB, tf.norm(tensorB));
    return tf.sum(tf.mul(a, b));
  });
};

// Find most similar symptoms to user input
const findSimilarSymptoms = async (userInput, threshold = 0.6) => {
  try {
    await initializeEmbeddings();
    
    // If model failed to load, return empty array
    if (!model || !embeddingsCache.symptoms) {
      console.warn("Model unavailable - skipping semantic matching");
      return [];
    }
    
    const inputEmbedding = await embed([userInput]);
    if (!inputEmbedding) return [];

    const similarities = embeddingsCache.symptomKeys.map((symptom, i) => {
      const symptomEmbedding = tf.slice(embeddingsCache.symptoms, [i, 0], [1, -1]);
      const similarity = cosineSimilarity(inputEmbedding, symptomEmbedding).dataSync()[0];
      return { symptom, similarity };
    });

    inputEmbedding.dispose();

    return similarities
      .filter(item => item.similarity > threshold)
      .sort((a, b) => b.similarity - a.similarity)
      .map(item => item.symptom);
  } catch (error) {
    console.error("Error in semantic matching process:", error);
    return [];
  }
};

export const analyzeSymptoms = async (userInput) => {
  const input = userInput.toLowerCase();
  let matchedKeywords = [];
  console.log('Analyzing input:', input);
  
  // Try exact matching first
  let exactMatches = [];
  for (const [symptom, keywords] of Object.entries(symptomsMapping)) {
    if (input.includes(symptom)) {
      console.log(`Exact match found: "${symptom}"`);
      exactMatches.push(symptom);
      matchedKeywords = [...matchedKeywords, ...keywords];
    }
  }
  console.log('Exact matches:', exactMatches);
  console.log('Specialties from exact matches:', matchedKeywords);
  
  // If no exact matches, try semantic matching
  if (matchedKeywords.length === 0) {
    console.log('No exact matches, trying semantic matching...');
    try {
      const similarSymptoms = await findSimilarSymptoms(input);
      console.log('Semantic matches:', similarSymptoms);
      
      if (similarSymptoms.length > 0) {
        // Process semantic matches
        for (const item of similarSymptoms) {
          if (symptomsMapping[item]) {
            console.log(`Matched symptom semantically: "${item}" -> specialties:`, symptomsMapping[item]);
            matchedKeywords = [...matchedKeywords, ...symptomsMapping[item]];
          } else if (specialtiesMapping[item]) {
            console.log(`Matched specialty name directly: "${item}"`);
            matchedKeywords.push(item);
          }
        }
        console.log('Specialties from semantic matches:', matchedKeywords);
      } else {
        console.log('No semantic matches found');
      }
    } catch (error) {
      console.error("Error in semantic matching:", error);
      // Continue with default categories
    }
  }
  
  // If still no matches, use default categories
  if (matchedKeywords.length === 0) {
    console.log('No matches found, using default categories');
    matchedKeywords = ["general practice", "urgent care"];
  }
  
  // Remove duplicates
  matchedKeywords = [...new Set(matchedKeywords)];
  console.log('Final matched specialties:', matchedKeywords);
  
  return matchedKeywords;
};