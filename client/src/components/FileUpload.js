import React,{Fragment,useState} from 'react'
import axios from 'axios'
import Message from './Message';
import Progress from './Progress';

const FileUpload = () => {
const [file,setFile]=useState('');
const [filename,setFilename]=useState('Choose File')
const[uploadedFile,setUploadedFile]=useState({})
const [message,setMessage]=useState('')
const[uploadPercentage,setUploadPercentage]=useState('0')
const onChange=e=>{
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);

}
const onSubmit=async e=>{
    e.preventDefault();

    const formData=new FormData()
    formData.append('file',file)

    try{
        const res=await axios.post('/api/upload',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            },
            onUploadProgress:progressEvent=>{
                setUploadPercentage(parseInt(Math.round((progressEvent.loaded*100)/progressEvent.total)))
                setTimeout(()=>setUploadPercentage(0),5000);

            }
            
        })
const {fileName,filePath}=res.data;
setUploadedFile({fileName,filePath});
setMessage('Your File has been Uploaded and We are working hard so that everyone see you post.For certain period of time it has been saved in our system only!!!sorry')
    }catch(err){
        setMessage('No file selected')
if(err.response.status===500){

    setMessage('Internal Server Error')
}else{
    console.log(err.response.data.msg)
}
    }
}
    return (
       
        <Fragment>
            {message?<Message msg={message}/>:null}
            <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
            
  <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
  <label className="custom-file-label" htmlFor="customFile">
      {filename}
  </label>
</div>

<Progress percentage={uploadPercentage}/>

<input type="submit" value="Upload" className="btn btn-danger mt-4"></input>
            </form>
            {uploadedFile?(<div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <h3 className="text-center">{uploadedFile.fileName}</h3>
                    <img style={{width:'100%'}} src={uploadedFile.filePath} alt=""/>
                </div>
            </div>
            ):null}
        </Fragment>
    )
}

export default FileUpload
