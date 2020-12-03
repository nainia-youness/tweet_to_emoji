import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup,FormControl,Container,Row, Col,Button} from 'react-bootstrap'


class  Page extends Component{
  constructor(props) {
    super(props)
    this.state={
        tweet:'',
        emoji:''
    }
    this.handler = this.handler.bind(this);
}


myChangeHandler = (event) => {
    this.setState({
        tweet: event.target.value
    });
  }


handler(){
    console.log('Predict')
}

render() {
    return (
        <>
            <Container>
                <Row style={{backgroundColor:'#CEF2FF'}}>
                    <Col >
                        <h2 style={{color:'#122BAB'}}>Tweet To Emoji</h2>
                    </Col>
                </Row>
                <Row>
                    <Col style={{height:'50px'}}></Col>
                </Row>
                <Row>
                    <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text>tweet</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" onChange={this.myChangeHandler} aria-label="With textarea" />
                            </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col style={{height:'20px'}}></Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="outline-primary" onClick={this.handler}>Find Sugested emoji</Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{height:'20px'}}></Col>
                </Row>
                <Row>
                    <Col>
                        {this.state.emoji}
                    </Col>
                </Row>
            </Container>

        </>
    )
}
}

export default Page;