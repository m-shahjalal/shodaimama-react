import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { loginUser, userSelector } from '../redux/slices/UserSlice';

const LoginScreen = () => {
	const dispatch = useDispatch();
	const { state } = useLocation();
	const { isFetching } = useSelector(userSelector);
	const { loggedIn } = useAuth();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			dispatch(loginUser(values));
		},
		validate: ({ email, password }) => {
			const errors = {};
			const regex =
				/^([a-z\d.-_]+)@([a-z\d-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

			if (!email.length) {
				errors.email = 'email is required';
			} else if (!regex.test(email)) {
				errors.email = 'email is not valid';
			}

			if (!password) {
				errors.password = 'password is required';
			} else if (password.length < 6) {
				errors.password = 'At least length 6 characters';
			}
			return errors;
		},
	});

	useEffect(() => {
		if (loggedIn) {
			state ? navigate(state?.pathname, { state }) : navigate('/');
		}
	}, [loggedIn, navigate, state]);

	return (
		<main className='form-signin'>
			<form onSubmit={formik.handleSubmit}>
				<h1 className='h3 mb-4 fw-normal text-center '>
					Log in to process
				</h1>
				{state?.message && (
					<div className='text-success my-3 text-lead text-center'>
						{state.message}
					</div>
				)}
				<div className='form-floating'>
					<input
						name='email'
						type='email'
						className='form-control mb-2'
						onChange={formik.handleChange}
						value={formik.values.email}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.email && formik.touched.email ? (
						<label className='text-danger' htmlFor='floatingInput'>
							{formik.errors.email}
						</label>
					) : (
						<label htmlFor='floatingInput'>Email address</label>
					)}
				</div>
				<div className='form-floating'>
					<input
						type='password'
						name='password'
						className='form-control mb-2'
						value={formik.values.password}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{formik.errors.password && formik.touched.password ? (
						<label className='text-danger' htmlFor='floatingInput'>
							{formik.errors.password}
						</label>
					) : (
						<label htmlFor='floatingPassword'>Password</label>
					)}
				</div>
				<div className='text-end mb-1'>
					<Link className='text-reset fs-6' to='/forget-password'>
						Forget Password?
					</Link>
				</div>
				<button
					className='w-100 btn btn-lg orange-bg mb-1 d-flex justify-content-center align-items-center'
					type='submit'>
					{isFetching && (
						<div
							style={{
								width: '24px',
								height: '24px',
								lineHeight: '30px',
							}}
							className='loader'></div>
					)}
					Sign in
				</button>
				<Link
					state={{ ...state }}
					to='/register'
					className='mt-4 text-reset'>
					<small>Don't have an account yet?</small>
				</Link>
			</form>
		</main>
	);
};

export default LoginScreen;
