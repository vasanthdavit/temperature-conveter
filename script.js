function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var convertFrom = document.getElementById("convertFrom").value;
    var convertTo = document.getElementById("convertTo").value;
  
    var convertedTemperature;
  
    if (convertFrom === "Celsius") {
      if (convertTo === "Fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
      } else if (convertTo === "Kelvin") {
        convertedTemperature = temperature + 273.15;
      }
    } else if (convertFrom === "Fahrenheit") {
      if (convertTo === "Celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
      } else if (convertTo === "Kelvin") {
        convertedTemperature = (temperature + 459.67) * 5/9;
      }
    } else if (convertFrom === "Kelvin") {
      if (convertTo === "Celsius") {
        convertedTemperature = temperature - 273.15;
      } else if (convertTo === "Fahrenheit") {
        convertedTemperature = (temperature * 9/5) - 459.67;
      }
    }
  
    var resultElement = document.getElementById("result");
    var resultText = "Converted temperature: " + convertedTemperature.toFixed(2) + " ";
  
    if (convertedTemperature < 10) {
      resultText += "❄️ Cold";
      document.body.style.backgroundImage = "url('cold.webp')";
    } else if (convertedTemperature >= 96 && convertedTemperature <= 120) {
      resultText += "☀️ Normal";
      document.body.style.backgroundImage = "url('nor.jpg')";
    } else {
      resultText += "🔥 Hot";
      document.body.style.backgroundImage = "url('hot.avif')";
    }
  
    resultElement.textContent = resultText;
    resultElement.style.animation = "none";
    void resultElement.offsetWidth;
    resultElement.style.animation = "fade-in 1s ease-in-out";
  }