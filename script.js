
    
    
    q12: "12. आपको मुंहासे या ब्रेकआउट कितनी बार होते हैं?",
    q12A: "A) शायद ही कभी, लेकिन त्वचा शुष्क है",
    q12B: "B) अक्सर, लाल और सूजन वाले",
    q12C: "C) कभी-कभी, लेकिन गहरे सिस्टिक मुंहासे",

    q13: "13. आपकी त्वचा की वर्तमान बनावट कैसी है?",
    q13A: "A) रूखी और खुरदरी",
    q13B: "B) संवेदनशील और प्रतिक्रियाशील",
    q13C: "C) चिकनी और मोटी",

    q14: "14. आपकी त्वचा की नमी कैसी है?",
    q14A: "A) बहुत शुष्क",
    q14B: "B) संतुलित नमी",
    q14C: "C) तैलीय और नम",

    q15: "15. आपकी त्वचा की समग्र उपस्थिति कैसी है?",
    q15A: "A) मंद और धब्बेदार",
    q15B: "B) साफ लेकिन लालिमा प्रवण",
    q15C: "C) चमकदार लेकिन रोमछिद्र बंद हो सकते हैं",

    // Results Section
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
    <h3>${translations[currentLanguage].resultTitle}</h3>
    <h3>${translations[currentLanguage].prakritiTitle} ${prakriti}</h3>
    <h3>${translations[currentLanguage].vikritiTitle} ${vikriti}</h3>
    <h4>${translations[currentLanguage].selectionsTitle}</h4>
    <p><strong>Body Frame (q1):</strong> ${selections.q1 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Skin Type (q2):</strong> ${selections.q2 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Stress Response (q3):</strong> ${selections.q3 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Natural Hair Texture (q4):</strong> ${selections.q4 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Natural Appetite (q5):</strong> ${selections.q5 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Scalp Condition (hair1):</strong> ${selections.hair1 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Hair Fall (hair2):</strong> ${selections.hair2 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Current Hair Texture (hair3):</strong> ${selections.hair3 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Dandruff Frequency (hair4):</strong> ${selections.hair4 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Hair Shine (hair5):</strong> ${selections.hair5 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Skin Reaction (skin1):</strong> ${selections.skin1 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Acne/Breakouts (skin2):</strong> ${selections.skin2 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Skin Texture (skin3):</strong> ${selections.skin3 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Skin Moisture (skin4):</strong> ${selections.skin4 || translations[currentLanguage].notAnswered}</p>
    <p><strong>Overall Skin Appearance (skin5):</strong> ${selections.skin5 || translations[currentLanguage].notAnswered}</p>
    <h4>${translations[currentLanguage].productsTitle.replace("${vikriti}", vikriti)}</h4>
    <p>${translations[currentLanguage].products[vikriti]}</p>
  `;
}
function goBack() {
    window.location.href = "https://yourwebsite.com"; // Replace with your actual website URL
}