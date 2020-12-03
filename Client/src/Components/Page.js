import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup,FormControl,Container,Row, Col,Button,Card} from 'react-bootstrap'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";

class  Page extends Component{
  constructor(props) {
    super(props)
    this.state={
        tweet:'',
        emoji:'',
        loading: false,
    }
    this.handler = this.handler.bind(this);
}


myChangeHandler = (event) => {
    this.setState({
        tweet: event.target.value
    });
  }

unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi, 
           function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
           });
 }
 

handler(){
    this.setState({
        loading:true
    })
    axios.post('/api',{tweet:this.state.tweet})
                .then(res=>{
                    this.setState({
                        emoji:this.unicodeToChar(res.data.emoji)
                    })
                })
                .catch(error=>{
                    console.log(error)
                })
                .finally(()=>
                {
                    this.setState({
                        loading:false
                    })
                })
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
                        <Button variant="outline-primary" onClick={this.handler}>Find suggested emoji</Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{height:'20px'}}></Col>
                </Row>
                <Row>
                  <Col>
                        <ClipLoader textAlign='center'
                            size={100}
                            color={"blue"}
                            loading={this.state.loading}
                        />
                  </Col>
              </Row>
                {this.state.emoji!==''  &&
                 <Row  style={{textAlign:'center'}}>
                    <Col style={{ width: '18rem' }}></Col>
                    <Col>
                        <Card
                            bg='Primary'
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>Emoji</Card.Header>
                            <Card.Body>
                            <Card.Title ><span style={{fontSize:'35px'}}>{this.state.emoji}</span></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '18rem' }}></Col>
                </Row>
                }
            </Container>

        </>
    )
}
}

export default Page;