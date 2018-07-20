import React, {Component} from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import '../../index.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * RecipeForm should appear when user clicks on the create recipe button
 */

export default class RecipeForm extends Component{
state = {
   recipe: {
      category: '',
      subcategory: '',
      title: '',
      image: '',
      source: '',
      instruction: '',
      snapshot: '',
      status: '',
      rating: '',
      level: '',
      serving: '',
      tags: '',
      notes: '',
    }
  };
  onFormSubmit = (evt, action) => {
    let userObject = {}
    userObject.category = this.state.recipe.category;
    userObject.subcategory = this.state.recipe.subcategory;
    userObject.title = this.state.recipe.title;
    userObject.image = this.state.recipe.image;
    userObject.source = this.state.recipe.source;
    userObject.instruction = this.state.recipe.instruction;
    userObject.snapshot = this.state.recipe.snapshot;
    userObject.status = this.state.recipe.status;
    userObject.rating = this.state.recipe.rating;
    userObject.level =  this.state.recipe.level;
    userObject.serving = this.state.recipe.serving;
    userObject.tags = this.state.recipe.tags;
    userObject.notes = this.state.recipe.notes;
    this.props.createNewRecipe(userObject);

    console.log("userObject", userObject);

    this.setState({
        recipe: {
            category: '',
            subcategory: '',
            title: '',
            image: '',
            source: '',
            instruction: '',
            snapshot: '',
            status: '',
            rating: '',
            level: '',
            serving: '',
            tags: '',
            notes: '',
          }
    });

    evt.preventDefault();
  };

  onInputChange = evt => {
    const recipe= Object.assign({}, this.state.recipe);
    recipe[evt.target.name] = evt.target.value;
    this.setState({recipe});
  }

  render() {
    return (
      <div className="Form-recipe">
        <h3>{this.props.title}</h3>
         <Form>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Category</label>
                <Input 
                    fluid placeholder='Category' 
                    name="category"
                    value={this.state.recipe.category}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Sub-category</label>
                <Input 
                    fluid placeholder='Sub-category' 
                    name="subcategory"
                    type='text'
                    value={this.state.recipe.subcategory}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Title</label>
                <Input 
                    fluid placeholder='Title' 
                    name="title"
                    type='text'
                    value={this.state.recipe.title}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Image</label>
                <Input 
                    fluid placeholder='Image' 
                    name="image"
                    type='text'
                    value={this.state.recipe.image}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Source</label>
                <Input 
                    fluid placeholder='Source url' 
                    name="source"
                    type='text'
                    value={this.state.recipe.source}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Instruction</label>
                <Input 
                    fluid placeholder='Enter recipe instructions' 
                    name="instruction"
                    type='textarea'
                    value={this.state.recipe.instruction}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>

            {/* <Form.Group widths='equal'>
            <Form.Field>
                <label>Snapshot</label>
                <Input 
                    fluid placeholder='Upload image of recipe instructions' 
                    name="snapshot"
                    type='image'
                    value={this.state.recipe.snapshot}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group> */}

            <Form.Group widths='equal'>
            <Form.Field>
                <label>Recipe Status</label>
                <Input 
                    fluid placeholder='Recipe status' 
                    name="status"
                    type='text'
                    value={this.state.recipe.status}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Rating</label>
                <Input 
                    fluid placeholder='Enter a number 1-5 scale; 1= lowest rating & 5 being the highest rating' 
                    name="rating"
                    type='number'
                    value={this.state.recipe.rating}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Level</label>
                <Input 
                    fluid placeholder='Level of easy to make the recipe' 
                    name="level"
                    type='text'
                    value={this.state.recipe.level}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Servings</label>
                <Input 
                    fluid placeholder='Serving amount' 
                    name="serving"
                    type='text'
                    value={this.state.recipe.serving}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Tags</label>
                <Input 
                    fluid placeholder='Enter keyword tags' 
                    name="tags"
                    type='text'
                    value={this.state.recipe.tags}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Notes</label>
                <Input 
                    fluid placeholder='Enter additional notes' 
                    name="notes"
                    type='textarea'
                    value={this.state.recipe.notes}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Button 
                size='mini' 
                color='yellow'
                onClick={this.onFormSubmit}
            >
                Create recipe                       
            </Button>
            <Button 
                size='mini' 
                color='grey'
                onClick={this.props.cancelUpdate}
            >
                Cancel                       
            </Button>
        </Form>
      </div>
    );
  }
}