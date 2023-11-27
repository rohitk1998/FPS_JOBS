import React, { useState, useEffect } from 'react';
import Banner07 from '../components/banner/Banner07';
import Category07 from '../components/category/Category07';
import dataCate from '../assets/fakeData/dataCategory';
import Job07 from '../components/jobs/Job07';
import dataJobs from '../assets/fakeData/dataJobs';
import Location from '../components/location';
import dataLocation from '../assets/fakeData/dataLocation';
import Box07 from '../components/boxicon/Box07';
import Couter from '../components/iconbox/Couter';
import Blog01 from '../components/blog/Blog01';
import dataBlog from '../assets/fakeData/dataBlog';
import Partner from '../components/partner';
import dataPartner from '../assets/fakeData/dataPartner';
import { Layout } from '../components/Layout';
import PromoImg from '../assets/images/home/promo-img-bg.jpg';
import { useNavigate } from 'react-router-dom';

Home_v7.propTypes = {};

function Home_v7(props) {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState({
    key: '',
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
    const getMobile = document.querySelector('.menu-mobile-popup');
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add('modal-menu--open')
      : getMobile.classList.remove('modal-menu--open');
  };

  useEffect(() => {
    const WOW = require('wowjs');
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

      {/* <Location data={dataLocation} /> */}
      <Box07 />

      {/* <div className="container">
        <Couter className="background1" />
      </div> */}

      {/* <Blog01 data={dataBlog} className="news-section" /> */}
      {/* <Partner data={dataPartner} /> */}
      <div className="relative flex flex-col w-[100%] items-start justify-start mb-20 mt-10 h-[500px]">
        <div className="w-[85%] min-w-[250px] rounded-[50px] mx-auto overflow-hidden shadow-md">
          <img
            src={PromoImg}
            alt=""
            className="w-[100%] min-h-[350px] sm:h-[350px] h-auto object-cover"
          />
          <div
            className="absolute xl:w-[40%] lg:w-[40%] sm:w-[60%] w-[90%] justify-start flex flex-col gap-3 items-start  
          2xl:top-[20%] xl:top-[4%] lg:top-[13%] md:top-[12%] sm:top-[10%] top-[17%]
          px-10"
          >
            <h1 className="xl:text-[50px] lg:text-[30px] sm:text-[30px] text-[17px]  font-bold">
              See Right Away Whether Candidates Are The Right Fit
            </h1>
            <p className="xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px] font-normal text-gray-500">
              We help candidates know whether they are qualified for a job and
              allow you to see their match potential giving you a better pool of
              qualified candidates to choose from.
            </p>
            <button
              onClick={() =>
                navigate('/jobs', {
                  state: { name: '', keyword: { value: '' } },
                })
              }
              className="bg-[#a83359] hover:bg-[#ce406d] rounded-lg w-[150px] min-w-[130px] h-[50px] p-2 text-white border-none shadow-sm"
            >
              Job Offers
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home_v7;
