import React, { useState } from 'react';
import './TodoItems.css';

const TodoItems = ({ items }) => {
	const [line, setLine] = useState(false);

	const cutIt = () => {
		setLine(true);
	};
	return (
		<li>
			<span className='material-icons delete' onClick={cutIt}>
				delete_forever
			</span>
			<span
				style={{ textDecoration: line ? 'line-through' : 'none' }}
				className='list-item'
			>
				{items}
			</span>
		</li>
	);
};

export default TodoItems;
