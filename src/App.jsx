const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} - {props.units} units</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} units={props.units1} />
      <Part name={props.part2} units={props.units2} />
      <Part name={props.part3} units={props.units3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      <strong>Total units: {props.units1 + props.units2 + props.units3}</strong>
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
  const course = 'CSIT340'
  const part1 = 'CSIT327'
  const units1 = 3
  const part2 = 'CSIT340'
  const units2 = 3
  const part3 = 'CSIT321'
  const units3 = 3
  const fullName = 'Jober Oscar F. Guartel'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <main>
      <Header course={course} />
      <h2>My subjects</h2>
      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />
      <Total units1={units1} units2={units2} units3={units3} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </main>
  )
}

export default App
