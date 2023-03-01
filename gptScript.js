function calculatePrice() {
    // Get the input and multiplier values
    const input = document.getElementById("input").value;
    const multiplier = document.querySelector('input[name="multiplier"]:checked').value;
  
    // Calculate the price
    const price = input / 750 * multiplier;
  
    // Update the output field
    const output = document.getElementById("price");
    output.textContent = "$" + price.toFixed(4);

    // Update ##
    const words = document.getElementById("words");
    words.textContent = input;
  }
  