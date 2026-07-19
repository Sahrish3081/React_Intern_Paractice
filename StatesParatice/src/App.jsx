import { useState } from 'react'
import Count from "./assets/components/Count"
import CheckRender from './assets/components/CheckRender'
import './App.css'
function App() {
  
  const [count, setCount] = useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
//    const [myFavoriteThings, setMyFavoriteThings] = useState([])
  
//   const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
//   "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
//   const thingsElements = myFavoriteThings.map(thing => <p key={ thing}>{thing}</p>)
//  function addFavThing(){
//   // setMyFavoriteThings(prevThing  =>[prevThing ,"Test"])
//   setMyFavoriteThings(prething =>[
//        ...prething,
//     allFavoriteThings[prething.length]
//   ])
//  } 

//   const [isImportant, setIsImportant]=useState("click")
//   function clickHandles(){
//     setIsImportant("definitely");

//   }

//   let isGoing=true;
//   let value=isGoing===true ? "yes" : "no";
  return (
   <>
   <h1>Learn About States</h1>
  {/* <CheckRender />

   {/* <button
        className='btn'
        onClick={() => {
          setIncrCount(incrementCount + 1);
        }}
      >
        {incrementCount}
      </button>
       <button
        className='btn'
        onClick={() => {
          setDecrCount(decrementCount - 1);
        }}
      >
        {decrementCount}
      </button> */}

     <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>

               
                  <Count number={count}/>
                                 

                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
    {/* <button className='btn'
     onClick={clickHandles}>{isImportant} </button>

<button>{value}</button> 
<button className='btn' onClick={addFavThing}>add item
</button>

 <section>
  <p>{thingsElements}</p>
 </section> */}
   </>
  )
}
 
export default App
