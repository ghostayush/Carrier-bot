import React, { useState } from 'react';
import axios from 'axios';

const MessageParser = ({ children, actions, lim}) => {

  const { checker } = children.props.state;
  // const [limit,setLimit] = useState(40)
  // const [file, setFile] = useState();
  // function handleFile(event){
  //     setFile(event.target.files[0]);
  //     console.log(event.target.files[0]);
  // }

  // async function handleUpload() {
  // actions.thirdAction(file)
  // }

  // const pdfuploadfunction = () => {
  //   const pd = document.getElementById('pdfid');
  //   pd.style.display="block";
  // }
  

  const parse = (message) => {

    // if(checker==="name"){
    //   pdfuploadfunction();
    //   actions.nameAction(message);
    // }
  
    if(checker==="query"){
    const formData = new FormData();
      formData.append("query", message);
      // formData.append("limit", limit);
  
      axios.post('https://devparker.pythonanywhere.com/query', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((response) => {
      actions.queryAction(response.data.answer);
    })
    .catch((error) => {
      console.error('enable to process', error);
    });
  };
}

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}

    {/* <div className="range">
    <p>Answer word limit</p>
    <input  type="range" min="0" max="100" step="10" value={limit} onChange={(e)=>setLimit(e.target.value)} style={{color:"yellow"}}/>
    <p>{limit}</p>
    <div className='pdfu' id='pdfid'>
    <p className='updf'>Upload pdf</p>
        <input type="file" name="file" onChange={handleFile} className='pdf' ></input>
        <br/>
        <button  onClick={handleUpload} className='upload'>upload</button>
    </div>
    </div> */}

    </div>
  );
};

export default MessageParser;