import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from "react-router-dom";
import { Movie, Search, Tv, Whatshot } from "@mui/icons-material";


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        bgcolor: "purple",
        zIndex: "100"
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        component={Link}
        to="/"
        label="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        component={Link}
        to="/movies"
        label="Movies"
        icon={<Movie />}
      />

      <BottomNavigationAction
        style={{ color: "white" }}
        component={Link}
        to="/series"
        label="Tv Series"
        icon={<Tv />}
      />

      <BottomNavigationAction
        style={{ color: "white" }}
        component={Link}
        to="/search"
        label="Search"
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
