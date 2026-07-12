import React, { useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'


const Add = () => {

const [input ,changeInput] = useState(

    {
 course_name: "",
 duration: "",
 fee:"",
 mode: "",
 trainer: ""
    }
)


const inputHandler = (event)=>{

    changeInput({...input,[event.target.name]:event.target.value})

}

const readValue =()=>{
console.log(input)



axios.post("https://host-demo-app.onrender.com/api/add-course",input).then(

    (response)=>{

        console.log(response.data)
    }
).catch()

}

  return (
    <div>
<Navigation />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                                <label htmlFor="" className="form-label">course name</label>
                                <input type="text" className="form-control" 
                                name="course_name"
                                value={input.course_name}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                                <label htmlFor="" className="form-label">duration</label>
                                <input type="text" className="form-control" 
                                name="duration"
                                value={input.duration}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                                <label htmlFor="" className="form-label">fee</label>
                                <input type="number" className="form-control"
                                name="fee"
                                value={input.fee}
                                onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                                <label htmlFor="" className="form-label">mode</label>
                                <input type="text" className="form-control" 
                                name="mode"
                                value={input.mode}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                                <label htmlFor="" className="form-label">trainer</label>
                                <input type="text" className="form-control" 
                                name="trainer"
                                value={input.trainer}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                                <button className="btn btn-dark" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add