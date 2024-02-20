import React,{useState,useEffect} from "react";

// import notes from "../assets/data";
import ListItem from '../components/ListItem'
const NotesListpages = () => {
  let [notes,setNotes]=useState([])

  useEffect(()=>{
    getResponse()
  },[])

  let getResponse = async ()=>{
    let response =await fetch('http://localhost:8000/notes')
    let data =await response.json()
    setNotes(data)
  }

  return (
    <div className="notes">
      <div className="notes-header">
         <div className="notes-title">&#9782; Notes</div>
         <p className="notes-count"> {notes.length}</p>
      </div>
      <div>
        {notes.map((note,index) => (
            <ListItem key={index} note={note}/>
        ))}
      </div>
    </div>
  );
};

export default NotesListpages;
