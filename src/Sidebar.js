import React from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Typography variant="h6" className="sidebar-heading">
        Categories
      </Typography>
      <List className="sidebar-list">
        <ListItem button className="sidebar-item">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Travel Adventures" />
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Healthy Living" />
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Tech Trends" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
