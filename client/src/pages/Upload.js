import React, {Component} from 'react';
import axios from 'axios'
class Upload extends Component{
    state={
        file:null
    }
   handleFile(e){
       let file =e.target.files[0]
     this.setState({file:e})
   } 
handleUpload(e){
let file=this.state.file
let formdata=new FormData()
formdata.append('image',file)
formdata.append('name','sudan')
axios({
    url:'/some/api',
    method:'POST',
    headers:{
        authorization:'your yoken'
    },
    data:formdata
}).then((res)=>{

},(err)=>{})
   }

render(){
    return (
        <form>
      <input type="file" multiple name='file' onChange={(e)=>this.handleFile(e)}/>
      <button>upload</button>
      </form>
    )
    }
}

export default Upload
