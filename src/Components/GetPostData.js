import React, { useEffect, useState } from "react";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Pagination from "../Components/Pagination";
import { Container, Row, Col } from "reactstrap";
import database from "../firebase";
import { getDatabase, ref, child, get } from "firebase/database";

import Card from "../Components/Card";


export function GetPostData() {
  var postItem = {};
  const [post, setPost] = useState([]);
  const [isMount, setIsMount] = useState(true);

  useEffect(() => {
    fetData();
  }, []);

  const fetData = () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `Posts/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();

          setPost(data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div>
      <div>
        <Container>
          {post.map((user) => {
            return (
              <Col key={user.id} md={4} sm={6} xs={12}>
                <Card
                  name={`${user.UserName}`}
                  title={`${user.Title} `}
                  body={`${user.BodyPost}`}
                />
              </Col>
            );
          })}

          <Pagination page="/" pageNo={post.length} />
        </Container>
      </div>
    </div>
  );
}

export default GetPostData;
