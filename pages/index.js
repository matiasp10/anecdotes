import { useState } from 'react';

export default function Home() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  // Hooks de estado
  const [selected, setSelected] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  // Handlers
  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const handleVote = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  // Constantes
  const max = Math.max(...vote);
  const ganador = anecdotes[vote.indexOf(max)];

  return (
    <div>
      <div>
        <h1>Anecdotas</h1>
        <p>{anecdotes[selected]}</p>
        <p>Votos: {vote[selected]}</p>
      </div>
      <div>
        <button onClick={() => handleRandom(selected)}>Frase aleatoria</button>
        <button onClick={() => handleVote()}>Votar</button>
      </div>
      <div>
        <h2>Anecdota mas votada</h2>
        <p>{ganador}</p>
        <p>Con una cantidad de: {max} votos</p>
      </div>
    </div>
  );
}
