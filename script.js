// Object to store user selections
let selections = {};

// Add event listeners to all option elements
document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', function() {
    const question = this.getAttribute('data-question');
    const value = this.getAttribute('data-value');
    
    // Save the selection
    selections[question] = value;
    
    // Remove the 'selected' class from all options of this question
    document.querySelectorAll(`[data-question="${question}"]`).forEach(opt => {
      opt.classList.remove('selected');
    });
    
    // Add 'selected' class to the clicked option
    this.classList.add('selected');
  });
});
// Translations for English and Hindi
const translations = {
  en: {
    quizTitle: "Find Your Prakriti & Vikriti (Understand your Ayurvedic Constitution)",
    section1Title: "General Prakriti & Vikriti",
    q1: "1. What is your natural body frame?",
    q1A: "1) Thin & Light",
    q1B: "2) Medium & Athletic",
    q1C: "3) Broad & Sturdy",
    q2: "2. How is your skin type naturally?",
    q2A: "A) Dry & Rough",
    q2B: "B) Sensitive & Prone to Redness",
    q2C: "C) Oily & Thick",
    submitBtn: "Submit",
    backBtn: "⬅️ Back to Website",
    languageToggle: "Switch to Hindi",
  },
  hi: {
    quizTitle: "अपनी प्रकृति और विकृति जानें (आयुर्वेदिक संविधान को समझें)",
    section1Title: "सामान्य प्रकृति और विकृति",
    q1: "1. आपकी प्राकृतिक शारीरिक संरचना कैसी है?",
    q1A: "1) पतली और हल्की",
    q1B: "2) मध्यम और एथलेटिक",
    q1C: "3) चौड़ी और मजबूत",
    q2: "2. आपकी त्वचा का प्राकृतिक प्रकार कैसा है?",
    q2A: "A) शुष्क और खुरदरी",
    q2B: "B) संवेदनशील और लालिमा प्रवण",
    q2C: "C) तैलीय और मोटी",
    submitBtn: "जमा करें",
    backBtn: "⬅️ वेबसाइट पर वापस जाएं",
    languageToggle: "अंग्रेजी में बदलें",
  },
};

let currentLanguage = "en"; // Default language

// Function to toggle between English and Hindi
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "hi" : "en";
  updateLanguage();
}

// Function to update the quiz content based on the selected language
function updateLanguage() {
  document.getElementById("quizTitle").textContent = translations[currentLanguage].quizTitle;
  document.getElementById("section1Title").textContent = translations[currentLanguage].section1Title;
  document.getElementById("q1").textContent = translations[currentLanguage].q1;
  document.getElementById("q1A").textContent = translations[currentLanguage].q1A;
  document.getElementById("q1B").textContent = translations[currentLanguage].q1B;
  document.getElementById("q1C").textContent = translations[currentLanguage].q1C;
  document.getElementById("q2").textContent = translations[currentLanguage].q2;
  document.getElementById("q2A").textContent = translations[currentLanguage].q2A;
  document.getElementById("q2B").textContent = translations[currentLanguage].q2B;
  document.getElementById("q2C").textContent = translations[currentLanguage].q2C;
  document.getElementById("submitBtn").textContent = translations[currentLanguage].submitBtn;
  document.getElementById("backBtn").textContent = translations[currentLanguage].backBtn;
  document.getElementById("languageToggle").textContent = translations[currentLanguage].languageToggle;
}

// Initialize the quiz in the default language
updateLanguage();

const translations = {
  en: {
    // Existing English translations...
    resultTitle: "Your Results",
    prakritiTitle: "Your General Prakriti (Natural Constitution):",
    vikritiTitle: "Your Current Vikriti (Imbalance):",
    selectionsTitle: "Your Selections:",
    notAnswered: "Not Answered",
    productsTitle: "For balancing ${vikriti}, consider these AKS Herbal products:",
    products: {
      Vata: "✅ Vata Shampoo <br>✅ Vata Hair Oil <br>✅ Vata Saffron Facewash <br>✅ Vata Kumkumadi Oil",
      Pitta: "✅ Pitta Shampoo <br>✅ Pitta Hair Oil <br>✅ Pitta Saffron Facewash <br>✅ Pitta Kumkumadi Oil",
      Kapha: "✅ Kapha Shampoo <br>✅ Kapha Hair Oil <br>✅ Kapha Saffron Facewash <br>✅ Kapha Kumkumadi Oil",
    },
  },
  hi: {
    // Existing Hindi translations...
    resultTitle: "आपके परिणाम",
    prakritiTitle: "आपकी सामान्य प्रकृति (प्राकृतिक संविधान):",
    vikritiTitle: "आपकी वर्तमान विकृति (असंतुलन):",
    selectionsTitle: "आपके चयन:",
    notAnswered: "उत्तर नहीं दिया गया",
    productsTitle: "${vikriti} को संतुलित करने के लिए, इन एकेएस हर्बल उत्पादों पर विचार करें:",
    products: {
      Vata: "✅ वात शैम्पू <br>✅ वात हेयर ऑयल <br>✅ वात सैफ्रॉन फेसवॉश <br>✅ वात कुमकुमादी तेल",
      Pitta: "✅ पित्त शैम्पू <br>✅ पित्त हेयर ऑयल <br>✅ पित्त सैफ्रॉन फेसवॉश <br>✅ पित्त कुमकुमादी तेल",
      Kapha: "✅ कफ शैम्पू <br>✅ कफ हेयर ऑयल <br>✅ कफ सैफ्रॉन फेसवॉश <br>✅ कफ कुमकुमादी तेल",
    },
  },
};

// Calculate and display the results
function calculateResults() {
  // Calculate General Prakriti scores (from q1 to q5)
  let generalScores = { Vata: 0, Pitta: 0, Kapha: 0 };
  ['q1', 'q2', 'q3', 'q4', 'q5'].forEach(q => {
    if (selections[q]) {
      generalScores[selections[q]]++;
    }
  });
  let prakriti = Object.keys(generalScores).reduce((a, b) => generalScores[a] > generalScores[b] ? a : b);
  
  // Calculate Vikriti scores (from Hair: hair1 to hair5 and Skin: skin1 to skin5)
  let vikritiScores = { Vata: 0, Pitta: 0, Kapha: 0 };
  ['hair1', 'hair2', 'hair3', 'hair4', 'hair5',
   'skin1', 'skin2', 'skin3', 'skin4', 'skin5'].forEach(q => {
    if (selections[q]) {
      vikritiScores[selections[q]]++;
    }
  });
  let vikriti = Object.keys(vikritiScores).reduce((a, b) => vikritiScores[a] > vikritiScores[b] ? a : b);
  
  // AKS Herbal Product recommendations based on the dominant Vikriti dosha
  let products = {
    Vata: "✅ Vata Shampoo <br>✅ Vata Hair Oil <br>✅ Vata Saffron Facewash <br>✅ Vata Kumkumadi Oil",
    Pitta: "✅ Pitta Shampoo <br>✅ Pitta Hair Oil <br>✅ Pitta Saffron Facewash <br>✅ Pitta Kumkumadi Oil",
    Kapha: "✅ Kapha Shampoo <br>✅ Kapha Hair Oil <br>✅ Kapha Saffron Facewash <br>✅ Kapha Kumkumadi Oil"
  };
  
  // Display results and summary of selections
  document.getElementById("result").innerHTML = `
    <h3>Your General Prakriti (Natural Constitution): ${prakriti}</h3>
    <h3>Your Current Vikriti (Imbalance): ${vikriti}</h3>
    <h4>Your Selections:</h4>
    <p><strong>Body Frame (q1):</strong> ${selections.q1 || "Not Answered"}</p>
    <p><strong>Skin Type (q2):</strong> ${selections.q2 || "Not Answered"}</p>
    <p><strong>Stress Response (q3):</strong> ${selections.q3 || "Not Answered"}</p>
    <p><strong>Natural Hair Texture (q4):</strong> ${selections.q4 || "Not Answered"}</p>
    <p><strong>Natural Appetite (q5):</strong> ${selections.q5 || "Not Answered"}</p>
    <p><strong>Scalp Condition (hair1):</strong> ${selections.hair1 || "Not Answered"}</p>
    <p><strong>Hair Fall (hair2):</strong> ${selections.hair2 || "Not Answered"}</p>
    <p><strong>Current Hair Texture (hair3):</strong> ${selections.hair3 || "Not Answered"}</p>
    <p><strong>Dandruff Frequency (hair4):</strong> ${selections.hair4 || "Not Answered"}</p>
    <p><strong>Hair Shine (hair5):</strong> ${selections.hair5 || "Not Answered"}</p>
    <p><strong>Skin Reaction (skin1):</strong> ${selections.skin1 || "Not Answered"}</p>
    <p><strong>Acne/Breakouts (skin2):</strong> ${selections.skin2 || "Not Answered"}</p>
    <p><strong>Skin Texture (skin3):</strong> ${selections.skin3 || "Not Answered"}</p>
    <p><strong>Skin Moisture (skin4):</strong> ${selections.skin4 || "Not Answered"}</p>
    <p><strong>Overall Skin Appearance (skin5):</strong> ${selections.skin5 || "Not Answered"}</p>
    <h4>For balancing ${vikriti}, consider these AKS Herbal products:</h4>
    <p>${products[vikriti]}</p>
  `;
}
function goBack() {
    window.location.href = "https://yourwebsite.com"; // Replace with your actual website URL
}