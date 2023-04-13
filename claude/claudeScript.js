function calculatePrice() {
    // Get the input and multiplier values
    const input = document.getElementById("input").value;
    const prompt = document.getElementById("prompt").value;
    const multiplier = document.querySelector('input[name="multiplier"]:checked').value;
    const checkMultiplier = document.querySelector('input[name="multiplier"]:checked').id;
  
    // Calculate the price
    const wordsInMillionChars = 166667;
    let price;
    if (checkMultiplier == "multiplier1") {
        price = ((multiplier / wordsInMillionChars) * input) + ((0.43 / wordsInMillionChars) * (prompt * (input / 1000)));
    }
    else {
        price = ((multiplier / wordsInMillionChars) * input) + ((2.90 / wordsInMillionChars) * (prompt * (input / 1000)));
    }
  
    // Update the output field
    const output = document.getElementById("price");
    output.textContent = "$" + price.toFixed(4);

    // Update ##
    const words = document.getElementById("words");
    words.textContent = input;
  }
  