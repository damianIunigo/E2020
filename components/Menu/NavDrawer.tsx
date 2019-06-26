import Link from "next/link";
import {
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
  Divider,
  ListItemText
} from "@material-ui/core";
import { CustomIcon, CustomToolbar, IconE2020 } from "./Menu.styled";

export default ({ drawerOpened, toggleDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={drawerOpened}
      onClose={() => toggleDrawer(false)}
    >
      <div
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <CustomToolbar>
          <List disablePadding={true}>
            <ListItem disableGutters={true} dense={true}>
              <IconE2020 />
            </ListItem>
            <ListItem disableGutters={true} dense={true}>
              <Typography component="h2">
                <Box
                  fontWeight="fontWeightBold"
                  fontSize={16}
                  style={{
                    color: "#FFF",
                    textShadow:
                      "1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000"
                  }}
                >
                  Estudiantes 2020
                </Box>
              </Typography>
            </ListItem>
          </List>
        </CustomToolbar>
        <Divider />
        <List>
          <ListItem button key={"Home"} divider={true}>
            <Link href="/">
              <Box fontSize={12} fontWeight="fontWeightBold">
                <CustomIcon fontSize={"small"}>home</CustomIcon>Home
              </Box>
            </Link>
          </ListItem>
          <ListItem button key={"Que es E2020"} divider={true}>
            <Link href="/about-this">
              <Box fontSize={12} fontWeight="fontWeightBold">
                <CustomIcon fontSize={"small"}>star</CustomIcon>Que es E2020
              </Box>
            </Link>
          </ListItem>
          <ListItem button key={"Proyectos"} divider={true}>
            <Link href="/projects">
              <Box fontSize={12} fontWeight="fontWeightBold">
                <CustomIcon fontSize={"small"}>folder_special</CustomIcon>
                Proyectos
              </Box>
            </Link>
          </ListItem>
          <ListItem button key={"Quienes somos"} divider={true}>
            <Link href="/about-us">
              <Box fontSize={12} fontWeight="fontWeightBold">
                <CustomIcon fontSize={"small"}>people</CustomIcon>Quienes somos
              </Box>
            </Link>
          </ListItem>
          <ListItem button key={"Album de Figuritas"} divider={true}>
            <Link href="/album">
              <Box fontSize={12} fontWeight="fontWeightBold">
                <CustomIcon fontSize={"small"}>photo_album</CustomIcon>Album de
                Figuritas
              </Box>
            </Link>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
