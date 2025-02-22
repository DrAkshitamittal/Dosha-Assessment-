console.log("Script loaded!");

// Object to store user selections
let selections = {};

// Initialize current language
let currentLanguage = "en"; // Default language

// Translations for English and Hindi
const translations = {
  en: {
    // Quiz Title and Sections
    quizTitle: "Find Your Prakriti & Vikriti (Understand your Ayurvedic Constitution)",
    section1Title: "General Prakriti & Vikriti",
    section2Title: "Hair Vikriti (Current Hair Issues)",
    section3Title: "Skin Vikriti (Current Skin Issues)",

    // General Prakriti & Vikriti (Q1-Q5)
    q1: "1. What is your natural body frame?",
    q1A: "1) Thin & Light",
    q1B: "2) Medium & Athletic",
    q1C: "3) Broad & Sturdy",

    q2: "2. How is your skin type naturally?",
    q2A: "A) Dry & Rough",
    q2B: "B) Sensitive & Prone to Redness",
    q2C: "C) Oily & Thick",

    q3: "3. How do you react to stress?",
    q3A: "1) Anxious & Worry a lot",
    q3B: "2) Irritable & Angry",
    q3C: "3) Calm & Steady",

    q4: "4. What is your natural hair texture?",
    q4A: "A) Thin, dry, and brittle",
    q4B: "B) Soft, straight, and fine",
    q4C: "C) Thick, wavy, and strong",

    q5: "5. How is your natural appetite?",
    q5A: "A) Irregular and variable appetite",
    q5B: "B) Strong and balanced appetite",
    q5C: "C) Slow and steady appetite",

    // Hair Vikriti (Q6-Q10)
    q6: "6. How is your scalp condition?",
    q6A: "A) Dry, flaky",
    q6B: "B) Sensitive, itchy",
    q6C: "C) Oily, sticky",

    q7: "7. What type of hair fall do you experience?",
    q7A: "1) Thin, breakage-prone",
    q7B: "2) Sudden, excessive shedding",
    q7C: "3) Heavy, but slow hair loss",

    q8: "8. How is your current hair texture?",
    q8A: "A) Frizzy and dry",
    q8B: "B) Fine and limp",
    q8C: "C) Thick and greasy",

    q9: "9. How often do you experience dandruff?",
    q9A: "A) Frequently, due to dryness",
    q9B: "B) Occasionally, mild flaking",
    q9C: "C) Rarely, if ever",

    q10: "10. How is the shine of your hair?",
    q10A: "A) Dull and lackluster",
    q10B: "B) Moderate shine",
    q10C: "C) Very shiny and oily",

    // Skin Vikriti (Q11-Q15)
    q11: "11. How does your skin react to weather changes?",
    q11A: "A) Becomes drier, rougher",
    q11B: "B) Prone to redness and irritation",
    q11C: "C) Becomes greasier, dull",

    q12: "12. How often do you get acne or breakouts?",
    q12A: "A) Rarely, but skin is dry",
    q12B: "B) Frequently, red and inflamed",
    q12C: "C) Occasional but deep cystic acne",

    q13: "13. How is your current skin texture?",
    q13A: "A) Flaky and rough",
    q13B: "B) Sensitive and reactive",
    q13C: "C) Smooth and thick",

    q14: "14. How is your skin moisture?",
    q14A: "A) Very dry",
    q14B: "B) Balanced moisture",
    q14C: "C) Oily and moist",

    q15: "15. How is your skin’s overall appearance?",
    q15A: "A) Dull and patchy",
    q15B: "B) Clear but prone to redness",
    q15C: "C) Glowing but can be congested",

    // Results Section
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
    submitBtn: "Submit",
    backBtn: "⬅️ Back to Website",
    languageToggle: "Switch to Hindi",
  },
  hi: {
    // Quiz Title and Sections
    quizTitle: "अपनी प्रकृति और विकृति जानें (आयुर्वेदिक संविधान को समझें)",
    section1Title: "सामान्य प्रकृति और विकृति",
    section2Title: "बाल विकृति (वर्तमान बाल समस्याएं)",
    section3Title: "त्वचा विकृति (वर्तमान त्वचा समस्याएं)",

    // General Prakriti & Vikriti (Q1-Q5)
    q1: "1. आपकी प्राकृतिक शारीरिक संरचना कैसी है?",
    q1A: "1) पतली और हल्की",
    q1B: "2) मध्यम और एथलेटिक",
    q1C: "3) चौड़ी और मजबूत",

    q2: "2. आपकी त्वचा का प्राकृतिक प्रकार कैसा है?",
    q2A: "A) शुष्क और खुरदरी",
    q2B: "B) संवेदनशील और लालिमा प्रवण",
    q2C: "C) तैलीय और मोटी",

    q3: "3. तनाव पर आपकी प्रतिक्रिया कैसी होती है?",
    q3A: "1) चिंतित और बहुत चिंता करते हैं",
    q3B: "2) चिड़चिड़े और गुस्सैल",
    q3C: "3) शांत और स्थिर",

    q4: "4. आपके बालों का प्राकृतिक बनावट कैसा है?",
    q4A: "A) पतले, शुष्क और भंगुर",
    q4B: "B) नरम, सीधे और महीन",
    q4C: "C) घने, लहरदार और मजबूत",

    q5: "5. आपकी प्राकृतिक भूख कैसी है?",
    q5A: "A) अनियमित और परिवर्तनशील",
    q5B: "B) मजबूत और संतुलित",
    q5C: "C) धीमी और स्थिर",

    // Hair Vikriti (Q6-Q10)
    q6: "6. आपकी स्कैल्प की स्थिति कैसी है?",
    q6A: "A) शुष्क, रूसीयुक्त",
    q6B: "B) संवेदनशील, खुजली वाली",
    q6C: "C) तैलीय, चिपचिपी",

    q7: "7. आपको किस प्रकार के बाल झड़ने का अनुभव होता है?",
    q7A: "1) पतले, टूटने वाले",
    q7B: "2) अचानक, अत्यधिक झड़ना",
    q7C: "3) भारी, लेकिन धीमी गति से",

    q8: "8. आपके बालों की वर्तमान बनावट कैसी है?",
    q8A: "A) रूखे और शुष्क",
    q8B: "B) महीन और लटके हुए",
    q8C: "C) घने और चिकने",

    q9: "9. आपको कितनी बार रूसी होती है?",
    q9A: "A) अक्सर, शुष्कता के कारण",
    q9B: "B) कभी-कभी, हल्की रूसी",
    q9C: "C) शायद ही कभी",

    q10: "10. आपके बालों की चमक कैसी है?",
    q10A: "A) मंद और फीकी",
    q10B: "B) मध्यम चमक",
    q10C: "C) बहुत चमकदार और तैलीय",

    // Skin Vikriti (Q11-Q15)
    q11: "11. मौसम परिवर्तन पर आपकी त्वचा की प्रतिक्रिया कैसी होती है?",
    q11A: "A) अधिक शुष्क और खुरदरी हो जाती है",
    q11B: "B) लालिमा और जलन प्रवण",
    q11C: "C) अधिक तैलीय और मंद हो जाती है",

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
    submitBtn: "जमा करें",
    backBtn: "⬅️ वेबसाइट पर वापस जाएं",
    languageToggle: "अंग्रेजी में बदलें",
  },
};

// Add event listeners to all option elements
document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', function() {
    console.log("Option clicked:",this);
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

// Function to toggle between English and Hindi
function toggleLanguage() {
  console.log("Language toggle clicked!");
  currentLanguage = currentLanguage === "en" ? "hi" : "en";
  updateLanguage();
}

// Function to update the quiz content based on the selected language
function updateLanguage() {
  console.log("Updating language to:", currentLanguage);
  document.getElementById("quizTitle").textContent = translations[currentLanguage].quizTitle;
  document.getElementById("section1Title").textContent = translations[currentLanguage].section1Title;
  document.getElementById("section2Title").textContent = translations[currentLanguage].section2Title;
  document.getElementById("section3Title").textContent = translations[currentLanguage].section3Title;
  document.getElementById("q1").textContent = translations[currentLanguage].q1;
  document.getElementById("q1A").textContent = translations[currentLanguage].q1A;
  document.getElementById("q1B").textContent = translations[currentLanguage].q1B;
  document.getElementById("q1C").textContent = translations[currentLanguage].q1C;
  document.getElementById("q2").textContent = translations[currentLanguage].q2;
  document.getElementById("q2A").textContent = translations[currentLanguage].q2A;
  document.getElementById("q2B").textContent = translations[currentLanguage].q2B;
  document.getElementById("q2C").textContent = translations[currentLanguage].q2C;
  document.getElementById("q3").textContent = translations[currentLanguage].q3;
  document.getElementById("q3A").textContent = translations[currentLanguage].q3A;
  document.getElementById("q3B").textContent = translations[currentLanguage].q3B;
  document.getElementById("q3C").textContent = translations[currentLanguage].q3C;
  document.getElementById("q4").textContent = translations[currentLanguage].q4;
  document.getElementById("q4A").textContent = translations[currentLanguage].q4A;
  document.getElementById("q4B").textContent = translations[currentLanguage].q4B;
  document.getElementById("q4C").textContent = translations[currentLanguage].q4C;
  document.getElementById("q5").textContent = translations[currentLanguage].q5;
  document.getElementById("q5A").textContent = translations[currentLanguage].q5A;
  document.getElementById("q5B").textContent = translations[currentLanguage].q5B;
  document.getElementById("q5C").textContent = translations[currentLanguage].q5C;
  // Update buttons
  document.getElementById("submitBtn").textContent = translations[currentLanguage].submitBtn;
  document.getElementById("backBtn").textContent = translations[currentLanguage].backBtn;
  document.getElementById("languageToggle").textContent = translations[currentLanguage].languageToggle;
}

// Initialize the quiz in the default language
updateLanguage();

// Calculate and display the results
function calculateResults() {
  console.log("Calculate Results Called");
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