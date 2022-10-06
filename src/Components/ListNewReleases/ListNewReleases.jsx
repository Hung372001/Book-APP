import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import { Tabs, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Features from "../FeaturesItem/FeaturesItem";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import ListFeaturesItem from "../ListFeaturesItem/ListFeaturesItem";
import "./style.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#f75454",
    },
    secondary: {
      main: "#f75454",
    },
  },
});
const ListNewReleases = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full  m-auto flex flex-col items-center mt-[40px] ">
        <div className="text-[1.875rem] mb-6">Sách Nổi Bật Trong Tháng</div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value} className="border-none">
            <Box sx={{ borderBottom: 1, borderColor: "white" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="primary tabs example"
                centered
              >
                <Tab
                  label="Mới cập nhật
"
                  value="1"
                />
                <Tab label="Sale" value="2" />
                <Tab label="Mua Nhiều Nhất" value="3" />
              </Tabs>
            </Box>
            <TabPanel value="1">
              <ListFeaturesItem />
            </TabPanel>
            <TabPanel value="2">
              <ListFeaturesItem />
            </TabPanel>
            <TabPanel value="3">
              <ListFeaturesItem />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default ListNewReleases;
