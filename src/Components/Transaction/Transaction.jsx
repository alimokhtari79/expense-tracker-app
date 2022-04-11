import style from './Transaction.module.css';

const Transaction = ({ transaction }) => {
	return (
		<div className={style.transaction}>
			<div className={style.transaction_desc}>{transaction.desc}</div>
			<div
				className={`${
					transaction.type === 'income'
						? style.transactionIncomeAmount
						: style.transactionExpenseAmount
				}`}
			>
				{`${transaction.type === 'income' ? '+' : '-'}$${transaction.amount}`}
			</div>
		</div>
	);
};

export default Transaction;
