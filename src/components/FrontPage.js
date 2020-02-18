import React, { Component } from 'react';
import { Container } from 'reactstrap';

class FrontPage extends Component {
    render(){
        return(
               <Container>
                   <div className="hero-image">
                        <div className="hero-text">
                            <h1>The Archives</h1>
                        </div>
                    </div>
                    <div>
                        <h1>Welcome to The Archives</h1>
                        <p>Velit excepteur incididunt esse amet Lorem culpa ex officia eu aliquip in dolor velit in. Elit ea adipisicing anim ea Lorem minim consectetur mollit. Non eiusmod irure nulla nostrud eiusmod duis aliquip et ipsum amet occaecat quis non enim. Eiusmod laborum nisi aliqua Lorem. Eu id irure culpa velit nulla eiusmod enim dolore irure. Laboris magna ut do aliquip eu exercitation consequat laborum Lorem incididunt qui elit in in. Magna minim velit culpa laboris quis culpa quis.</p>
                    </div>
               </Container>
        )
    }
}

export default FrontPage;