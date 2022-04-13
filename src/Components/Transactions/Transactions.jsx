import Transaction from '../Transaction/Transaction';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import style from './Transactions.module.css';
import FilterTransactions from '../FilterTransactions/FilterTransactions';

const Transactions = ({
	transActions,
	onDelete,
	selectedHandler,
	selectedOptions,
}) => {
	return (
		<section className={style.Transactions}>
			<div className={style.transaction_header}>
				<div>
					<h3 style={{ letterSpacing: 2, fontSize: 18 }}>Transactions</h3>
				</div>
				<FilterTransactions
					transActions={transActions}
					selectedHandler={selectedHandler}
					selectedOptions={selectedOptions}
				/>
			</div>
			<SimpleBar style={{ maxHeight: 200 }}>
				{transActions.length === 0 ? (
					<p className={style.addTransaction}>Add Some Transaction</p>
				) : (
					transActions.map((transaction) => {
						return (
							<Transaction
								key={transaction.id}
								transaction={transaction}
								onDelete={() => onDelete(transaction.id)}
							/>
						);
					})
				)}
			</SimpleBar>
		</section>
	);
};

export default Transactions;
