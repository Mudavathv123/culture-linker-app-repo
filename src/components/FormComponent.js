import { useState } from "react"
import { Form,Card } from "react-bootstrap"

const FormComponent = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSuccess, setIsSuccess] = useState(false)

    const handleInputChnage = (evt) => {
        const { name, value } = evt.target;
        setFormData({ ...formData, [name]: value })
    }

    const renderSuccessMessage = () => {
        const { name, email, message } = formData;
        return <div className="mt-5">
            <p>Name : <strong>{name}</strong></p>
            <p>Email: <strong>{email}</strong></p>
            <p>Message : <strong>{message}</strong></p>
        </div>
    }



    const handleSubmit = (evt) => {
        evt.preventDefault()
        setIsSuccess(true)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h1 className='text-center'>Message Form</h1>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="name">Name :</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                id="name"
                                value={formData.name}
                                name="name"
                                placeholder="Enter your name"
                                onChange={handleInputChnage}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please fill your name above filed
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email :</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                placeholder="Enter your email address"
                                onChange={handleInputChnage}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please fill your email address above filed
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="message">Message :</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                id="message"
                                value={formData.message}
                                name="message"
                                placeholder="Enter your message here."
                                onChange={handleInputChnage}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please something fill message filed
                            </Form.Control.Feedback>
                            <div className="mt-3">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>

            {
                isSuccess && renderSuccessMessage()
            }
        </>
    )
}

export default FormComponent