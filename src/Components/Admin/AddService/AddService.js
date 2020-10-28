import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { HiCloudUpload } from 'react-icons/hi'
const AddService = () => {
    const [serviceData, SetServieData] = useState({ title: "", description: "", file: "" })
    const [error, setError] = useState(false);
    const [content, setContent] = useState(true);
    const handleChage = e => {
        const newService = { ...serviceData }
        newService[e.target.name] = e.target.value;
        SetServieData(newService)
    }
    const handleChageFile = e => {
        const newService = { ...serviceData }
        newService.file = e.target.files[0];
        SetServieData(newService)
        setError(false)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(serviceData.file);
        if (serviceData.file == "") {
            setError(true)
        }
        else {
            setError(false)
            let data = new FormData();
            data.append('title', serviceData.title)
            data.append('description', serviceData.description)
            data.append('file', serviceData.file)
            console.log(data);
            fetch('https://shielded-wildwood-60115.herokuapp.com/addService', {
                method: "POST",
                body: data

            }).then(res => {
                console.log("come");
                setContent(false);
                SetServieData({ title: "", description: "", file: "" })
            })
                .catch(err => {
                    console.log(err);
                })
        }

    }


    return (
        <div style={{ width: "100%", backgroundColor: "white" }}>
            {
                content ? (
                    <Form onSubmit={handleSubmit}  >
                        <div id="addService">
                            <div id="part1">
                                <Form.Group controlId="formBasicTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" name="title" value={serviceData.title} onChange={handleChage} required />

                                </Form.Group>

                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control as="textarea" rows={4} name="description" value={serviceData.description} required onChange={handleChage} />
                                </Form.Group>


                            </div >
                            <div id="part2" >
                                <Button className="btnstyle2" onClick={() => document.getElementById("file").click()}><HiCloudUpload /> Upload Photo</Button>
                                <input type="file" name="file" id="file" onChange={handleChageFile} style={{ display: "none" }} />
                                <small style={{ padding: "10px", color: "#009444" }}>{serviceData.file.name}</small>
                                {
                                    error && <small style={{ padding: "10px", color: "red", fontWeight: "600" }}>have to to upload an image</small>
                                }
                            </div>
                        </div>
                        <Button className="btnstyle3" style={{marginTop:"20px",padding:"5px 20px"}} variant="primary" type="submit">
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

export default AddService;