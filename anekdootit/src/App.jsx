import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  
  const mostVotes = votes.indexOf(Math.max(...votes));


  console.log("Eniten ääniä lkm: ", Math.max(...votes));
  console.log("Eniten ääniä kenellä: ", anecdotes[mostVotes]);

  

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleClick= () => {
   const newVotes = [...votes];
    newVotes[selected] +=1;
    console.log("newVotes: ", newVotes)
    setVotes(newVotes)
  }



  return (
    <div>
       <h3>Päivän anekdootit</h3>
      {anecdotes[selected]}
      <br></br>
      <button onClick={nextAnecdote}>Seuraava anekdootti</button>
      <button onClick={handleClick}>Äänestä</button>
      <p>Valitulla anekdootilla on ääniä nyt {votes[selected]}</p>
      <div>
        <h3>Eniten ääniä saanut anekdootti</h3>
        <p>{anecdotes[mostVotes]}</p>
      </div>
    </div>
  )
}

export default App