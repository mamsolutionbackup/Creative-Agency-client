import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import LoadingGif from '../../SharedComponents/LodingGif/LoadingGif';
import './servicelist.css'

const ServiceList = () => {
    const [status, setStatus] = useState("");
    const [service, setService] = useState([]);
    const [loding, setLoding] = useState(false);
    const [color, setColor] = useState("red");

    useEffect(() => {
        fetch("http://localhost:5000/getOrder")
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
            .catch(err => console.log("error i", err))

    }, [loding])

    const handleChange = (event, id) => {

        setService([])

        fetch(`http://localhost:5000/updateOrderStatus/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: event.target.value })

        }).then(res => {
            setLoding(!loding)

        })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div >

            {
                service.length === 0 ? (<LoadingGif />) : (
                    <div style={{ overflow: "auto", backgroundColor: "white", padding: "20px 5px", minHeight: "450px" }}>


                        <Table responsive="md" id="tabel" style={{ width: "100%" }}>
                            <thead>
                                <tr id="tableHead">
                                    <th >Name</th>
                                    <th >Email Id</th>
                                    <th  >Service</th>
                                    <th  >service Details</th>
                                    <th  >Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    service.map(data =>
                                        <tr  >

                                            <td >{data.name}</td>
                                            <td >{data.email}</td>
                                            <td>{data.serviceName}</td>
                                            <td >{data.description}</td>
                                            <td style={{fontWeight:"600"}} >

                                                {
                                                    data.status == "pending" ? (
                                                        <select name="status" id="status" style={{ color: 'red',border:"none" }} onChange={(e) => handleChange(e, data._id)} value={data.status}>
                                                        <option value="pending">pending</option>
                                                        <option value="Done">Done</option>
                                                        <option value="On Going">On Going</option>
                                                    </select>
                                                    ) : (
                                                        data.status == "Done" ? (
                                                            <select name="status" id="status" style={{color: `green`,border:"none" }} onChange={(e) => handleChange(e, data._id)} value={data.status}>
                                                            <option value="pending">pending</option>
                                                            <option value="Done">Done</option>
                                                            <option value="On Going">On Going</option>
                                                        </select>
                                                        ) : ( <select name="status" id="status" style={{ color: 'yellow',border:"none" }} onChange={(e) => handleChange(e, data._id)} value={data.status}>
                                                        <option value="pending">pending</option>
                                                        <option value="Done">Done</option>
                                                        <option value="On Going">On Going</option>
                                                    </select>)
                                                    )
                                                }
                                               



                                            </td>
                                        </tr>

                                    )
                                }

                            </tbody>
                        </Table>

                        <table id="dataTable">

                            <tr>

                            </tr>



                        </table>

                    </div>
                )
            }

        </div>

    );
};

export default ServiceList;