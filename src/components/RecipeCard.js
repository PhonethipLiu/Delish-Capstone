import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const RecipeCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.category}: {props.subcategory}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.image} alt="Recipe Card image" />
        <CardBody>
          <CardText>Source: {props.source}</CardText>
          <CardText>Rating: {props.rating} | Status: {props.status}</CardText>
          <CardText>Status: {props.notes}</CardText>
          <CardLink to="/components/RecipeDetails">Recipe details</CardLink>
          <CardLink to="/components/UpdateRecipe">Edit Recipe</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeCard;