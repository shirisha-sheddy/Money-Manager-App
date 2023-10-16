// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expenseAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs{balanceAmount}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs{incomeAmount}</p>
        </div>
      </div>
      <div className="expense-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-img"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs{expenseAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
