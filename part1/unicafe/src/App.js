import { useState } from 'react'

const Header = ({text}) => {
  return <h1>{text}</h1>
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Buttons = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={onGood} text="good" />
      <Button onClick={onNeutral} text="neutral" />
      <Button onClick={onBad} text="bad" />
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return <p>{text} {value}</p>
}

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <Header text="statistics" />
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Buttons
        onGood={() => setGood(good + 1)}
        onNeutral={() => setNeutral(neutral + 1)}
        onBad={() => setBad(bad + 1)}
      />
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App