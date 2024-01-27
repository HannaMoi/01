const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (
    <div>
      <Header course={course.name} />
     <Content parts ={course.parts}/>
     <Total parts={course.parts} />
    </div>
  )
}
const Header = ({course}) => {
console.log("coursessa: ", course);
 return(
  <h1>{course}</h1>
 )
}

const Content = (props) => {
  const {parts} = props;
  
  console.log("part1 on: ", parts[0].name);
  
  return (
    <>
 <Part part= {parts[0].name} exercises={parts[0].exercises1} />
 <Part part= {parts[1].name} exercises={parts[1].exercises2} />
 <Part part= {parts[2].name} exercises={parts[2].exercises3} />
</>
  )
}

const Part = (props) => {


 return (
  <p>
  {props.part} {props.exercises}
</p>
 )

}

const Total = (props) => {
  const {parts} = props;

console.log(parts);

 const summa= parts[0].exercises + parts[1].exercises + parts[2].exercises;
 console.log("summa on: ",summa);
 

  return (
    <p>Number of exercises {summa}</p>
  )

}


export default App