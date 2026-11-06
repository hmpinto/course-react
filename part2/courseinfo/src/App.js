const Header = (props) => {
  return (
    <h1>{props.data.name}</h1>
  )
}

const Content = (props) => {
  const ContentPart = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }
  
  return (
    <div>
      <ContentPart name={props.data.parts[0].name} exercises={props.data.parts[0].exercises} />
      <ContentPart name={props.data.parts[1].name} exercises={props.data.parts[1].exercises} />
      <ContentPart name={props.data.parts[2].name} exercises={props.data.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  const total = props.data.parts.reduce((sum, elem) => sum + elem.exercises, 0)
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  
  return (
    <div>
      <Header data={course} />
      <Content data={course} />
      <Total data={course} />
    </div>
  )
}

export default App