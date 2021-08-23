import {Component} from 'react'

class Carousel extends Component {
    state = {
        active: 2
    }

 static defaultProps = {
    images:['http://pets-images.dev-apis.com/pets/none.jpg']
    
//   images : ['https://dog.ceo/api/breeds/image/random/3']
    
 }

handleIndexClick = (e) => {
    console.log(this);
    
this.setState({
    active: +e.target.dataset.index,
})
}

render () {
    const {active} = this.state
    const {images} = this.props

return (
    <div className="carousel">
        <img src={images[active]} alt='animal'/>
        <div className='carousel-smaller'>
            {images.map((photo, index) => (
                <img
                key={photo}
                src={photo}
                data-index={index}
                onClick={this.handleIndexClick}
                className={index === active ? "active" : ''}
                alt="animal thumbnail"/>
            )

            )}
        </div>
    </div>
)

}

}

// Carousel.defaultProps
export default Carousel