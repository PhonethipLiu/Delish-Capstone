import React, { Component } from 'react';
import './LandingPage.css';
// import { Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import logo from './images/Delish-logo-01.svg';

// Accepts forms as props from App.js
export default class LandingPage extends Component{

    // constructor(props){
    //     super(props);
    // }


    render(){
        return(
            <div className="Landing-container">
            
            <h2>Landing Page for user Recipe collection</h2>
            {/* <LandingLogin forms={this.props.forms} /> */}
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