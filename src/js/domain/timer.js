import {tick} from "../actions";

const Timer = dispatch => {
  const start = () => {
    let previousTick = Date.now()
    return setInterval(
      () => {
        let now = Date.now();
        const delta = now - previousTick
        previousTick = now
        return dispatch(tick(delta));
      },
      100
    )
  };

  return {start}
};

export default Timer