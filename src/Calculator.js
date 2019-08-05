import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import React, {Component} from 'react';

class Calculator extends Component {

  constructor() {
    super()
    this.state = {
      finalResult: '0',
      firstNumber: '',
      secondNumber: '',
      operation: ''
    }
    this.numberClickHandler = this.numberClickHandler.bind(this)
    this.buttonType = {
      number: 'number',
      operation: 'operation',
      result: 'result'
    }
  }

  numberClickHandler(event) {

    const stateCopy = {...this.state}
    const buttonType = event.target.name

    if (stateCopy.finalResult === '0')
      stateCopy.finalResult = ''

    if (buttonType === this.buttonType.operation) {
      if (event.target.value === 'AC') {
        stateCopy.finalResult = '0'
        stateCopy.firstNumber = ''
        stateCopy.secondNumber = ''
        stateCopy.operation = ''
      }
      else {
        stateCopy.operation = event.target.value
        stateCopy.finalResult += ' ' + event.target.value + ' '
      }
    }

    if (buttonType === this.buttonType.number) {
      if (stateCopy.operation === '') {
        stateCopy.firstNumber += event.target.value
      }
      else {
        stateCopy.secondNumber += event.target.value
      }

      stateCopy.finalResult += event.target.value
    }

    if (buttonType === this.buttonType.result) {

      const fNum = parseFloat(stateCopy.firstNumber)
      const sNum = parseFloat(stateCopy.secondNumber)

      if (stateCopy.operation === 'x') {
        stateCopy.finalResult = fNum * sNum
      }
      if (stateCopy.operation === '/') {
        stateCopy.finalResult =  fNum / sNum
      }
      if (stateCopy.operation === '+') {
        stateCopy.finalResult = fNum + sNum
      }
      if (stateCopy.operation === '-') {
        stateCopy.finalResult = fNum - sNum
      }
    }

    this.setState({
      ...stateCopy
    })
  }

  render() {
    return(
      <Container>
      <br></br>
      <br></br>
      <Card bg="dark" text="white" style={{ width: '20rem' }}>
        <Card.Header as="h4">{this.state.finalResult}</Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Button 
                  variant="light" 
                  block 
                  name={this.buttonType.operation} 
                  value="AC" 
                  onClick={this.numberClickHandler}>AC
                </Button>
              </Col>
              <Col>
                <Button disabled variant="light" block>+/-</Button>
              </Col>
              <Col>
                <Button disabled variant="light" block>%</Button>
              </Col>
              <Col>
                <Button 
                  variant="warning" 
                  block 
                  name={this.buttonType.operation} 
                  value="/" 
                  onClick={this.numberClickHandler}>/
                </Button>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Button 
                  variant="secondary" 
                  block
                  name={this.buttonType.number}  
                  value="7" 
                  onClick={this.numberClickHandler}>7
                </Button>
              </Col>
              <Col>
                <Button 
                  variant="secondary" 
                  block 
                  name={this.buttonType.number} 
                  value="8" 
                  onClick={this.numberClickHandler}>8
                </Button>
              </Col>
              <Col>
                <Button 
                  variant="secondary" 
                  block 
                  name={this.buttonType.number} 
                  value="9" 
                  onClick={this.numberClickHandler}>9
                </Button>
              </Col>
              <Col>
                <Button 
                  variant="warning" 
                  block 
                  name={this.buttonType.operation} 
                  value="x" 
                  onClick={this.numberClickHandler}>x
                </Button>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
              <Button 
                  variant="secondary" 
                  block
                  name={this.buttonType.number}  
                  value="4" 
                  onClick={this.numberClickHandler}>4
                </Button>
              </Col>
              <Col>
              <Button 
                  variant="secondary" 
                  block
                  name={this.buttonType.number}  
                  value="5" 
                  onClick={this.numberClickHandler}>5
                </Button>
              </Col>
              <Col>
              <Button 
                  variant="secondary" 
                  block
                  name={this.buttonType.number}  
                  value="6" 
                  onClick={this.numberClickHandler}>6
                </Button>
              </Col>
              <Col>
                <Button 
                  variant="warning" 
                  block 
                  name={this.buttonType.operation} 
                  value="-" 
                  onClick={this.numberClickHandler}>-
                </Button>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
              <Button 
                  variant="secondary" 
                  block
                  name={this.buttonType.number}  
                  value="1" 
                  onClick={this.numberClickHandler}>1
                </Button>
              </Col>
              <Col>
              <Button 
                  variant="secondary" 
                  block
                  name={this.buttonType.number}  
                  value="2" 
                  onClick={this.numberClickHandler}>2
                </Button>
              </Col>
              <Col>
              <Button 
                  variant="secondary" 
                  block
                  name={this.buttonType.number}  
                  value="3" 
                  onClick={this.numberClickHandler}>3
                </Button>
              </Col>
              <Col>
                <Button 
                  variant="warning" 
                  block 
                  name={this.buttonType.operation} 
                  value="+" 
                  onClick={this.numberClickHandler}>+
                </Button>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col sm="6">
              <Button 
                  variant="secondary" 
                  block
                  name={this.buttonType.number}  
                  value="0" 
                  onClick={this.numberClickHandler}>0
                </Button>
              </Col>            
              <Col>
              <Button 
                  variant="secondary" 
                  block
                  name={this.buttonType.number}  
                  value="." 
                  onClick={this.numberClickHandler}>.
                </Button>
              </Col>
              <Col>
                <Button 
                  variant="warning" 
                  block 
                  name={this.buttonType.result} 
                  value="=" 
                  onClick={this.numberClickHandler}>=
                </Button>
              </Col>
            </Row>          
          </Card.Body>
        </Card>
      </Container>   
    )
  }
}

export default Calculator