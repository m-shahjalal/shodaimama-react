import { useSelector } from 'react-redux';

const useAuth = () => {
    const user = useSelector((state) => state.user);
    const auth = {
		email: user.email,
		name: user.name,
		loading: user.isFetching,
        loggedIn: user.isSuccess,
	};
    return auth;
};

export default useAuth
