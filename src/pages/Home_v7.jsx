import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Banner07 from "../components/banner/Banner07";
import Category07 from "../components/category/Category07";
import dataCate from "../assets/fakeData/dataCategory";
import Job07 from "../components/jobs/Job07";
import dataJobs from "../assets/fakeData/dataJobs";
import Location from "../components/location";
import dataLocation from "../assets/fakeData/dataLocation";

import Box07 from "../components/boxicon/Box07";
import Couter from "../components/iconbox/Couter";
import Blog01 from "../components/blog/Blog01";
import dataBlog from "../assets/fakeData/dataBlog";
import Partner from "../components/partner";
import dataPartner from "../assets/fakeData/dataPartner";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Collapse } from "react-collapse";
import logo from "../assets/images/logo.png";
import { Layout } from "../components/Layout";

Home_v7.propTypes = {};

function Home_v7(props) {
  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  return (
    <Layout>
      <Banner07 />
      <Category07 data={dataCate} />

      <Job07 data={dataJobs} className="jobs-section" />

      <Location data={dataLocation} />
      <Box07 />

      <div className="container">
        <Couter className="background1" />
      </div>

      <Blog01 data={dataBlog} className="news-section" />
      <Partner data={dataPartner} />
    </Layout>
  );
}

export default Home_v7;
