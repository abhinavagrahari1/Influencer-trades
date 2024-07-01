import React from "react";
import ChannelCard from "../components/channels/ChannelCard";
import Sidebar from "../components/channels/Sidebar";
import { Box, Stack } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Channels = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" className="items-start">
        <Sidebar />
        <Stack direction="column" flexGrow={1}>
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
        </Stack>
      </Stack>
      <Footer />
    </Box>
  );
};

export default Channels;
