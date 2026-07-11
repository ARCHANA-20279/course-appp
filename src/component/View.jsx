import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'

const View = () => {
    const [data,changeData]=useState([])
    const fetchData= () =>{
        axios.get(" https://host-demo-app.onrender.com/api/courses").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()},[]
    )
    return (
    <div>
        <Navigation />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="row">
                          {data.map(
                            (value,index)=>{
                                return(
                                      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
 
  <div class="card-body">
    <h5 class="card-title">Course</h5>
    <p class="card-text">{value.course_name}</p>
     <p class="card-text">{value.duration}</p>
      <p class="card-text">{value.fee}</p>
       <p class="card-text">{value.mode}</p>
        
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                            </div>
                                )
                            }
                          )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
    
  )
}

export default View