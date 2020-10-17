import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddAdmin = () => {
    const [adminData, SetAdminData] = useState({email:""})
    const [error, setError] = useState(false);
    const [content, setContent] = useState(true);

    const handleChage=event=>{
       SetAdminData ({email:event.target.value});
    }
    const handleSubmit=event=>{
        event.preventDefault();
        fetch('http://localhost:5000/addAdmin', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)

        }).then(res => {
            console.log("come");
            setContent(false);
            SetAdminData({})
        })
    }
    return (
        <div style={{ width: "100%", backgroundColor: "white" }}>
            {
                content ? (
                    <Form onSubmit={handleSubmit}   id="Addadmin" >
                        
                            <Form.Group controlId="formBasicTitle" id="Adminform">
                                
                                <Form.Control type="email" name="email" value={adminData.email} placeholder="admnin email" onChange={handleChage} required />

                            </Form.Group>
                            <div>
                            <Button className="btnstyle3" variant="" type="submit">
                                Submit
                            </Button>
                       
                            </div>
                            
                       

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

export default AddAdmin; 