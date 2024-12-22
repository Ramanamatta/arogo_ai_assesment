import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import './Post.css'; // Import the custom CSS

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/posts/${id}`).then(() => {
      navigate("/");
    });
  };

  if (!post) return <div className="container mt-4">Loading...</div>;

  return (
    <Container maxWidth="md" className="mt-4">
      <Card
        sx={{
          background: "wheat",
          color: "#fff",
          borderRadius: "30px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            {post.title}
          </Typography>
          
          {/* Inner Card with Light and Dark Colors */}
          <Card
            sx={{
              background: "#f9f9f9", // Light color background
              color: "#333", // Dark color text
              borderRadius: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              marginBottom: "20px",
              width:"80%",
              marginLeft:"90px"
            }}
          >
            <CardContent>
              <Typography variant="body1" color="black" paragraph>
                {post.content}
              </Typography>
            </CardContent>
          </Card>

        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            color="error"
            sx={{
              backgroundColor: "#007bff", // Bootstrap primary color
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "none", // To prevent uppercase text
              "&:hover": {
                backgroundColor: "#0056b3", // Darker blue on hover
              },
            }}
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              borderRadius: "8px",
              marginLeft: "10px",
              background: "linear-gradient(45deg, #6a82fb, #fc5c7d)",
              "&:hover": {
                background: "linear-gradient(45deg, #5a72df, #e54b74)",
                boxShadow: "0 6px 15px rgba(76, 145, 255, 0.4)",
              },
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "none",
            }}
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
