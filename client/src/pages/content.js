import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
  Collapse,
  IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './style.css';

const Content = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const handleCardClick = (blog) => {
    setSelectedCard(selectedCard === blog ? null : blog);
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs/')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error(error));
  }, []);

  console.log(blogs);

  return (
    <Container maxWidth="md">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
        `}
      </style>
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} key={blog.title}>
            <Card className="card" style={{ borderRadius: 16, display: 'flex', flexDirection: 'row', height: '100%', marginTop: '10px' }}>
              <CardContent style={{ flex: 1 }}>
                <Typography variant="h5" color="initial" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {blog.title}
                </Typography>
                <Collapse in={selectedCard === blog}>
                  <Typography variant="body1" color="initial" marginTop={"10px"}>
                    {blog.text}
                  </Typography>
                </Collapse>
              </CardContent>
              <CardActions style={{ alignSelf: 'flex-end' }}>
                <IconButton onClick={() => handleCardClick(blog)}>
                  {selectedCard === blog ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Content;
