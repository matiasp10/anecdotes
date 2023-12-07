// eslint-disable-next-line react/prop-types
function AnecdoteWithMostVotes({ bestAnecdote, maxVote }) {
  return (
    <div>
      <h2>Anecdotes with most votes</h2>
      {maxVote ? (
        <div>
          <p>{bestAnecdote}</p>
          <p>has {maxVote} votes</p>
        </div>
      ) : (
        <div>
          <p>No given votes</p>
        </div>
      )}
    </div>
  );
}

export default AnecdoteWithMostVotes;
