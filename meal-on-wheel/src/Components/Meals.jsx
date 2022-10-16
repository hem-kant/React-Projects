
import { useGlobalContext } from "../Context";
import {BsHandThumbsUp} from 'react-icons/bs';
const Meals =()=>{
    const {meals,loading,selectMeal}= useGlobalContext()
    
    if (loading) {
        return <section className="section">
          <h4>Loading...</h4>
        </section>
      }
    if (meals.length < 1) {
    return <section className="section">
        <h4>No meals matched your search term. Please try again.</h4>
    </section>
    }

    return<section className="section-center"> 
        {
            meals.map((singleMeal)=>{
                const {idMeal, strMeal: title, strMealThumb: image} = singleMeal

                console.log(singleMeal)
               return <article key={idMeal} className ="single-meal">
                <img src={image} className="img" alt="img" onClick={() => selectMeal(idMeal)}/>
                <footer>
                    <h5>
                        {title}
                    </h5>
                    <button className="like-btn"><BsHandThumbsUp/></button>
                </footer>
               </article>
            })
           
        }
    </section>
}
export default Meals;