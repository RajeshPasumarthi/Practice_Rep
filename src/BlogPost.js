import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './styles.css';

const BlogPost = ({ title, content }) => {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
