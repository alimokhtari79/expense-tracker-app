import { useState } from 'react';
import AddForm from '../AddForm/AddForm';
import { IoArrowUp, IoArrowDown } from 'react-icons/io5';
import style from './OverView.module.css';

const OverView = ({ expense, income, addTransaction }) => {
	const [isShow, setIsShow] = useState(false);
	return (
		<div className={style.overViewContainer}>
			<div className={style.overViewUp}>
				<div>
					<p className={style.balance}>Balance : {income - expense}</p>
				</div>
				<div>
					<button
						className={style.showForm_btn}
						onClick={() => setIsShow((prevState) => !prevState)}
					>
						{isShow ? 'close' : 'Add'}
					</button>
				</div>
			</div>

			<div className={style.overViewDown}>
				<div className={`${style.overViewDown_expenseAndIncome} ${style.overViewDown_Income}`}>
					<div className={style.expenseAndIncome_up}>
						<p>Income</p>
						<div
							className={`${style.expenseAndIncome_icon} ${style.Income_icon}`}
						>
							<IoArrowUp />
						</div>
					</div>
					<div>{income}</div>
				</div>

				<div className={style.overViewDown_expenseAndIncome}>
					<div className={style.expenseAndIncome_up}>
						<p>Expense</p>
						<div
							className={`${style.expenseAndIncome_icon} ${style.expense_icon}`}
						>
							<IoArrowDown />
						</div>
					</div>
					<div>{expense}</div>
				</div>
			</div>
			{isShow && <AddForm addTransaction={addTransaction} />}
		</div>
	);
};

export default OverView;
