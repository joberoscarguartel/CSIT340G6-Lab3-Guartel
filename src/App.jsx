const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part.name} - {props.part.units} units</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      <strong>
        Total units: {props.part1.units + props.part2.units + props.part3.units}
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
  const course = 'CSIT340'
  const part1 = {
    name: 'CSIT327',
    units: 3,
  }
  const part2 = {
    name: 'CSIT340',
    units: 3,
  }
  const part3 = {
    name: 'CSIT321',
    units: 3,
  }
  const fullName = 'Jober Oscar F. Guartel'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <main>
      <Header course={course} />
      <h2>My subjects</h2>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </main>
  )
}

export default App
