import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventIcon from "@mui/icons-material/Event";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    {/* <Link color="inherit" underline="none" href="/signed_in/student_dashboard/notification"> */}
    {/* <Link
      to="/admin/signed_in/dashboard/notifications"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <NotificationsIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItem>
    </Link> */}

    <Link
      to="/admin/signed_in/dashboard/student_report"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Student Reports" />
      </ListItem>
    </Link>

    <Link
      to="/admin/signed_in/dashboard/company_report"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <WorkIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Company Reports" />
      </ListItem>
    </Link>

    <Link
      to="/admin/signed_in/dashboard/events"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <EventIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Events" />
      </ListItem>
    </Link>

    <Link
      to="/admin/signed_in/dashboard/add_event"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <AddIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Add New Event" />
      </ListItem>
    </Link>

    <Link
      to="/admin/signed_in/dashboard/records"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Records" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <LogoutIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </Link>
  </div>
);
