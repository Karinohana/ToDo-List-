export async function getTodos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/Karinohana"
	);
	const payload = await response.json();
	return payload;
}
export async function createTodo() {
	await fetch("https://assets.breatheco.de/apis/fake/todos/user/Karinohana", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify([]),
	});
}
export async function updateTodo(updatedList) {
	const update = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/Karinohana",
		{
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedList),
		}
	);
	return update;
}
export async function deleteTodo() {
	await fetch("https://assets.breatheco.de/apis/fake/todos/user/Karinohana", {
		method: "DELETE",
	});
}
