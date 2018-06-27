import React, { Component } from 'react';
import './LandingPage.css';
import NavBar from './components/NavBar';
import RecipeCard from './components/RecipeCard';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { saveRecipe, updateRecipe } from './components/config/AuthHelpers';
import { rebase }from './components/config/Fire';
import RecipeForm from './components/forms/RecipeForm';


// Accepts forms as props from App.js
export default class LandingPage extends Component{
    
    state = {
        user: {},
        cardView: true,
        recipes: [],
        
        loading: true,
    }
  
    componentDidMount(){
        const stored = sessionStorage.getItem('user');
        console.log("Stored:", stored);
        
        if (stored){
            const parseDB = JSON.parse(stored);
            console.log("parseDB", parseDB);
            this.setState({
                user: parseDB
            })
        }
    }

    openCreateRecipe = () => {
        this.setState({
            cardView: false,
        })
    }

    createNewRecipe =(recipeObj)=> {
        console.log("Wha it recipeObj", recipeObj)
        this.handleAddRecipe(recipeObj);
       
    }

    saveUpdate = () => {
        this.ref = rebase.syncState('userRecipe', {
            context: this,
            state: 'recipes',
            asArray: true,
            then() {
              this.setState({ loading: false });
            }
        })
      }

      handleAddRecipe = (newRecipe) => {
          console.log("what is handleAddRecipe", newRecipe)
          var newArray = this.state.recipes.concat(newRecipe)
        this.setState({
            recipes: newArray
          }, this.checkState(newRecipe));
        }

        // Ultility function to check state
        checkState = (newRecipe) => {
            console.log("what is the state", this.state)
            saveRecipe(this.state.user, newRecipe);
        this.setState({
            cardView: true,
        });
        }
      
      handleRemoveRecipe = (index) => {
          updateRecipe(index);
          const newRecipeItem = this.state.recipes;
          newRecipeItem.splice(index, 1);
          this.setState({
              recipes: newRecipeItem
          });
      }

    changeViews = () => {

        if(this.state.cardView){
            
            return(
                <div className="LandingPage-Display">
                    <h1>My Recipe Collection</h1>
                    <a className="Btn-Create" onClick={this.openCreateRecipe}> + Create New Recipe </a>
                    <AllCards recipes={this.state.recipes} />
                   
                </div>
            )
        }
        else{
            return(
                <div className="LandingPage-Display">
                        <h1>My Recipe Collection</h1>
                        <a className="Btn-Create" onClick={this.openCreateRecipe} >+ Create New Recipe</a>
                        <RecipeForm createNewRecipe={this.createNewRecipe} 
                        />
                     </div>
            )
        }
    }


    render() {
        return(
            <div>
                <NavBar />

                {this.changeViews()}

                {/* <h1>Put user stuff here</h1>
                <AllCards recipes={this.state.recipes} />
            
            <h2> Recipe collection</h2> */}
            {/* <LandingLogin forms={this.props.forms} /> */}
            </div>
        )
    }

}

class AllCards extends Component{
    render(){
    const cards = this.props.recipes.map((recipe, index)=>{
        console.log("what is recipe", recipe);
        return(
        <RecipeCard
            key={index}
            title = {recipe.title}
            image = {recipe.image}
            source= {recipe.source}
            category = {recipe.category}
            subcategory={recipe.subcategory}
            rating = {recipe.rating}
            onChange={this.saveUpdate}
            recipe= {recipe}
        />
    )
    });
    

    return(
        <div>
        {cards}
        </div>
    )
    }
}
    