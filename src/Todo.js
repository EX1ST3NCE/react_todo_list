import React, { useState } from 'react';
import './Todo.css';
import TodoItems from './TodoItems';

const Todo = () => {
	const [input, setInput] = useState('');
	const [listItem, setListItem] = useState([]);

	const inputText = (e) => {
		setInput(e.target.value);
	};

	const addTodo = () => {
		// If string is empty, todo won't be added in the list
		if (input !== '') {
			setListItem((prevItem) => {
				return [...prevItem, input];
			});
		}

		setInput('');
	};

	const clear = () => {
		setListItem([]);
	};

	return (
		<>
			<div className='row'>
				<div className='col s8 offset-s2 m6 offset-m3 l4 offset-l4'>
					<div className='card blue-grey darken-1 z-depth-4'>
						<div className='card-content white-text'>
							<div className='card-title center-align'>Todo List</div>
							<div className='input-field'>
								<input
									placeholder='Enter the Todo'
									id='todo'
									type='text'
									className='validate col l10 offset-l1 m6 offset-m2 s5 offset-s2'
									value={input}
									onChange={inputText}
								/>
								<button className='btn-floating btn-large waves-effect waves-light red hoverable insert'>
									<i className='material-icons' onClick={addTodo}>
										insert_comment
									</i>
								</button>
								<ul>
									{listItem.map((item, index) => {
										return <TodoItems key={index} items={item} />;
									})}
								</ul>
							</div>
							<div className='clear'>
								<button onClick={clear}>Clear All</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Todo;
