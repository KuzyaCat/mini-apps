'use client';

interface IReviewErrorProps {
  error: Error;
  reset: () => void;
}

export default function ReviewError({ error, reset }: IReviewErrorProps) {
  return (
    <div>
      <span>Error {error.message}</span>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
