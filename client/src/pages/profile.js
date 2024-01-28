import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import './style.css';

const Profile = () => {
  return (
    <Container>
      <Grid container justifyContent="center" className="mt-5">
        <Grid item md={9} lg={7} xl={5}>
          <Card sx={{ borderRadius: '15px' }}>
            <CardContent className="p-4">
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <CardMedia
                    component="img"
                    alt="Profile Image"
                    height="140"
                    image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="h5" component="div">Danny McLoan</Typography>
                  <Typography variant="subtitle1" color="textSecondary">Senior Journalist</Typography>

                  <Grid container spacing={2} sx={{ backgroundColor: '#efefef', borderRadius: '10px', p: 2, mt: 2 }}>
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">Articles</Typography>
                      <Typography variant="h6">41</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">Followers</Typography>
                      <Typography variant="h6">976</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">Rating</Typography>
                      <Typography variant="h6">8.5</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
