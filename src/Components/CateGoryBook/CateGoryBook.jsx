import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import { List, Tabs, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import imgbook from "./../../img/BannerBlock09_VanHoc_350x415.jpg";
import ListFeaturesItem from "../ListFeaturesItem/ListFeaturesItem";
import BookCateGorys from "../BookCateGorys/BookCateGorys";
const CateGoryBook = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container m-auto mt-[40px] ">
      <h1 class="text-[1.875rem] mb-6">Văn học</h1>
      <div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value} className="border-none">
            <Box sx={{ borderBottom: 1, borderColor: "white" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="primary tabs example"
              >
                <Tab
                  label="Văn Học Mới
"
                  value="1"
                />
                <Tab label="Tiểu Thuyết" value="2" />
                <Tab label="Ngôn Tình" value="3" />
                <Tab label="Văn Học Kinh Điển" value="4" />
              </Tabs>
            </Box>
            <div class=" flex justify-between">
              <img src={imgbook} />
              <TabPanel value="1">
                <BookCateGorys />
              </TabPanel>
              <TabPanel value="2"></TabPanel>
              <TabPanel value="3"></TabPanel>
              <TabPanel value="4"></TabPanel>
            </div>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default CateGoryBook;
