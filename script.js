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
    amount: -50000,
    date: '23/01/2021',
  },
  {
    id: 2,
    description: 'Website',
    amount: -500000,
    date: '23/01/2021',
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021',
  },
]

// Eu preciso somar as entradas
// depois eu preciso somar as saídas e 
// remover das entradas o valor das saídas
// assim, eu terei o total

const Transaction = {
  incomes() {
    // somar as entradas
  },
  expenses() {
    // somar as saídas
  },

  total() {
    // entradas - saídas
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
    const html = `
    <tr>
      <td class="description">${transaction.description}</td>
      <td class="expence">${transaction.amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover transação" />
      </td>
    </tr>
    `
    return html
  }
}

transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction)
}) // forEach funciona para objetos do tipo array. Para cada elemento ele vai executar uma funcionalidade/função