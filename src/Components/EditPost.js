import React from "react";
import { useState } from "react";
import database from "../firebase";
import { ref, set } from "firebase/database";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";


export function EditPost() {

    const idParam =useParams();


  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [bodyPost, setBodyPost] = useState("");
  const [id, setId] = useState(0);

  const handlePost = () => {
    setId((id)=>id+1);

    set(ref(database, "Posts/" + id), {
      UserName: userName,
      FullName: fullName,
      Title: title,
      BodyPost: bodyPost,
    })
      .then(() => {
        alert("Data Added SuucessFully");
      })
      .catch((error) => {
        alert("tehre was error", +error);
      });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ height: "80vh" }}>
         
            <Stack direction="row" spacing={4}>
              <Stack spacing={2}>
                <Typography varient="h6">Add Post Here:</Typography>
                UserName:
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Stack>

              <Stack spacing={2}>
                FullName:
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Stack>
              <Stack spacing={2}>
                title:
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Stack>
              <Stack spacing={3}>
                Post:
                <textarea
                  value={bodyPost}
                  rows="4"
                  cols="50"
                  onChange={(e) => setBodyPost(e.target.value)}
                />
              </Stack>

              <br />
              <Stack spacing={4}>
                <button type="submit" onClick={handlePost}>
                  Submit
                </button>
              </Stack>
            </Stack>        
        </Box>
      </Container>
    </div>
  );
}
