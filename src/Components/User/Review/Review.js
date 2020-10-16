import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { loginContext } from '../../../App';

const Review = () => {
    const [content, setContent] = useState(true);
    const [loggedUser, setLoggedUser] = useContext(loginContext);
    const [reviewData, setReviewData] = useState(
        {
            name: loggedUser.name,
            email:loggedUser.email,
            companyName:"" ,
            description: "",
            photo:loggedUser.photo
        })
    const handleChage = e => {
        const newService = { ...reviewData }
        newService[e.target.name] = e.target.value;
        setReviewData(newService)
    }
    const handleSubmit = e => {
        e.preventDefault();
         
            fetch('http://localhost:5000/addReview', {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)

            }).then(res => {
                console.log("come");
                setContent(false);
                setReviewData({...reviewData,description: "" })
            })
                .catch(err => {
                    console.log(err);
                })
        

    }
    return (
        <div style={{ width: "100%" }}>
            {
                content ? (
                    <Form onSubmit={handleSubmit} style={{ width: "60%" }} >

                        <Form.Group controlId="formBasicTitle">
                            <Form.Control type="text" name="name" placeholder="name" value={reviewData.name} onChange={handleChage} required />
                        </Form.Group>
                       
                        <Form.Group controlId="formBasiccompanyName">
                            <Form.Control type="text" name="companyName" placeholder="designation/company name" value={reviewData.companyName} onChange={handleChage} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription">
                            <Form.Control as="textarea" placeholder="description" rows={4} name="description" value={reviewData.description} required onChange={handleChage} />
                        </Form.Group>
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

export default Review;