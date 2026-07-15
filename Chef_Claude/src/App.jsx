import { useState } from 'react'
// import Header from "./components/Header";
import './index.css'
import Star from "./components/Star";
import chefImg from '@/assets/images.png'
/*  
export default function App() {

  
    //  * Challenge: Update our app so that when the user enters a
    //  * new ingredient and submits the form, it adds that new
    //  * ingredient to our list!
     

    
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [recipeShown, setRecipeShown] = useState(false)
     function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }
  
  return (
  <>
 <Header/>
  <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div>}
            </section>}
          //  Paste recipeCode.md contents here 
            {
              recipeShown && <section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>
            }
            
        </main>
   </>
   )
 }

*/

export default function App() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
 function toggleFavorite() {
    setContact(prevContact => ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }))
}

    return (
        <main>
            <article className="card">
                 <img
                    src={chefImg}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                   <Star isFilled={contact.isFavorite} 
                          handleClick={toggleFavorite}/>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>     
               </main> 
    )
  } 

// export default function App(){

// function signup(formdata){
  // const email=formdata.get("email");
  // const password=formdata.get("password");
  // const employmentStatus=formdata.get("employmentStatus");

  //   console.log(email);
  //   console.log(password);
  //   console.log(employmentStatus);
  // const fruits=formdata.getAll("fruits")/* return an array of fruits because checkbox select more then one */
  //  console.log(fruits);
  // console.log(Object.fromEntries(formdata))
  /*  const data=Object.fromEntries(formdata);
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
    ) } */