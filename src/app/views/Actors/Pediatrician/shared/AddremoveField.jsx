import { useState } from "react"
function AddRemovedFormField(){

    const [inputFields, setInputFields] = useState([{
        Qualifications:'',

    } ]);

    const addInputField = ()=>{

        setInputFields([...inputFields, {
            Qualifications:'',
        } ])

    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }
    const handleChange = (index, evnt)=>{

        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);



    }
    return(

        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    {
                        inputFields.map((data, index)=>{
                            const {Qualifications, emailAddress, salary}= data;
                            return(
                                <div className="row my-3" key={index}>
                                    <div className="col">
                                        <div className="form-group">
                                            <input style={{height: "100px"} } type="text" onChange={(evnt)=>handleChange(index, evnt)} value={Qualifications} name="Qualifications" className="form-control"  placeholder="Qualifications" />
                                        </div>
                                    </div>

                                    <div className="col">



                                        {(inputFields.length!==1)? <button className="btn btn-danger" onClick={removeInputFields}>x</button>:''}


                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="row">
                        <div className="col-sm-12">

                            <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">

            </div>
        </div>

    )
}
export default AddRemovedFormField