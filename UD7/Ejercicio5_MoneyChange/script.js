const url = "https://api.exchangerate.host/latest";
const baseCurrencySelect = document.getElementById("baseCurrency");
const targetCurrencySelect = document.getElementById("targetCurrency");
const amountInput = document.getElementById("amount");
const resultParagraph = document.getElementById("result");

// Cargar las monedas
const request = new XMLHttpRequest();
request.open("GET", url);
request.responseType = "json";
request.send();

request.onload = function () {
  const response = request.response;
  const rates = response.rates;
  for (const currency in rates) {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    baseCurrencySelect.appendChild(option.cloneNode(true)); // cloneNode se usa para copiar el nodo option
    targetCurrencySelect.appendChild(option);
  }
};

// Configurar el formulario para convertir al enviar
document.getElementById("currencyForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada
  const baseCurrency = baseCurrencySelect.value;
  const targetCurrency = targetCurrencySelect.value;
  const amount = amountInput.value;

  const requestConvert = new XMLHttpRequest();
  requestConvert.open(
    "GET",
    `${url}?base=${baseCurrency}&symbols=${targetCurrency}`
  );
  requestConvert.responseType = "json";
  requestConvert.send();

  requestConvert.onload = function () {
    const response = requestConvert.response;
    const rate = response.rates[targetCurrency];
    const result = rate * amount;
    resultParagraph.textContent = `${amount} ${baseCurrency} es igual a ${result.toFixed(
      2
    )} ${targetCurrency}`;
  };
});
