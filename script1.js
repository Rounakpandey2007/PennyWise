// --- BUDGET MARGIN ALARM LOGIC ---

// Configuration
const currentSpend = 18500; // Static value for demo (Current Monthly Spend)

// DOM Elements
const slider = document.getElementById('marginSlider');
const marginValueText = document.getElementById('marginValue');
const limitLine = document.getElementById('limitLine');
const budgetCard = document.getElementById('budgetCard');
const budgetStatus = document.getElementById('budgetStatus');

// Initialize
updateBudgetVisuals(slider.value);

// Event Listener for Slider Drag
slider.addEventListener('input', (e) => {
    updateBudgetVisuals(e.target.value);
});

function updateBudgetVisuals(limit) {
    // 1. Update text
    marginValueText.innerText = `₹${parseInt(limit).toLocaleString()}`;
    
    // 2. Move the visual line
    // Calculate percentage position based on fixed max width of meter (e.g., 25000 scale)
    // For demo: max bar represents 30,000. 
    let percentage = (limit / 30000) * 100;
    if(percentage > 100) percentage = 100;
    limitLine.style.left = `${percentage}%`;

    // 3. CHECK ALARM CONDITION
    // If Current Spend > User Set Limit
    if (currentSpend > limit) {
        // Trigger ALARM State
        budgetCard.classList.add('alarm-active');
        budgetStatus.innerText = "OVER BUDGET";
        budgetStatus.style.color = "#ff4b1f";
        budgetStatus.style.background = "rgba(255, 75, 31, 0.2)";
    } else {
        // Safe State
        budgetCard.classList.remove('alarm-active');
        budgetStatus.innerText = "Safe";
        budgetStatus.style.color = "#00e676";
        budgetStatus.style.background = "rgba(0, 230, 118, 0.2)";
    }
}

// --- AUTO SAVER BUTTON ---
function activateSaver() {
    const amt = document.getElementById('saveAmount').value;
    const btn = document.querySelector('.btn-action');
    
    if(amt) {
        btn.innerText = `✅ Auto-Saving ₹${amt}...`;
        btn.style.background = "#00e676";
        btn.style.color = "#000";
        setTimeout(() => {
            btn.innerText = "Update Plan";
            btn.style.background = "white";
        }, 2000);
    } else {
        alert("Please enter an amount first!");
    }
}

