import React, {Component} from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import '../../index.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * UpdateRecipe should appear when user clicks on the edit fields link
 */


export default class UpdateRecipe extends Component{
    state = {
        fields: {
            category: this.props.recipe.category || '',
            subcategory: this.props.recipe.subcategory ||  '',
            title: this.props.recipe.title || '',
            image: this.props.recipe.image || '',
            source: this.props.recipe.source || '',
            instruction: this.props.recipe.instruction || '',
            snapshot: this.props.recipe.snapshot ||  '',
            status: this.props.recipe.status ||  '',
            rating: this.props.recipe.rating || '',
            level: this.props.recipe.level || '',
            serving: this.props.recipe.serving || '',
            tags: this.props.recipe.tags || '',
            notes: this.props.recipe.notes || '',
        },
        recipeErrors: {},
  }
  
  onFormSubmit = evt => {
      console.log("What is onFormSubmit ()", this.props);
    const category = this.state.fields.category;
    const subcategory = this.state.fields.subcategory;
    const title = this.state.fields.title;
    const image = this.state.fields.image;
    const source = this.state.fields.source;
    const instruction = this.state.fields.instruction;
    const snapshot = this.state.fields.snapshot;
    const status = this.state.fields.status;
    const rating = this.state.fields.rating;
    const level =  this.state.fields.level;
    const serving = this.state.fields.serving;
    const tags = this.state.fields.tags;
    const notes = this.state.fields.notes;
   
    this.props.saveUpdate();

    this.setState({
        fields: {
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
    const fields= Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  }

  render() {
    return (
      <div className="Form-fields">
        <h3>Edit your fields</h3>
         <Form>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update Category</label>
                <Input 
                    fluid placeholder='Category' 
                    name="category"
                    value={this.state.fields.category}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Update Sub-category</label>
                <Input 
                    fluid placeholder='Sub-category' 
                    name="subcategory"
                    type='text'
                    value={this.state.fields.subcategory}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update Title</label>
                <Input 
                    fluid placeholder='Title' 
                    name="title"
                    type='text'
                    value={this.state.fields.title}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Update Image</label>
                <Input 
                    fluid placeholder='Image' 
                    name="image"
                    type='image'
                    value={this.state.fields.image}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update Source</label>
                <Input 
                    fluid placeholder='Source url' 
                    name="source"
                    type='text'
                    value={this.state.fields.source}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Update Instruction</label>
                <Input 
                    fluid placeholder='Enter fields instructions' 
                    name="instruction"
                    type='textarea'
                    value={this.state.fields.instruction}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update snapshot</label>
                <Input 
                    fluid placeholder='Upload image of fields instructions' 
                    name="snapshot"
                    type='image'
                    value={this.state.fields.snapshot}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update Recipe Status</label>
                <Input 
                    fluid placeholder='Recipe status' 
                    name="status"
                    type='text'
                    value={this.state.fields.status}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update Rating</label>
                <Input 
                    fluid placeholder='Enter a number 1-5 scale; 1= lowest rating & 5 being the highest rating' 
                    name="rating"
                    type='number'
                    value={this.state.fields.rating}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update Level</label>
                <Input 
                    fluid placeholder='Level of easy to make the fields' 
                    name="level"
                    type='text'
                    value={this.state.fields.level}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update Serving</label>
                <Input 
                    fluid placeholder='Serving amount' 
                    name="serving"
                    type='text'
                    value={this.state.fields.serving}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update Tags</label>
                <Input 
                    fluid placeholder='Enter keyword tags' 
                    name="tags"
                    type='text'
                    value={this.state.fields.tags}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update Notes</label>
                <Input 
                    fluid placeholder='Enter additional notes' 
                    name="nots"
                    type='textarea'
                    value={this.state.fields.notes}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Button 
                size='mini' 
                color='yellow'
                onClick={this.onFormSubmit}
            >
               Save                       
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