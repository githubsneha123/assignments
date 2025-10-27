const socket = io();

const loginBtn = document.getElementById('loginBtn');
const emailInput = document.getElementById('email');
const dashboard = document.getElementById('dashboard');
const subscribeBtn = document.getElementById('subscribeBtn');
const stockSelect = document.getElementById('stockSelect');
const stocksDiv = document.getElementById('stocks');
const logoutBtn = document.getElementById('logoutBtn');
const loginSection = document.getElementById('loginSection');
const userTitle = document.getElementById('userTitle');

let subscribedStocks = [];

loginBtn.onclick = () => {
  const email = emailInput.value.trim();
  if (email) {
    userTitle.innerText = `Welcome, ${email}`;
    dashboard.style.display = 'flex';
    loginSection.style.display = 'none';
  }
};

logoutBtn.onclick = () => {
  dashboard.style.display = 'none';
  loginSection.style.display = 'flex';
  emailInput.value = '';
  subscribedStocks = [];
  stocksDiv.innerHTML = '';
};

subscribeBtn.onclick = () => {
  const selectedStock = stockSelect.value;
  if (selectedStock && !subscribedStocks.includes(selectedStock)) {
    subscribedStocks.push(selectedStock);
    socket.emit('subscribe', subscribedStocks);
  }
};

socket.on('subscribed', (stocks) => {
  stocksDiv.innerHTML = '';
  stocks.forEach(stock => {
    const div = document.createElement('div');
    div.id = `stock-${stock}`;
    div.textContent = `${stock}: --`;
    stocksDiv.appendChild(div);
  });
});

socket.on('priceUpdate', (prices) => {
  subscribedStocks.forEach(stock => {
    const div = document.getElementById(`stock-${stock}`);
    if (div && prices[stock]) {
      div.textContent = `${stock}: $${prices[stock]}`;
    }
  });
});
