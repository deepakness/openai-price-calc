function calculatePrice() {
    // Get the input and multiplier values
    const input = document.getElementById("input").value;
    const prompt = document.getElementById("prompt").value;
    const multiplier = document.querySelector('input[name="multiplier"]:checked').value;
    const checkMultiplier = document.querySelector('input[name="multiplier"]:checked').id;
  
    // Calculate the price
    let price;
    if (checkMultiplier == "multiplier1") {
      price = (input / 750 * multiplier) + ((input / 1000) * (prompt / 750) * 0.03);
    } else if (checkMultiplier == "multiplier2") {
      price = (input / 750 * multiplier) + ((input / 1000) * (prompt / 750) * 0.06);
    } else {
      price = (input / 750 * multiplier) + ((input / 1000) * (prompt / 750) * multiplier);
    }
  
    // Update the output field
    const output = document.getElementById("price");
    output.textContent = "$" + price.toFixed(4);

    // Update ##
    const words = document.getElementById("words");
    words.textContent = input;
  }
  