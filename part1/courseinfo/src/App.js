const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.data[0].name} exercises={props.data[0].exercises} />
      <Part name={props.data[1].name} exercises={props.data[1].exercises} />
      <Part name={props.data[2].name} exercises={props.data[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  const total = props.data.reduce((sum, elem) => sum + elem.exercises, 0)
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name : 'Fundamentals of React',
      exercises : 10
    },
    {
      name : 'Using props to pass data',
      exercises : 7
    },
    {
      name : 'State of a component',
      exercises : 14
    }
  ]
  
  return (
    <div>
      <Header course={course} />
      <Content data={parts} />
      <Total data={parts} />
    </div>
  )
}

export default App