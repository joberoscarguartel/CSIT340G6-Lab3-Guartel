const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part.name} - {props.part.units} units</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      <strong>
        Total units: {props.parts[0].units + props.parts[1].units + props.parts[2].units}
      </strong>
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      {props.fullName} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340',
    parts: [
      {
        name: 'CSIT327',
        units: 3,
      },
      {
        name: 'CSIT340',
        units: 3,
      },
      {
        name: 'CSIT321',
        units: 3,
      },
    ],
  }
  const fullName = 'Jober Oscar F. Guartel'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <main>
      <Header course={course.name} />
      <h2>My subjects</h2>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </main>
  )
}

export default App
