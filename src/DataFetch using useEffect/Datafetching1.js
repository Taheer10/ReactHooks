import React, { useEffect, useState } from "react";
import axios from "axios";

function Datafetching1() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setidFromButtonClick] = useState(1);

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts') --used to get all the posts from APi
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`) //--used to get a single post from APi
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]); //id is passed to get specific id post from api
  //[] -- it helps to remove infinte loops of data fetching
  //Also empty array [] is passed to fetch all the post from api
  //Use of IdfrombuttonCLick helps to remove fetching of post from api even on pointing at the input
  //post is only fetch when button is clicked

  const buttonCLick = () => {
    setidFromButtonClick(id);
  };

  return (
    <div>
      post
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={buttonCLick}>Click</button>
      {post.title}
      {/* <ul>
        {
        post.map((post)=> <li key={post.id}><b>{post.title}</b> {post.body}</li>)
        
        }
        </ul> */}
    </div>
  );
}

export default Datafetching1;
