import React, { memo, useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import database from "../firebase";
import { ref,remove} from "firebase/database";

function Card(props) {
  const { body,name }=props;


  const handleDelete = () => {
    


    remove(ref(database, "Posts/" + name))
      .then(() => {
        alert("Data Deleted SuucessFully");
      })
      .catch((error) => {
        alert("there was error", +error);
      });

    
  };

  const [showMore, setShowMore] = useState(true);
  return (
    <div
      className="card specialCard mx-auto"
      style={{
        width: '18rem',
        padding: '20px',
        backgroundColor: 'rgb(246,246,246)',
        border: 'none',
        margin: '15px',
      }}
    >
      <div className="card-body text-center">
      <h4 className="card-title text-black-50">{props.name}</h4>
        <h5 className="card-title text-black-50">{props.title}</h5>

        <h6>
          {showMore ? body : `${body.substring(0, 100)}`}
          <Button varient="standard" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</Button>

        </h6>
        <Link
          className="btn btn-primary text-white font-weight-bold"
          to={`/editPost/${name}`}
        >
          Edit Post
        </Link>
        <Button
         varient='primary'
         onClick={handleDelete}
        >
         Delete Post
        </Button>
      </div>
    </div>
  )
}
export default memo(Card)
