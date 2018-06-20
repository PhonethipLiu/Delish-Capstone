import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const RecipeCard = (props) => {
  return (
    <div>
      <Card className="Card-Recipe">
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle><strong>{props.category}</strong>: {props.subcategory}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.image} alt="Recipe Card image" />
        <CardBody>
          <CardText ><strong>Source:</strong> {props.source}</CardText>
          <CardText><strong>Rating:</strong> {props.rating} &ensp; | &ensp; Status: {props.status}</CardText>
          <CardText><strong>Status:</strong> {props.notes} </CardText>
          <CardLink  onClick={props.clickCard} >Recipe details</CardLink>
          <CardLink to="/components/UpdateRecipe">Edit Recipe</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeCard;

