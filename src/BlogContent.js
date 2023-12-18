import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Badge, Card, CardContent, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css';
import BlogPost from './BlogPost';
import Divider from '@mui/material/Divider';

const BlogContent = () => {
  return (
    <div className="blog-content">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Badge color="primary" badgeContent={4}>
            <Typography variant="h6">Featured Posts</Typography>
          </Badge>
        </AccordionSummary>
        <AccordionDetails>
        <Stack direction="row"  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}>
            <Card>
                <CardContent>
                <Typography variant="h5" gutterBottom>
                    The Marvels of Underwater Life
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Dive into the enchanting world beneath the waves. Explore the diversity of marine life and discover the wonders of underwater ecosystems.
                </Typography>
                </CardContent>
            </Card> 
            <BlogPost title="Discover the Wonders of Nature" content="Exploring the beauty of nature is a mesmerizing experience. In this post, we'll delve into the wonders of our natural world." />
            <BlogPost title="The Art of Cooking: A Culinary Journey" content="Embark on a culinary adventure with our guide to the art of cooking. From simple recipes to gourmet delights, there's something for every food enthusiast." />
            <BlogPost title="Unveiling the Mysteries of the Cosmos" content="Delve into the cosmos and unravel the mysteries of the universe. Learn about celestial bodies, space exploration, and the fascinating world beyond our planet." />
        </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BlogContent;
