const Modal = {
  open() {
    //Abrir o Modal
    //Adicionar a Class active ao Modal
    document
      .querySelector('.modal-overlay')
      .classList // na lista de classe dele adicionamos
      .add('active')
  },
  close() {
    document
      .querySelector('.modal-overlay')
      .classList // na lista de classe dele removemos
      .remove('active')
  }
}


const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50001,
    date: '23/01/2021',
  },
  {
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2021',
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20012,
    date: '23/01/2021',
  },
  {
    id: 4,
    description: 'App',
    amount: 200000,
    date: '23/01/2021',
  },
]

// Eu preciso somar as entradas
// depois eu preciso somar as saídas e 
// remover das entradas o valor das saídas
// assim, eu terei o total

const Transaction = {
  incomes() {
    let income = 0
    // pegar todas as transações
    // para cada transação,
    transactions.forEach(transaction => { //poderia ter colocado qualquer nome no parâmetro
      // se ela for maior que zero
      if (transaction.amount > 0) {
        // soma a uma variável e retornar a variável
        income += income + transaction.amount
      }
    })
    return income
  },
  expenses() {
    let expenses = 0
    transactions.forEach(transaction => {
      if (transaction.amount < 0) {
        expenses += expenses + transaction.amount
      }
    })
    return expenses
  },

  total() {
    return Transaction.incomes() + Transaction.expenses()
  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'), // criando um atributo/variável/uma propriedade desse método

  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr) // adicionando a funcionalidade appendChild
  },

  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense"

    const amount = Utils.formatCurrency(transaction.amount)

    const html = `
    <tr>
      <td class="description">${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover transação" />
      </td>
    </tr>
    `
    return html
  },

  updateBalance() {
    document
      .getElementById('incomeDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.incomes())
    document
      .getElementById('expenseDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.expenses())
    document
      .getElementById('totalDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.total())
  }
}

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : ""

    value = String(value).replace(/\D/g, "")

    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
    return signal + value
  }
}

transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction)
}) // forEach funciona para objetos do tipo array. Para cada elemento ele vai executar uma funcionalidade/função

DOM.updateBalance()