import { useCounter } from "../context/counter";

let count2 = 0;

const Counter = (props: { stopValue?: number }) => {
  console.log("render");

  const { count, incrementCount } = useCounter();

  const handleClick = () => {
    count2 += 1;
    if (!props.stopValue || (props.stopValue && count < props.stopValue)) {
      incrementCount();
    }
    console.log(`Count: ${count}, count2: ${count2}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
