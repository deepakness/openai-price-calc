function calculatePrice() {
    // Get the input and multiplier values
    const input = document.getElementById("input").value;
    const prompt = document.getElementById("prompt").value;
    const multiplier = document.querySelector('input[name="multiplier"]:checked').value;
    const checkMultiplier = document.querySelector('input[name="multiplier"]:checked').id;
  
    // Calculate the price
    const inputPriceThousandTokens = multiplier * 1000 / 1000000;
    let price;
    if (checkMultiplier == "multiplier1") {
        price = (input / 750 * inputPriceThousandTokens) + ((input / 1000) * (prompt / 750) * (1.63 / 1000));
    }
    else {
        price = (input / 750 * inputPriceThousandTokens) + ((input / 1000) * (prompt / 750) * (11.02 / 1000));
    }
  
    // Update the output field
    const output = document.getElementById("price");
    output.textContent = "$" + price.toFixed(4);

    // Update ##
    const words = document.getElementById("words");
    words.textContent = input;
  }
  