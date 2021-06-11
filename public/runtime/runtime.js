export function runtime(program) {
  const { init, update, view, done } = program;
  let running = false;
  let state = init.state;
  const signal = (message) => change(update(state, message));
  const change = (next) => {
    state = next.state;
    if (next.effect) {
      effect(signal);
    }
    view(state, signal);
  };
  const start = () => {
    running = true;
    view(state, signal);
  };
  const stop = () => {
    running = false;
    done();
  };

  const is_running = () => running;
  return { start, stop, is_running };
}
