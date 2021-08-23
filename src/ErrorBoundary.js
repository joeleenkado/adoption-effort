import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'

class ErrorBoundary extends Component {
    state = {hasError: false, redirect: false}
    static getDerivedStateFromError() {
        return {hasError: true}
    }



    componentDidCatch(error, info) {
        //I log this to Sentry, Azure Monitor, New Relic
        console.error("error boundary caught an error", error, info)
        setTimeout(() => 
        this.setState({redirect: true}), 5000)
    }

// componentDidUpdate() {
//     if (this.state.hasError) {
//         setTimeout(() => 
//             this.setState({redirect: true}), 5000)
//     }
// }
//we could also have put the setTimeout out function inside of component did catch

    render () {
if (this.state.redirect) {
    return <Redirect to='/'/>
} else if (this.state.hasError) {
            return (
                <h2>This listing has an error. <Link to='/'>CLICK HERE</Link> to go back to the homepage.
                or wait 5 seconds </h2>
            )
        }
        
        return this.props.children;
   
       
    }//END render

}//END ErrorBoundary

{/* <ErrorBoundary><h1>Hi there</h1></ErrorBoundary>  */}

export default ErrorBoundary