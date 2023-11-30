import React, { useEffect, useState } from 'react';
import SelectLocation from '../dropdown';
import { apiHandler } from '../../services/api';
import { getLocations } from '../../services/api/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/slice/loading.slice';
import { useForm } from 'react-hook-form';
import { searchJobs } from '../../redux/thunk/job.thunk';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { setJobLocations, setSearchObj } from '../../redux/slice/job.slice';

Banner07.propTypes = {};

const formValidation = yup.object().shape({
  name: yup.string().required(),
  keyword: yup.string().required(),
});

function Banner07(props) {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userToken } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    watch,
  } = useForm();

  // {
  //   resolver : yupResolver(formValidation)
  // }

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    const res = await apiHandler(`${getLocations}`, 'GET');
    console.log(res.data, 'res');
    if (res?.data?.status === 'success') {
      setLocations(res?.data?.cities);
      dispatch(setJobLocations(res?.data?.cities));
    }
  };

  const filterJobs = (data) => {
    console.log('data', data, location);
    navigate('/jobs', { state: { ...data, keyword: location } });
    dispatch(setSearchObj({ ...data, keyword: location }));
  };

  return (
    <section className="tf-slider sl5">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <div className="text-center heading">
                <h2 className="text-gray-800 text-md">
                  Find the job that fits your life
                </h2>
                <p className="text-gray-800 text-md">
                  Resume-Library is a true performance-based job board. Enjoy
                  custom hiring products and access to up to 10,000 new resume
                  registrations daily, with no subscriptions or user licences.
                </p>
              </div>
              <div className="icon ic1 ani3">
                <img
                  src={require('../../assets/images/review/icon6.png')}
                  alt="images"
                />
              </div>
              <div className="icon ic2 ani6">
                <img
                  src={require('../../assets/images/review/icon5.png')}
                  alt="images"
                />
              </div>
              <div className="form-sl">
                <form
                  className="bg-gray-50 rounded-xl"
                  onSubmit={handleSubmit(filterJobs)}
                >
                  <div className="row-group-search home1 st">
                    <div className="form-group-1">
                      <span className="icon-search search-job"></span>
                      <input
                        type="text"
                        className="input-filter-search"
                        placeholder="Job title, key words or company"
                        {...register('name')}
                      />
                    </div>
                    <div className="form-group-2">
                      <span className="icon-map-pin"></span>
                      {locations && (
                        <SelectLocation
                          setLocation={setLocation}
                          locations={locations}
                        />
                      )}
                    </div>
                    <div className="form-group-4">
                      <button
                        type="submit"
                        className="btn btn-find shadow-md h-[50px] bg-[#a83359] hover:bg-[#ce406d]"
                      >
                        Find Jobs
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner07;
