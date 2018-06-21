import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import RecipeDetails from './RecipeDetails';
import UpdateRecipe from './forms/UpdateRecipe';
import '../LandingPage.css';

class RecipeCard extends Component {
    state={
        recipeDetailsOpen: false,
        updateRecipeFormOpen: false,
    }

    // want edit recipe view open
    clickEditButton = () =>{
        this.setState({
            updateRecipeFormOpen: true,
            recipeDetailsOpen: false,
        })
    }
    // want recipe detail view open
    clickCard = ()=>{
        this.setState({
            updateRecipeFormOpen: false,
            recipeDetailsOpen: true,
        })
    }
    // want recipe card view open
    closeRecipeDetails = () =>{
        this.setState({
            recipeDetailsOpen: false,
            updateRecipeFormOpen: false,
        })
    }

   // want to save updated recipe
    saveUpdate = (props) => {
        this.setState({
            edit: false,
        })
    }


    changeView = () => {
        if(this.state.recipeDetailsOpen){
            return(
            <RecipeDetails 
                recipe={this.props.recipe} 
                closeRecipeDetails={this.closeRecipeDetails} 
                clickEditButton={this.clickEditButton}
                />)

        }else if(this.state.updateRecipeFormOpen){
            return(
                <UpdateRecipe 
                recipe={this.props.recipe}
                // saveUpdate={this.saveUpdate}
                 />
            )
        }else{
            return(
            <div>
                <Card className="Card-Recipe">
                    <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardSubtitle><strong>{this.props.category}</strong>&thinsp; / &thinsp;{this.props.subcategory}</CardSubtitle>
                    </CardBody>
                    <img width="100%" src={this.props.image} alt="Recipe Card" />
                    <CardBody>
                    <CardText ><strong>Source:</strong> {this.props.source}</CardText>
                    <CardText><strong>Rating:</strong> {this.props.rating}&thinsp; / &thinsp;<strong>Status:</strong> {this.props.status}</CardText>
                    <CardText><strong>Notes:</strong> {this.props.notes} </CardText>
                    <CardLink onClick={this.clickCard} className="Card-Recipe-Link" >Recipe details</CardLink>
                    {/* <CardLink to="/components/UpdateRecipe">Edit Recipe</CardLink> */}
                    </CardBody>
                </Card>
                </div>)
        }
    }

    render(){
        return (
            <div>
            {this.changeView()}
            </div>
        );
        };
}

export default RecipeCard;

