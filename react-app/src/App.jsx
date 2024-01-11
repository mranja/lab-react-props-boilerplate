import './App.css'


const App = (props) => {
console.log(props.prop)
const data = props.prop
return (

<div>
  <h1>Kalvium Gallery</h1>
  <div id='flex'>
  {
    data.map((item) => {
      return <img src={item.img}/>
    })
  }

  </div>


</div>


)
}

export default App