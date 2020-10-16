import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import LoadingGif from '../../SharedComponents/LodingGif/LoadingGif';
import './servicelist.css'

const ServiceList = () => {
    const [status, setStatus] = useState("");
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/getOrder")
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
            .catch(err => console.log("error i", err))

    }, [])
 
    const handleChange = (event, id) => {
        
        setStatus(event.target.value)
         
    }
     
    return (
        <div >
            {
                service.length === 0 ? (<LoadingGif />) : (
                    <div style={{ overflow: "auto", backgroundColor: "white", padding: "20px 5px", minHeight: "450px" }}>

                        <Table responsive="md" id="tabel" style={{width:"100%"}}>
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
                                            <td >
                                             
                                                   
                                                        <select name="status" id="status"  onChange={(e)=>handleChange(e,data._id)} value={status}>
                                                        <option value="pending">pending</option>
                                                        <option value="Done">Done</option>
                                                        <option value="On Going">On Going</option>
                                                    </select>
                                                    
                                                
                                               
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