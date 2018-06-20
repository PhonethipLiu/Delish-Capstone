import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import RecipeDetails from './RecipeDetails';

class RecipeCard extends Component {
    state={
        recipeDetailsOpen: false
    }

    clickCard = ()=>{
        this.setState({
            recipeDetailsOpen: true,
        })
    }

    closeRecipeDetails = () =>{
        this.setState({
            recipeDetailsOpen: false,
        })
    }

    changeView = () => {
        if(this.state.recipeDetailsOpen){
            return(<RecipeDetails recipe={this.props.recipe} closeRecipeDetails={this.closeRecipeDetails}/>)
        }else{
            return(
            <div>
      <Card className="Card-Recipe">
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle><strong>{this.props.category}</strong>: {this.props.subcategory}</CardSubtitle>
        </CardBody>
        <img width="100%" src={this.props.image} alt="Recipe Card image" />
        <CardBody>
          <CardText ><strong>Source:</strong> {this.props.source}</CardText>
          <CardText><strong>Rating:</strong> {this.props.rating} &ensp; | &ensp; Status: {this.props.status}</CardText>
          <CardText><strong>Status:</strong> {this.props.notes} </CardText>
          <CardLink  onClick={this.clickCard}>Recipe details</CardLink>
          <CardLink to="/components/UpdateRecipe">Edit Recipe</CardLink>
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

