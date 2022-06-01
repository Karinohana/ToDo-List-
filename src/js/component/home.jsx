import React, { useEffect, useState } from "react";
import { getTodos } from "./api.js";
import { createTodo } from "./api.js";
import { updateTodo } from "./api.js";
import { deleteTodo } from "./api.js";
import { BiReset } from "react-icons/bi";

//include images into your bundl
import { Task } from "./Task.jsx";
//create your first component

const Home = () => {
	const [todoTask, settodoTask] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [api, setApi] = useState(1);
	console.log(todoTask);

	useEffect(() => {
		//getrequest//
		const fn = async () => {
			const apiTodos = await getTodos();
			settodoTask(apiTodos);
		};
		fn();
	}, []);

	/*useEffect(() => {
		//createrequest// need help with this one//
		const fn = async () => {
			await createTodo();
		};
	}, []); */

	useEffect(() => {
		/*const fn = async () => {
			await updateTodo(todoTask.map((x) => ({ label: x, done: false })));
		};
		fn(); */
		updateTodo(todoTask);
	}, [todoTask]);

	/*useEffect(() => {
		//deleterequest//
		const fn = async () => {
			await deleteTodo();
		};
		fn();
	}, [setApi]); */

	const resetAll = () => {
		settodoTask([]);
	};
	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<h1>ToDo List</h1>
				<BiReset onClick={() => resetAll(api)} />
			</div>
			<div className="row border-top border-right border-left">
				<input
					type="text"
					className="todo-input"
					placeholder={
						todoTask.length == 0 ? "No tasks, add a task" : ""
					}
					value={inputValue}
					onChange={(event) => {
						setInputValue(event.target.value);
					}}
					onKeyPress={(event) => {
						if (event.key == "Enter") {
							if (event.target.value == "") {
								alert("Please add some task's");
								return;
							}
							settodoTask((prevTask) => [
								...prevTask,
								{ label: inputValue, done: false },
							]);

							setInputValue("");
						}
					}}
				/>
			</div>
			<div className="row d-flex border-top-0 p-3 shadow">
				<ul className="list-unstyled">
					{todoTask.map((task, index) => {
						return (
							<Task
								inputTask={task.label}
								position={index}
								removeCallBack={(_removeTask) => {
									settodoTask(
										todoTask.filter((task, index) => {
											if (index != _removeTask) {
												return task;
											}
										})
									);

									//updateTodo(todoTask);//
								}}
								key={index}
							/>
						);
					})}
				</ul>
				<div className="row p-3">{`${todoTask.length} items left`}</div>
			</div>
		</div>
	);
};

export default Home;
