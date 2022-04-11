import Transaction from '../Transaction/Transaction';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import style from './Transactions.module.css';

const Transactions = ({ transActions }) => {
	return (
		<section className={style.Transactions}>
			<h3 style={{ letterSpacing: 2, fontSize: 18 }}>Transactions</h3>
			<SimpleBar style={{ maxHeight: 200 }}>
				{transActions.length === 0 ? (
					<p className={style.addTransaction}>Add Some Transaction</p>
				) : (
					transActions.map((transaction) => {
						return (
							<Transaction key={transaction.id} transaction={transaction} />
						);
					})
				)}
			</SimpleBar>
		</section>
	);
};

export default Transactions;
