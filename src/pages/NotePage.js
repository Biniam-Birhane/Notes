import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import notes from "../assets/data";
import { Link,history} from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
const NotePage = (history) => {
  let { id } = useParams();
  let noteId = id;
  let [note, setNote] = useState([]);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`http://localhost:8000/notes/${noteId}`);
    let data = await response.json();
    console.log(data);
    setNote(data);
  };

  let handleSubmit = () =>{
    updateNote()
    
  }

  let updateNote = async ()=>{
    await fetch(`http://localhost:8000/notes/${noteId}`,{
      method:"put",
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify({
        ...note,'updated':new Date()
      })
    })
  }
  // let OneNote = notes.find((note) => note.id === Number(id));
  // console.log(props);
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
      </div>

      <textarea
        onChange={(e) => {
          setNote({...note,body:e.target.value});
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
