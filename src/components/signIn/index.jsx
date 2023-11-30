import { useForm } from 'react-hook-form';
import { Input } from '../common/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/thunk/auth.thunk';
import { Link } from 'react-router-dom';

const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

function SignIn() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log('DATA ON LOGIN SUBMIT', data);
    dispatch(loginUser(data));
  };

  return (
    <section className="min-h-[75vh] flex justify-center items-center">
      <div
        className="w-[30%] min-w-[260px] rounded-lg flex flex-col items-center mx-auto justify-center gap-4 p-4 min-h-[44vh]"
        style={{ border: '1px solid lightgray' }}
      >
        <h4 className="text-2xl font-bold">Login</h4>
        <form
          className="flex flex-col gap-2 w-full lg:w-[50%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Email"
            name="email"
            type={'text'}
            register={register}
            error={errors?.email?.message}
          />
          <Input
            label="Password"
            name="password"
            type={'password'}
            register={register}
            error={errors?.password?.message}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[100%] shadow-md h-[50px] bg-[#a83359] hover:bg-[#ce406d] p-2 text-white border-none rounded font-semibold"
            >
              Login
            </button>
          </div>
        </form>
        <div className="w-[100%] flex justify-center items-center">
          <h2 className="font-semibold">
            Create an account?{' '}
            <Link
              to={'/createAccount'}
              className="font-semibold text-[#a83359]"
            >
              Sign up
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
