const API_KEY = 'd2c493296b859b77d71cd441';


async function initChart() {
    await loadRates();
}


async function loadRates() {
    let url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;
    let response = await fetch(url);
    let currentRates = await response.json();
    console.log(currentRates['conversion_rates']['USD']);
}



const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});