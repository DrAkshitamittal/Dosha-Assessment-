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