import {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from "./ThemeContext";
import Modal from './Modal'
// const Details = () => {
//     return(
//         <h2>Details Component</h2>
//     )
// }

class Details extends Component {
    constructor () {
        super();
        this.state={loading: true, showModal: false}
    }
async componentDidMount () {
    console.log('component did mount!');
    
const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
)
const json = await res.json()
console.log(json);

this.setState(Object.assign({
    loading: false
}
, json.pets[0]
)  )
}

toggleModal = () => this.setState({showModal: !this.state.showModal})
adopt = () => (window.location = 'http://bit.ly/pet-adopt')

    render () {

if (this.state.loading) {
    return <h2>loading...</h2>
}

        console.log(this.state);
        const {animal, breed, city, state, description, name, images, id, showModal} = this.state

        // throw new Error('this is a test error')
        return (
            <div className="details">
                id: {id}
                <Carousel images={images}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{animal} - {breed} - {city}, {state}</h2>

<ThemeContext.Consumer>{([themeHook]) => (
    // <button style={{backgroundColor: ['green']}}>Adopt {name}</button>
   <button style={{backgroundColor: themeHook}}
   onClick={this.toggleModal}
   >Adopt {name}</button>

) }</ThemeContext.Consumer>


                    {/* <button>Adopt {name}</button> */}
                    <p>{description}</p>
{showModal ? (
    <Modal>
        <div>
            <h1>would you like to adopt {name}</h1>
    
    <div className="buttons">
        <button onClick={this.adopt}>Yes</button>
        <button onClick={this.toggleModal}>No</button>

    </div>
    
    </div>
    </Modal>
) : null
}

                </div>
                
                </div>
        )
    }
}

const DetailsWithRouter = withRouter(Details)

// export default function DetailsWithErrorBoundary() {
//     return (<ErrorBoundary>
//         <DetailsWithRouter/>
//     </ErrorBoundary>

//     )
// }

export default function DetailsWithErrorBoundary() {
    return (
        <DetailsWithRouter/>
    

    )
}