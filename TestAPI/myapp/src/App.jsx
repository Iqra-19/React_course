import { useState, useEffect } from 'react'
import './App.css'
import {getComments}  from "./api/CommentsAPI";
import CommentsTable from "./components/CommentsTable"

function App() {

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect( () => {
    async function fetchComments() {
      try {
        const data = await getComments();
          //console.log(data);
        setComments(data);
      } catch (error) {
        setError("Failed to fetch comments.");
      }
      finally{
        setLoading(false);
      }
    }

    fetchComments();
  }, [] );  

    //console.log(comments);

  
  return (
    <>
      <div className="app">
        <h1>Comments</h1>
      </div>

      <CommentsTable  comments={comments} loading={loading} error={error}/>
    </>
  )
}

export default App
