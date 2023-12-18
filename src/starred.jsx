// Starred.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Starred = () => {
  return (
    <div>
      <h2>Starred</h2>
      <Card>
        <img
          src="https://via.placeholder.com/150"
          alt="Starred Image"
          style={{ width: '100%', height: 'auto' }}
        />
        <CardContent>
          <Typography variant="h6">Starred Item</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Starred;
