import React, { Component } from 'react';
import './LandingPage.css';
import NavBar from './components/NavBar';
import RecipeCard from './components/RecipeCard';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { saveRecipe, auth, saveUser, login } from './components/config/AuthHelpers';
import { rebase }from './components/config/Fire';
import RecipeForm from './components/forms/RecipeForm';


// Accepts forms as props from App.js
export default class LandingPage extends Component{
    
    state = {
        user: {},
        cardView: true,
        recipes: [],
        /* Use recipes objects below for development */
        // recipes: [{
        //     uid: this.props.user.id,
        //     category:'Baking',
        //     subcategory: 'Bread',
        //     title: 'Sourdough Bread',
        //     image: 'https://d2gk7xgygi98cy.cloudfront.net/91-3-large.jpg',
        //     source: 'https://www.kingarthurflour.com/recipes/rustic-sourdough-bread-recipe',
        //     instruction: 'See website...',
        //     snapshot: '',
        //     status: 'Tested',
        //     rating: '3',
        //     level: 'Easy',
        //     serving: '8',
        //     tags: 'bread, sourdough bread, baked goods',
        //     notes: 'It was not as cruchy as I wanted. Will try again and add more time for rising.'
        // },
        // {
        //     uid: this.props.user.id,
        //     category:'Baking',
        //     subcategory: 'cookie',
        //     title: 'French Macaroons',
        //     image: 'https://www.gourmetfoodworld.com/images/Product/medium/french-almond-macaroons-french-favorites-1S-909.jpg',
        //     source: 'http://bravetart.com/recipes/macarons',
        //     instruction: 'See website...',
        //     snapshot: '',
        //     status: 'Tested',
        //     rating: '5',
        //     level: 'Medium',
        //     serving: '24 cookies',
        //     tags: 'French macaroon, macaroon, cookie, almond flour, baked goods',
        //     notes: 'It turn out beautifully!'
        // },
        // {
        //     uid: this.props.user.id,
        //     category:'Baking',
        //     subcategory: 'cookie',
        //     title: 'Vanishing Oatmeal Raisin Cookies ',
        //     image: 'http://www.quakeroats.com/images/default-source/RecipeModule/vanishing-oatmeal-raisin-cookies-related-recipe',
        //     source: 'http://www.geniuskitchen.com/recipe/vanishing-oatmeal-raisin-cookies-3180',
        //     instruction: 'See website...',
        //     snapshot: 'http://gbgeeks.com/wp-content/wverrors.php?getimage=aHR0cHM6Ly9pMS53cC5jb20vMy5icC5ibG9nc3BvdC5jb20vLVV2ZUc5VnYyRVZjL1VWU1VzYjJ0YWVJL0FBQUFBQUFBQ0IwL0VZdWN6Z0lLaUNZL3MxNjAwL2Nvb2tpZXJlY2lwZS5KUEc=',
        //     status: 'Tested',
        //     rating: '5',
        //     level: 'Easy',
        //     serving: '48 cookies',
        //     tags: 'cookie, oatmeal, oatmeal cookie, baked goods',
        //     notes: 'They are so easy to make and sell out quickly. Got to recipe for sure.'
        // }],   
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
    // saveUpdate = () =>{
    //     this.setState({
    //         edit: true,
    //     })
    // }

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
        this.ref = rebase.syncState('items', {
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
                    <AllCards recipes={this.state.recipes} saveUpdate={this.saveUpdate}/>
                   
                </div>
            )
        }
        else{
            return(
                <div className="LandingPage-Display">
                        <h1>My Recipe Collection</h1>
                        <a className="Btn-Create" onClick={this.openCreateRecipe} >+ Create New Recipe</a>
                        <RecipeForm createNewRecipe={this.createNewRecipe} saveUpdate={this.saveUpdate}
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
    