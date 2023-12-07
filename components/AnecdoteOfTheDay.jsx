// eslint-disable-next-line react/prop-types
function AnecdoteOfTheDay({ anecdote, vote, handleSelect, handleVote }) {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdote}</p>
      <p>{vote}</p>
      <button onClick={handleSelect}>Next anecdote</button>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
}

export default AnecdoteOfTheDay;
