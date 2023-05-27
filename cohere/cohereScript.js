function calculatePrice() {
    // Get the input and multiplier values
    const input = document.getElementById("input").value;
    const multiplier = document.querySelector('input[name="multiplier"]:checked').value;
    const checkMultiplier = document.querySelector('input[name="multiplier"]:checked').id;
  
    // Calculate the price
    let price;
    if (checkMultiplier == "multiplier1") {
        price = input * multiplier;
    }
    else if (checkMultiplier == "multiplier2") {
        price = input * multiplier;
    }
    else if (checkMultiplier == "multiplier3") {
        price = input * multiplier;
    }
    else if (checkMultiplier == "multiplier4") {
        price = input * multiplier;
    }
    else if (checkMultiplier == "multiplier5") {
        price = input * multiplier;
    }
    else {
        price = "Error!";
    }
  
    // Update the label text
    let labelText;
    if (checkMultiplier == "multiplier1") {
        labelText = "embeddings";
    }
    else if (checkMultiplier == "multiplier2") {
        labelText = "generation units";
    }
    else if (checkMultiplier == "multiplier3") {
        labelText = "classifications";
    }
    else if (checkMultiplier == "multiplier4") {
        labelText = "summarization units";
    }
    else if (checkMultiplier == "multiplier5") {
        labelText = "search units";
    }

    const updateLabel = document.getElementById("updateLabel");
    updateLabel.textContent = labelText;

    // Update units
    const updateUnits = document.getElementById("updateUnits");
    updateUnits.textContent = labelText;

    // Update the output field
    const output = document.getElementById("price");
    output.textContent = "$" + price.toFixed(4);

    // Update words
    const words = document.getElementById("words");
    words.textContent = input;
  }
  