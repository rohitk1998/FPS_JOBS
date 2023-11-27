import React, { useContext, useEffect, useState } from 'react';
import { Input } from '../common/Input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RSelect } from '../common/RSelect';
import { Link } from 'react-router-dom';
import { apiHandler } from '../../services/api';
import {
  getCities,
  getIndustries,
  getJobTitle,
  getStates,
  signup,
} from '../../services/api/constants';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/thunk/auth.thunk';
import { setLoading } from '../../redux/slice/loading.slice';

const registerSchema = yup.object().shape({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  email: yup.string().required('Email is required'),
  mobile: yup.string().required('Mobile Number is required'),
  password: yup.string().required('Password is required'),
  confirm_password: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
  industry: yup.string().required('Industry is required'),
  subject: yup.string().required('Job Title is required'),
  current_salary: yup.string().required('Current salary is required'),
  expected_salary: yup.string().required('Expected salary is required'),
});

const salary = [
  {
    label: '1 Lakhs',
    value: '1 Lakhs',
  },
  {
    label: '2 Lakhs',
    value: '2 Lakhs',
  },
  {
    label: '3 Lakhs',
    value: '3 Lakhs',
  },
  {
    label: '4 Lakhs',
    value: '4 Lakhs',
  },
  {
    label: '5 Lakhs',
    value: '5 Lakhs',
  },
  {
    label: '6 Lakhs',
    value: '6 Lakhs',
  },
  {
    label: '7 Lakhs',
    value: '7 Lakhs',
  },
  {
    label: '8 Lakhs',
    value: '8 Lakhs',
  },
  {
    label: '9 Lakhs',
    value: '9 Lakhs',
  },
  {
    label: '10 Lakhs',
    value: '10 Lakhs',
  },
  {
    label: '11 Lakhs',
    value: '11 Lakhs',
  },
  {
    label: '12 Lakhs',
    value: '12 Lakhs',
  },
  {
    label: '13 Lakhs',
    value: '13 Lakhs',
  },
  {
    label: '14 Lakhs',
    value: '14 Lakhs',
  },
  {
    label: '15 Lakhs',
    value: '15 Lakhs',
  },
];
function SignUp() {
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    watch,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const selectedState = watch('state');
  const selectedIndustry = watch('industry');
  const [stateData, setStateData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [industriesData, setIndustriesData] = useState([]);
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    fetchStates();
    fetchIndustries();
  }, []);

  useEffect(() => {
    selectedState && fetchCities(selectedState);
  }, [selectedState]);

  useEffect(() => {
    selectedIndustry && fetchJobTitle(selectedIndustry);
  }, [selectedIndustry]);

  const fetchStates = async () => {
    setLoading(true);
    const res = await apiHandler(`${getStates}`, 'GET');
    if (res.data.status === 'success') {
      const output = res.data.states.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setStateData(output);
    }
    setLoading(false);
  };

  const fetchCities = async (state) => {
    setLoading(true);
    const res = await apiHandler(`${getCities}?stateID=${state}`, 'GET');
    if (res.data.status === 'success') {
      const output = res.data.cities.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setCitiesData(output);
    }
    setLoading(false);
  };

  const fetchIndustries = async () => {
    const res = await apiHandler(`${getIndustries}`, 'GET');
    if (res.data.status === 'success') {
      const output = res.data.industries.map((item) => ({
        value: item.ID,
        label: item.category,
      }));
      setIndustriesData(output);
    }
  };

  const fetchJobTitle = async (industry) => {
    setLoading(true);
    const res = await apiHandler(`${getJobTitle}`, 'POST', {
      industry_id: industry,
    });
    if (res.data.status === 'success') {
      const output = res.data.jobs.map((item) => ({
        value: item.ID.toString(),
        label: item.function,
      }));
      setJobsData(output);
    }
    setLoading(false);
  };

  const submitHandler = (data) => {
    console.log(data, 'data');
    data.resume = 'dldldl';
    dispatch(registerUser(data));
  };

  useEffect(() => {
    console.log('userToken', userToken);
  }, [userToken]);

  return (
    <section className="account-section">
      <div>
        <div className="flex flex-col items-center justify-center gap-4 xl:h-[70vh] lg:h-[70vh] md:h-[70vh] sm:h-auto h-auto">
          <h4 className="text-2xl font-bold">Register Your Account</h4>
          <form
            className="flex flex-col gap-4 w-[80%] mt-10"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Input
                label="First Name"
                name="first_name"
                register={register}
                error={errors?.first_name?.message}
              />
              <Input
                label="Last Name"
                name="last_name"
                register={register}
                error={errors?.last_name?.message}
              />
              <Input
                label="Email"
                name="email"
                register={register}
                error={errors?.email?.message}
              />
              <Input
                label="Mobile Number"
                name="mobile"
                register={register}
                error={errors?.mobile?.message}
              />
              <Input
                label="Password"
                name="password"
                register={register}
                error={errors?.password?.message}
              />
              <Input
                label="Confirm Password"
                name="confirm_password"
                register={register}
                error={errors?.confirm_password?.message}
              />
              <RSelect
                label="State"
                option={stateData}
                setValue={(data) => setValue('state', data)}
                error={errors?.state?.message}
                setError={(data) => setError('state', data)}
              />
              <RSelect
                label="City"
                option={citiesData}
                setValue={(data) => setValue('city', data)}
                error={errors?.city?.message}
                setError={(data) => setError('city', data)}
              />
              <RSelect
                label="Industry"
                option={industriesData}
                setValue={(data) => setValue('industry', data)}
                error={errors?.industry?.message}
                setError={(data) => setError('industry', data)}
              />
              <RSelect
                label="Job Title"
                option={jobsData}
                setValue={(data) => setValue('subject', data)}
                error={errors?.subject?.message}
                setError={(data) => setError('subject', data)}
              />
              <RSelect
                label="Current Drawn Salary (Annual)"
                option={salary}
                setValue={(data) => setValue('current_salary', data)}
                error={errors?.current_salary?.message}
                setError={(data) => setError('current_salary', data)}
              />
              <RSelect
                label="Expected Salary (Annual)"
                option={salary}
                setValue={(data) => setValue('expected_salary', data)}
                error={errors?.expected_salary?.message}
                setError={(data) => setError('expected_salary', data)}
              />
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="w-[50%] shadow-md h-[50px] bg-[#a83359] hover:bg-[#ce406d] p-2 text-white border-none rounded font-semibold"
              >
                Register
              </button>
            </div>
          </form>
          <h2 className="font-semibold">
            Already have an account?{' '}
            <Link to={'/login'} className="font-semibold text-[#a83359]">
              Sign in
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
