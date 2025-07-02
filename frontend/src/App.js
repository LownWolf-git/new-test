import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [vlogs, setVlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/vlogs')
      .then(res => res.json())
      .then(data => setVlogs(data));
  }, []);

 return (
  <div className="App">
    <h1>My Vlog Page</h1>
    {vlogs.map((vlog) => (
      <div key={vlog._id} className="vlog">
        <h2>{vlog.title}</h2>
        {/* Add this image line to show your vlog thumbnail */}
        <img src={vlog.thumbnail} alt={vlog.title} className="vlog-thumb" />
        <p>{vlog.content}</p>
        <p><i>by {vlog.author}</i></p>
      </div>
    ))}
  </div>
);

}

export default App;
