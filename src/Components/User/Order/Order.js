import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { HiCloudUpload } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { loginContext } from '../../../App';

const Order = ({Data}) => {
    const [loggedUser, setLoggedUser] = useContext(loginContext);
   
    const [orderData, setOrderData] = useState(
        {
            name: loggedUser.name,
            email: loggedUser.email,
            serviceName: Data.title || "",
            description: "", price: 0, file: ""
        })
    const [error, setError] = useState(false);

    const [content, setContent] = useState(true);
    const handleChage = e => {
        const newService = { ...orderData }
        newService[e.target.name] = e.target.value;
        setOrderData(newService)
    }
    const handleChageFile = e => {
        const newService = { ...orderData }
        newService.file = e.target.files[0];
        setOrderData(newService)
        setError(false)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(orderData.file);
        if (orderData.file == "") {
            setError(true)
        }
        else {
            setError(false)
            let data = new FormData();
            data.append('name', orderData.name)
            data.append('email', orderData.email)
            data.append('serviceName', orderData.serviceName)
            data.append('description', orderData.description)
            data.append('serviceDescription', Data.description)
            data.append('image', Data.image.img)
            data.append('price', orderData.price)
            data.append("status","pending")
            data.append('file', orderData.file)
             
            fetch('http://localhost:5000/addOrder', {
                method: "POST",
                body: data

            }).then(res => {
                console.log("come");
                setContent(false);
                setOrderData({ title: "", description: "", file: "" })
            })
                .catch(err => {
                    console.log(err);
                })
        }

    }


    return (
        <div style={{ width: "100%" }}>
            {
                content ? (
                    <Form onSubmit={handleSubmit} id="userForm"   >

                        <Form.Group controlId="formBasicTitle">
                            <Form.Control type="text" name="name" placeholder="name" value={orderData.name} onChange={handleChage} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" name="email" placeholder="email" value={orderData.email} onChange={handleChage} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicServiceName">
                            <Form.Control type="text" name="serviceName" value={orderData.serviceName} onChange={handleChage} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription">
                            <Form.Control as="textarea" placeholder="description" rows={4} name="description" value={orderData.description} required onChange={handleChage} />
                        </Form.Group>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Form.Group controlId="formBasicServicePrice" style={{ width: "40%" }}>
                                <Form.Control type="text" name="price" value={orderData.price} onChange={handleChage} required />
                            </Form.Group>
                            <div style={{ width: "40%" }}>
                                <Button className="btnstyle2" onClick={() => document.getElementById("file").click()}><HiCloudUpload /> Upload Photo</Button>
                                <input type="file" name="file" id="file" onChange={handleChageFile} style={{ display: "none" }} />
                                <small style={{ padding: "10px", color: "#009444" }}>{orderData.file.name}</small>
                                {
                                    error && <small style={{ padding: "10px", color: "red", fontWeight: "600" }}>have to to upload an image</small>
                                }
                            </div>
                        </div>
                        <Button className="btnstyle" variant="primary" type="submit">
                            Submit
                            </Button>





                    </Form>

                ) : (
                        <div>
                            <h3 className="h1Style">Add service Successfully</h3>
                            <Button className="btnstyle2" onClick={() => setContent(true)}>Add Another</Button>
                        </div>
                    )
            }


        </div>
    );
};


export default Order;