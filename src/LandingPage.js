import React, { Component } from 'react';
import './LandingPage.css';
import NavBar from './components/NavBar';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';
// import { Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import logo from './images/Delish-logo-01.svg';

// Accepts forms as props from App.js
export default class LandingPage extends Component{
    state = {
        user: this.props.user,
        recipes: [{
            uid: this.props.user.id,
            category:'Baking',
            subcategory: 'Bread',
            title: 'Sourdough Bread',
            image: 'https://d2gk7xgygi98cy.cloudfront.net/91-3-large.jpg',
            source: 'https://www.kingarthurflour.com/recipes/rustic-sourdough-bread-recipe',
            instruction: 'See website...',
            snapshot: '/Users/phonethiphobson/workspace/capstone/delish-app/src/images/SourdoughBread-SnapShot.png',
            status: 'Tested',
            rating: '3',
            level: 'Easy',
            serving: '8',
            tags: 'bread, sourdough bread, baked goods',
            notes: 'It was not as cruchy as I wanted. Will try again and add more time for rising.'
        },
        {
            uid: this.props.user.id,
            category:'Baking',
            subcategory: 'Bread',
            title: 'Sourdough Bread',
            image: 'https://d2gk7xgygi98cy.cloudfront.net/91-3-large.jpg',
            source: 'https://www.kingarthurflour.com/recipes/rustic-sourdough-bread-recipe',
            instruction: 'See website...',
            snapshot: '/Users/phonethiphobson/workspace/capstone/delish-app/src/images/SourdoughBread-SnapShot.png',
            status: 'Tested',
            rating: '3',
            level: 'Easy',
            serving: '8',
            tags: 'bread, sourdough bread, baked goods',
            notes: 'It was not as cruchy as I wanted. Will try again and add more time for rising.'
        },
        {
            uid: this.props.user.id,
            category:'Baking',
            subcategory: 'Bread',
            title: 'Sourdough Bread',
            image: 'https://d2gk7xgygi98cy.cloudfront.net/91-3-large.jpg',
            source: 'https://www.kingarthurflour.com/recipes/rustic-sourdough-bread-recipe',
            instruction: 'See website...',
            snapshot: '/Users/phonethiphobson/workspace/capstone/delish-app/src/images/SourdoughBread-SnapShot.png',
            status: 'Tested',
            rating: '3',
            level: 'Easy',
            serving: '8',
            tags: 'bread, sourdough bread, baked goods',
            notes: 'It was not as cruchy as I wanted. Will try again and add more time for rising.'
        }],
        cardView: true
    }

    // clickCard = () =>{
    //     this.setState({
    //         cardView: false,
    //     })
    // }

    changeViews = () => {
        // if(this.state.cardView){
            return(
                <div className="LandingPage-Display">
                    <h1>My Recipe Collection</h1>
                    <button>+ Create New Recipe</button>
                    <AllCards recipes={this.state.recipes} 
                    // clickCard={this.clickCard}
                    />
                
                <h2> Recipe collection</h2>
                
                </div>
            )
        // }
        // else{
        //     return(
        //         <div className="LandingPage-Display">
        //         <h1>Recipe detail view</h1>
        //         <RecipeDetails recipes={this.state.recipes[0]} />
        //         </div>
        //     )
        // }
    }


    render(){
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
    const cards = this.props.recipes.map((recipe, index)=>(
        <RecipeCard
            key={index}
            title = {recipe.title}
            image = {recipe.image}
            source= {recipe.source}
            title = {recipe.title}
            category = {recipe.category}
            subcategory={recipe.subcategory}
            rating = {recipe.rating}
            clickCard={this.props.clickCard}
            recipe= {recipe}
        />
    ));
    return(
        <div>
        {cards}
        </div>
    )
    }
}
    


// Create all of the recipe card items.
// Accepts props: id, route, title, description
// class LandingLogin extends Component{
//   render() {
//     const forms = this.props.forms.map((form) => (
//       <ListElement
//         key={form.id}
//         id={form.id}
//         route={form.route}
//         title={form.title}
//         description={form.description}
//       />
//     ));
//     return (
//       <div id='LandingLogin-Options'>
//         {forms}
//       </div>
//     );
// }
// }

// // Styling element for the list items
// class ListElement extends Component{
//     render(){
//         return(
//             <List divided relaxed>
//                 <List.Item>
//                     <List.Icon name='wpforms' size='large' verticalAlign='middle' />
//                     <List.Content>
//                     <List.Header as={Link} to={this.props.route}>{this.props.title}</List.Header>
//                     <List.Description as='a'>{this.props.description}</List.Description>
//                     </List.Content>
//                 </List.Item>
//                 <Divider section />
//             </List>
//         )
//     }
// }