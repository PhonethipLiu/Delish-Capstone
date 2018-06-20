import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';


const RecipeDetails = (props) => {
  return (
    <div>
      <Card className="Card-RecipeDetails">
        <CardBody>
        <CardLink to="/components/RecipeDetails" className="text-right">Edit Recipe</CardLink>
          <CardLink to="/components/UpdateRecipe" className="text-right">Delete</CardLink>
          <CardLink onClick={props.closeRecipeDetails}>Close Card</CardLink>
          <CardTitle>{props.recipe.title}</CardTitle>
          <CardSubtitle><strong>{props.recipe.category}</strong> &ensp; | &ensp; {props.recipe.subcategory}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.recipe.image} alt="Recipe Card image" />
        <CardBody>
          <CardText><strong>Source:</strong> {props.recipe.source}</CardText>
          <CardText><strong>Rating:</strong> {props.recipe.rating} &ensp; | &ensp; Status: {props.recipe.status}</CardText>
          <CardText><strong>Cooking Level:</strong> {props.recipe.level} &ensp; | &ensp; Servings: {props.recipe.serving}</CardText>
          <CardText><strong>Instructions Snapshot </strong></CardText>
          <img className="Card-RecipeDetails-Snapshot" src={props.recipe.snapshot} alt="Recipe screencapture"/>
          <CardText><strong>Instructions:</strong> {props.recipe.instruction}</CardText>
          <CardText><strong>Tags:</strong> {props.recipe.tags}</CardText>
          <CardText><strong>Notes:</strong> {props.recipe.notes}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeDetails;