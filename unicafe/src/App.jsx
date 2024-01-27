import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const propsit= {good, neutral, bad, all, average}

  const handleGoodClick = () => {
    setGood(good+1);
    setAll(all+1);
    setAverage(average+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1);
    setAll(all+1);
    setAverage(average)
  }

  const handleBadClick = () => {
    setBad(bad+1);
    setAll(all+1);
    setAverage(average-1)
  }


  return (
    <div>
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={handleGoodClick}>Hyvä</button>
      <button onClick={handleNeutralClick}>Neutraali</button>
      <button onClick={handleBadClick}>Huono</button>
    </div> 
    
   
    {
    all >= 1 ? ( 
    <div>
    <h1>statistiikka</h1>
    <table>
    <Statistics propsit={propsit} /> 
    </table>  
    </div>
    ): ("Palautetta ei ole vielä annettu")
   }
   </div>
  
  )
}

const Statistics = (props) => {
  
  const {propsit}=props;
  const {good, neutral, bad, all, average} = propsit;


  return (
    <>
    <tbody>
    <StatisticLine text="Hyviä palautteita" value={good} />
    <StatisticLine text="Neutraaleja palautteita" value={neutral} />
    <StatisticLine text="Huonoja palautteita" value={bad} />
    <StatisticLine text="Palautemäärä" value={all} />
    <StatisticLine text="Palautteiden keskiarvo" value={isNaN(average / all) ? 0 : (average / all) } />
    <StatisticLine text="Positiivisia" value={isNaN(good / all *100) ? 0 : (good / all *100) +"%"} />
    </tbody>
    </>
  )
}

const StatisticLine = (props) => {

  return(
    <tr>
      <td>{props.text}</td>
       <td>{props.value}</td>
    </tr>

  )
}

export default App