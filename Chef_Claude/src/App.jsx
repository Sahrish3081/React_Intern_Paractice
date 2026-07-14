import { useState } from 'react'
import Header from "./components/Header";
import './index.css'
import chefImg from '@/assets/images.png'

// export default function App() {

//   /**
//      * Challenge: Update our app so that when the user enters a
//      * new ingredient and submits the form, it adds that new
//      * ingredient to our list!
//      */

//     const [ingredients,setIngredients] =useState([]);


//     const ingredientsListItems = ingredients.map(ingredient => (
//         <li key={ingredient}>{ingredient}</li>
//     ))

//     function handleSubmit(formData) {
//         /**
//          * Like before, don't worry about this FormData stuff yet.
//          * Just use the newIngredient below to help you finish the
//          * challenge.
//          */
//         // event.preventDefault()
//         // const formData = new FormData(event.currentTarget)
//         const newIngredient = formData.get("ingredient")
//         setIngredients(preIngredient =>[...preIngredient ,newIngredient])
//     }
//   return (
//   <>
//  <Header/>
//     <main>
//             <form action={handleSubmit}className="add-ingredient-form">
//                 <input
//                     type="text"
//                     placeholder="e.g. oregano"
//                     aria-label="Add ingredient"
//                     name="ingredient"
//                 />
//                 <button>Add ingredient</button>
//             </form>
//             <ul>
//                 {ingredientsListItems}
//             </ul>
//         </main>
//   </>
//   )
// }



// export default function App() {
//     const [contact, setContact] = useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (212) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
//     /**
//      * Challenge: Fill in the values in the markup
//      * using the properties of our state object above
//      * (Ignore `isFavorite` for now)
//      */

//     function toggleFavorite() {
//     setContact(prevContact => ({
//         ...prevContact,
//         isFavorite: !prevContact.isFavorite
//     }))
// }
//     return (
//         <main>
//             <article className="card">
//                  <img
//                     src={chefImg}
//                     className="avatar"
//                     alt="User profile picture of John Doe"
//                 />
//                 <div className="info">
//                     <button
//                         onClick={toggleFavorite}
//                         aria-pressed={false}
//                        className={`favorite-button ${
//     contact.isFavorite ? "favorite" : ""
// }`}
//                     >
                       
//                     </button>
//                     <h2 className="name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="contact">{contact.phone}</p>
//                     <p className="contact">{contact.email}</p>
//                 </div>

//             </article>
//         </main>
//     )
//   }
// 
export default function App(){

function signup(formdata){
  // const email=formdata.get("email");
  // const password=formdata.get("password");
  // const employmentStatus=formdata.get("employmentStatus");

  //   console.log(email);
  //   console.log(password);
  //   console.log(employmentStatus);
  const fruits=formdata.getAll("fruits")/* return an array of fruits because checkbox select more then one */
  //  console.log(fruits);
  // console.log(Object.fromEntries(formdata))
  const data=Object.fromEntries(formdata);
  const AllData={
    ...data,
    fruits
  }
  console.log(AllData)
   }
   return(
    <>
    <section>
     <h1>Sign Up from</h1>
       <form action={signup}>
            <label htmlFor="email">Email:
              <br />
             <input type="email" id="email" placeholder='jon@gamil.com'  name='email'/>
            </label>
             <br />
            <label htmlFor="password">Password:
               <br />
               <input type="password" id='password' placeholder='password' name='password' />
             </label>
             <label htmlFor='discription'>
              <textarea name="discription" id="discription" defaultValue="Write something about here:"></textarea>
             <br/></label>
             <br />
             <fieldset>
              <legend>Employment Status:</legend>
              
              <label>
                <input type="radio" name='employmentStatus' value="Employee" />Employee
              </label>
              <label >
                <input type="radio" name='employmentStatus' value="Unemployed" />Unemployed
              </label>
              <label>
                <input   type="radio" name='employmentStatus'  value="Student"/>Student
              </label>
             </fieldset>
             <br />
             <fieldset>
  <legend>Select Your Favorite Fruits:</legend>

  <label>
    <input  type="checkbox" name="fruits" value="Apple" /> Apple
  </label>
<label>
    <input type="checkbox" name="fruits" value="Mango"/>Mango
  </label>

  <label>
    <input  type="checkbox" name="fruits" value="Banana"/> Banana
  </label>


  <label>
    <input type="checkbox" name="fruits" value="Orange"/> Orange
  </label>

<label>
    <input type="checkbox" name="fruits" value="Grapes"/>Grapes
  </label>
</fieldset>
<br />
<fieldset>
  <legend>Favorite Food:</legend>

  <label htmlFor="favoriteFood">
    Choose your favorite food:
  </label>

  <br />

  <select id="favoriteFood" name="favoriteFood" defaultValue="">
    <option value="">-- Select a Food --</option>
    <option value="Biryani">Biryani</option>
    <option value="Pizza">Pizza</option>
    <option value="Burger">Burger</option>
    <option value="Pasta">Pasta</option>
    <option value="Karahi">Karahi</option>
    <option value="Nihari">Nihari</option>
    <option value="BBQ">BBQ</option>
    <option value="Fries">Fries</option>
  </select>
</fieldset>
         <button>Submit</button>
      </form>
     </section>
     </>
   ) }