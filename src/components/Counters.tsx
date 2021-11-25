import Counter from "./Counter";

const stopValues = [4, 2, 5];

const Counters = () => (
    <>
    {stopValues.map((stopValue) => (
        <Counter key={stopValue} stopValue={stopValue} />
      ))}
    </>
)

export default Counters;
