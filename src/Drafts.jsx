// DraftsPage.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Drafts = () => {
  return (
    <div>
      <h2>Drafts</h2>
      <Card>
        <img
          src="https://via.placeholder.com/150"
          alt="Drafts Image"
          style={{ width: '100%', height: 'auto' }}
        />
        <CardContent>
          <Typography variant="h6">Drafted Email</Typography>
          <Typography variant="body2">
            Your drafted email is waiting to be completed and sent.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DraftsPage;
