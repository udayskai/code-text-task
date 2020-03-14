import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
// import { withRouter } from 'react-router-dom';



class Addtask extends Component {

    constructor(props) {
        super(props)
        this.state = {

            Task: "",
            completed: "",
            show: false
        };
        console.log("props", this.props)
    }


    //onchange method
    onChangeMethod = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    //on submit method
    onSubmitMethod = async (e) => {
        e.preventDefault()
        let taskData = window.localStorage.getItem('taskData');
        let dataold = JSON.parse(taskData)
        let data = { id: dataold.length + 1, title: this.state.Task, completed: this.state.completed }

        window.localStorage.removeItem('taskData');
        let taskDataString = JSON.stringify([...dataold, data])
        console.log(taskDataString, 'pop data finall work');
        window.localStorage.setItem('taskData', taskDataString);
        window.location.reload()
    }


    //modal handler 
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });;

    //on click method
    clickMethod = () => {
        this.setState({ show: false });

    }



    render() {
        return (


            <div className="mt-5 text-center item-center">
                <>
                    <Button variant="primary" onClick={this.handleShow}>
                        Add Task
                     </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Task
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.onSubmitMethod}>


                                <Form.Group controlId="Task">
                                    <Form.Label>Task</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Task"
                                        onChange={this.onChangeMethod}
                                        value={this.state.Task}
                                        placeholder="Enter Task" />
                                </Form.Group>

                                <Form.Group controlId="completed">
                                    <Form.Label>completed</Form.Label>
                                    <Form.Control
                                        type="boolean"
                                        name="completed"
                                        onChange={this.onChangeMethod}
                                        value={this.state.completed}
                                        placeholder="Enter True or False" />
                                </Form.Group>

                                <Button onClick={this.clickMethod} variant="danger" type="submit" >  Submit </Button>
                            </Form>
                        </Modal.Body>

                    </Modal>
                </>
            </div>

        )

    }
}

export default Addtask;