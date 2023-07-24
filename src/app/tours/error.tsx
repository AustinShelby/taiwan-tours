"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.log(error);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <pre>{JSON.stringify(error.message, null, 2)}</pre>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
