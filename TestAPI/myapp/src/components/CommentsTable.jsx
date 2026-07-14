import React from 'react'

export default function CommentsTable( {comments, loading, error} ) {
  
    if (loading) {
    return (
        <div className="status loading">
        <div className="spinner"></div>
        <h2>Loading...</h2>
        <p>Please wait while we fetch the comments.</p>
        </div>
    );
    }

    if (error) {
    return (
        <div className="status error">  
        <h2>Oops!</h2>
        <p>{error}</p>
        </div>
    );
    }

    return (
    <div className="table-container">
    
        <table className='comments-table'>
            
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Comments</th>
                </tr>
            </thead>

            <tbody>
            {comments.map((comment) => (
                <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
                </tr>
            ))}
            </tbody>
        </table>

    </div>
  )
}
