// SendMail.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SendMail = () => {
  return (
    <div>
      <h2>Send Mail</h2>
      <Card>
        <img
          src="https://via.placeholder.com/150"
          alt="Send Mail"
          style={{ width: '100%', height: 'auto' }}
        />
        <CardContent>
          <Typography variant="h6">Compose New Email</Typography>
          <Typography variant="body2">Write your new email and send it to someone special.</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SendMail;
