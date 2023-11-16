import { useForm } from 'react-hook-form';
import { Input } from '../common/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/thunk/auth.thunk';

const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required')
});

function SignIn() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    watch,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log('DATA ON LOGIN SUBMIT', data);
    dispatch(loginUser({payload : data}))
  };

  return (
    <section className="account-section">
      <div className="flex flex-col items-center justify-center gap-4 p-4 h-[50vh]">
        <h4 className="text-2xl font-bold">Login</h4>
        <form
          className="flex flex-col gap-4 w-full lg:w-[30%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Email"
            name="email"
            register={register}
            error={errors?.email?.message}
          />
          <Input
            label="Password"
            name="password"
            register={register}
            error={errors?.password?.message}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[50%] bg-[#a83359] p-2 text-white border-none rounded font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
