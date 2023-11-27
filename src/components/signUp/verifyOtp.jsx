import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyRegisterOtp } from '../../redux/thunk/auth.thunk';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const otpSchema = yup.object().shape({
    otp1: yup.number().required(),
    otp2: yup.number().required(),
    otp3: yup.number().required(),
    otp4: yup.number().required(),
    otp5: yup.number().required(),
    otp6: yup.number().required()
})

export const VerifyOtp = () => {
  const dispatch = useDispatch();

  const { registredMobileOrEmail } = useSelector((state)=> state.auth)

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver : yupResolver(otpSchema)
  });

  const onSubmit = (data) => {
    console.log("data",data);
    let data1 = {
      mobile: registredMobileOrEmail,
      otp: `${data.otp1}${data.otp2}${data.otp3}${data.otp4}${data.otp5}${data.otp6}`,
    };
    dispatch(verifyRegisterOtp(data1));
  };
  return (
    <div className="w-[100%] h-[70vh] flex flex-col justify-center items-center">
        <div className='w-[60%]'>
        <div className="flex w-[100%] justify-center items-center">
        <p className="mx-auto mb-5 text-[15px] font-normal text-gray-500">
          Please enter your verification code to complete your registration.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[100%] flex flex-col justify-center items-center gap-10">
          <div className="flex gap-2">
            <input
              className="w-[50px] h-[50px] border-[1px] rounded-lg p-3"
              maxLength={1}
              placeholder=''
              {...register('otp1', {
                valueAsNumber: true,
              })}
            />
            <input
              className="w-[50px] h-[50px] border-[1px] rounded-lg p-3"
              maxLength={1}
              placeholder=''
              {...register('otp2', {
                valueAsNumber: true,
              })}
            />
            <input
              className="w-[50px] h-[50px] border-[1px] rounded-lg p-3"
              maxLength={1}
              placeholder=''
              {...register('otp3', {
                valueAsNumber: true,
              })}
            />
            <input
              className="w-[50px] h-[50px] border-[1px] rounded-lg p-3"
              maxLength={1}
              placeholder=''
              {...register('otp4', {
                valueAsNumber: true,
              })}
            />
            <input
              className="w-[50px] h-[50px] border-[1px] rounded-lg p-3"
              maxLength={1}
              placeholder=''
              {...register('otp5', {
                valueAsNumber: true,
              })}
            />
            <input
              className="w-[50px] h-[50px] border-[1px] rounded-lg p-3"
              maxLength={1}
              placeholder=''
              {...register('otp6', {
                valueAsNumber: true,
              })}
            />
          </div>
          <button
            type="submit"
            className="w-[30%] shadow-md h-[50px] max-w-[300px] min-w-[150px] bg-[#a83359] hover:bg-[#ce406d] p-2 text-white border-none rounded font-semibold"
          >
            Verify OTP
          </button>
        </div>
      </form>
        </div>
    </div>
  );
};
