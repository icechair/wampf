import { render } from "https://unpkg.com/lit-html@1.4.1/lit-html.js";
export { html } from "https://unpkg.com/lit-html@1.4.1/lit-html.js";
export function MainProgram(program, target) {
  const { init, update, view } = program;
  return {
    init,
    update,
    view(state, signal) {
      render(view(state, signal), target);
    },
  };
}
