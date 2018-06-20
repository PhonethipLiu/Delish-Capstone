```js
<RecipeForm/>
```
``` js
<div>
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
                name="subCategory"
                type='text'
                value={this.state.fields.subCategory}
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
                fluid placeholder='Enter recipe instructions' 
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
                fluid placeholder='Upload image of recipe instructions' 
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
                fluid placeholder='Level of easy to make the recipe' 
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
            color='green'
            onClick={this.onFormSubmit}
        >
            Update recipe                       
        </Button>
        <Button 
            size='mini' 
            color='red'
            onClick={this.props.cancelUpdate}
        >
            Cancel                       
        </Button>
    </Form>
</div>
```