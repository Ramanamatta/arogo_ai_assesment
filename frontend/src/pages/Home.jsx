import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Grid, Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import "./Home.css"; 

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Container className="ram" sx={{ paddingTop: "4px" }}> {/* Added padding-top for header */}
      <Typography variant="h4" align="center" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <Card
              sx={{
                background: "linear-gradient(135deg,rgb(249, 103, 108), #fad0c4)",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                  background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
                },
              }}
             >
              <CardContent>
                <Typography variant="h5" color='black' component="div" gutterBottom>
                  {post.title}
                </Typography>
               
                  <Typography variant="body2" color="rgba(255,255,255,0.9)">
                    {post.summary}
                  </Typography>
              
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={`/posts/${post._id}`}
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#007bff",
                    "&:hover": {
                      backgroundColor: "#0056b3",
                    },
                  }}
                >
                  See More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
