import * as React from "react"
import TopNav from "../components/topNav.js"
import Container from "react-bootstrap/Container"
import 'bootstrap/dist/css/bootstrap.min.css';

class Page extends React.Component {
    render() {
        return (
            <div>
                <TopNav />
                <Container>
                    {this.props.children}
                </Container>
                
            </div>

        )

    }
}

export default Page