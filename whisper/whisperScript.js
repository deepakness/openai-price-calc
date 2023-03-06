function calculatePrice() {
    // Get the input and multiplier values
    const input = document.getElementById("input").value;
  
    // Calculate the price
    const price = input * 0.006;
  
    // Update the output field
    const output = document.getElementById("price");
    output.textContent = "$" + price.toFixed(4);

    // Update ##
    const words = document.getElementById("mins");
    words.textContent = input;
  }
  