document.getElementById('income-btn').addEventListener('click', function() {
    addTransaction('Income');
});

document.getElementById('expenditure-btn').addEventListener('click', function() {
    addTransaction('Expenditure');
});

function addTransaction(type) {
    const amountInput = document.getElementById('amount');
    const descriptionInput = document.getElementById('description');
    const amount = parseFloat(amountInput.value);
    const description = descriptionInput.value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    if (description.trim() === '') {
        alert(`Please enter a description for the ${type.toLowerCase()}`);
        return;
    }

    const transactionList = document.getElementById('transaction-list');
    const newRow = document.createElement('tr');

    const date = new Date();
    const dateStr = date.toLocaleDateString();
    const timeStr = date.toLocaleTimeString();

    newRow.innerHTML = `
        <td>${type}</td>
        <td>${dateStr}</td>
        <td>${timeStr}</td>
        <td>${amount}</td>
        <td>${description}</td>
    `;
    transactionList.appendChild(newRow);

    updateTotals(type, amount);
    amountInput.value = '';
    descriptionInput.value = '';
}

function updateTotals(type, amount) {
    const incomeBox = document.getElementById('income').querySelector('span');
    const expenditureBox = document.getElementById('expenditure').querySelector('span');
    const balanceBox = document.getElementById('balance').querySelector('span');
    const savingsLossBox = document.getElementById('savings-loss').querySelector('span');

    let income = parseFloat(incomeBox.textContent);
    let expenditure = parseFloat(expenditureBox.textContent);

    if (type === 'Income') {
        income += amount;
    } else {
        expenditure += amount;
    }

    const balance = income - expenditure;
    const savingsLoss = balance >= 0 ? balance : -balance;

    incomeBox.textContent = income;
    expenditureBox.textContent = expenditure;
    balanceBox.textContent = balance;
    savingsLossBox.textContent = savingsLoss;

    if (balance < 0) {
        balanceBox.parentElement.classList.add('balance-negative');
        alert('Warning: You have insufficient balance!');
    } else {
        balanceBox.parentElement.classList.remove('balance-negative');
    }
}
