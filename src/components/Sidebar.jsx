import React from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Avatar, List, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const array1 = [
  {
    text: "Dashboard",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];
const Array2 = [
  { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq",
  },
];

const Array3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
  { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];
export default function Sidebar({ open, handleDrawerClose }) {
  const location = useLocation();
  const theme = useTheme();
  const Nav = useNavigate();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      {open ? (
        <Avatar
          alt="Remy Sharp"
          src=".\WhatsApp Image 2024-02-10 at 12.11.09 AM (2)-modified.png"
          sx={{
            transition: ".5s",
            width: 100,
            height: 100,
            borderRadius: "50%",
            mx: "auto",
            ":hover": {
              border: "1px solid ,gray",
              boxShadow: "2px 1px 1px gray",
            },
          }}
        />
      ) : null}
      <Typography
        align="center"
        variant="h5"
        color={"inherit"}
        sx={{ fontSize: open ? 17 : 0, transition: "0.5s" }}
      >
        Omar Abdalrahman
      </Typography>
      <Typography
        align="center"
        color={theme.palette.info.main}
        sx={{ fontSize: open ? 15 : 0, transition: "0.5s" }}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {array1.map((i) => (
          <ListItem key={i.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                Nav(i.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: location.pathname === i.path ? "gray" : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {i.icon}
              </ListItemIcon>
              <ListItemText primary={i.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {Array2.map((i) => (
          <ListItem key={i.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                Nav(i.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: location.pathname === i.path ? "gray" : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {i.icon}
              </ListItemIcon>
              <ListItemText primary={i.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((i) => (
          <ListItem key={i.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                Nav(i.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: location.pathname === i.path ? "gray" : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {i.icon}
              </ListItemIcon>
              <ListItemText primary={i.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
