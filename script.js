const selectedOptions = {
  normal: false,
  blind: false,
  deaf: false,
  mute: false
};

function toggleOption(type) {
  // If user selects something while 'normal' is selected
  if (type !== "normal" && selectedOptions.normal) {
    selectedOptions.normal = false;
    document.getElementById("normal").classList.remove("selected");
  }

  // If user clicks on 'normal'
  if (type === "normal") {
    const isNowSelected = !selectedOptions.normal;
    selectedOptions.normal = isNowSelected;

    document.getElementById("normal").classList.toggle("selected", isNowSelected);

    // Unselect all others if normal is selected
    if (isNowSelected) {
      ["blind", "deaf", "mute"].forEach(opt => {
        selectedOptions[opt] = false;
        document.getElementById(opt).classList.remove("selected");
      });
    }
    return;
  }

  // Toggle selection
  selectedOptions[type] = !selectedOptions[type];
  document.getElementById(type).classList.toggle("selected");
}

function submitSelection() {
  const selected = Object.keys(selectedOptions).filter(key => selectedOptions[key]);

  if (selected.length === 0) {
    alert("⚠ Please select at least one option.");
  } else {
    localStorage.setItem("disabilities", JSON.stringify(selected));
    window.location.href = "learning.html";
  }
}
