import { html } from "../runtime/MainProgram.js";
export function Workbench() {
  const init = { state: { todos: ["make a list"] } };

  const update = (state, message) => {
    console.log(state, message);
    switch (message.type) {
      case "todo/add":
        state.todos.push(message.payload);
        return { state };
      case "todo/delete":
        console.log(state.todos, message.payload);
        state.todos = state.todos.filter((x) => x != message.payload);
        return { state };
    }
  };
  const submitForm = (signal) =>
    (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      data.get("todo");
      signal({ type: "todo/add", payload: data.get("todo") });
    };
  const deleteTodo = (payload, signal) => {
    return (e) => {
      console.log(payload);
      signal({ type: "todo/delete", payload });
    };
  };
  const view = (state, signal) => {
    return html`<div>
    <ul>
      ${
      state.todos.map((todo) =>
        html`<li><span>${todo}</span><button @click=${
          deleteTodo(todo, signal)
        }>X</button></li>`
      )
    }
    </ul>
    <form @submit=${submitForm(signal)}>
      <input type="text" name="todo" placeholder="write an item...">
      <button type="submit">add item</button>
    </form>
  </div>`;
  };
  return { init, update, view };
}
