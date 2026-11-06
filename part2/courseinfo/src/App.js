const Header = ({ data }) => {
  return <h1>{data.name}</h1>
}

const ContentPart = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ data }) => {
  return (
    <div>
      {data.parts.map((part) => (
        <ContentPart
          key={part.id}
          name={part.name}
          exercises={part.exercises}
        />
      ))}
    </div>
  )
}

const Total = ({ data }) => {
  const total = data.parts.reduce((sum, elem) => sum + elem.exercises, 0)
  return <p>Number of exercises {total}</p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header data={course} />
      <Content data={course} />
      <Total data={course} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        id: 1,
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        id: 2,
        exercises: 7,
      },
      {
        name: 'State of a component',
        id: 3,
        exercises: 14,
      },
    ],
  }

  return <Course course={course} />
}

export default App
