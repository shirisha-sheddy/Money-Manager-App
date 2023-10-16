// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeletetransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <div>
        <button
          type="button"
          onClick={onDeletetransaction}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
