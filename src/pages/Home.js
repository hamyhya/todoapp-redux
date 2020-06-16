import React, {Component, useState} from 'react'
import {Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form} from 'reactstrap'

import {connect} from 'react-redux'

import {toggleModal, addTodo, deleteTodo} from '../redux/actions/'
import toggle from '../redux/reducers/toggle'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: null
    }
  }
  render() {
    const {text} = this.state
    return(
      <div>
        <div className='d-flex w-100 header'>
          <div className='header-content container text-white mt-3'>
            <div>
              <h1>Hola, Ilham!</h1>
            </div>
            <div>
              <h5>Tuesday, 16 June</h5>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <h1>What should I do today?</h1>
        </div>
        <div className='container mt-3'>
          <Table className='container'>
            {this.props.todo.todos.data.map((list, index) => (
              <tr>
                <th scope="row"></th>
                  <td>{list.text}</td>
                <td><Button onClick={() => this.props.deleteTodo(index)} className='btn btn-danger'>X</Button></td>
              </tr>
            ))}
          </Table>
          <Button className='btn btn-add mb-5' onClick={this.props.toggleModal}>Add Task</Button>
        </div>
        <div className='footer d-flex justify-content-center p-2 mt-5 text-white'>
          <h5>Crafted with love by <a className='text-white' href='https://instagram.com/ilhambagasaputra'>Ilham Bagas Saputra</a></h5>
        </div>

        <Modal isOpen={this.props.toggle.value}>
          <Form>
            <ModalHeader>Add Task</ModalHeader>
            <ModalBody>
              <Input onChange={(e) => this.setState({
                  text: e.target.value
                })} type='text' placeholder='What would you do?'/>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => {
                this.props.addTodo(text)
                this.props.toggleModal()
                }} color="success" type='button'>Add</Button>
              <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
            </ModalFooter>
          </Form>
      </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  toggle: state.toggle,
  todo: state
})

const mapDispatchToProps = {toggleModal, addTodo, deleteTodo}

export default connect(mapStateToProps, mapDispatchToProps)(Home)