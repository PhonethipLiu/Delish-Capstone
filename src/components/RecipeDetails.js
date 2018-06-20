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
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle><strong>{props.category}</strong> &ensp; | &ensp; {props.subcategory}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.image} alt="Recipe Card image" />
        <CardBody>
          <CardText><strong>Source:</strong> {props.source}</CardText>
          <CardText><strong>Rating:</strong> {props.rating} &ensp; | &ensp; Status: {props.status}</CardText>
          <CardText><strong>Cooking Level:</strong> {props.level} &ensp; | &ensp; Servings: {props.serving}</CardText>
          <CardText><strong>Instructions Snapshot </strong></CardText>
          <img className="Card-RecipeDetails-Snapshot" src={props.snapshot} alt="Recipe screencapture"/>
          <CardText><strong>Instructions:</strong> {props.instruction}</CardText>
          <CardText><strong>Tags:</strong> {props.tags}</CardText>
          <CardText><strong>Notes:</strong> {props.notes}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeDetails;