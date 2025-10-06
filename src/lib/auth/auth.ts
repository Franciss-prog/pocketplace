import axios from 'axios';
import { toast } from 'svelte-sonner';
interface AuthProps {
	usernameOrEmail?: string;
	isEmail?: boolean;
	password: string;

	// register
	username?: string;
	email?: string;
}

// authAction
export const authAction = async ({ usernameOrEmail, isEmail, password }: AuthProps) => {
	try {
		// form validation
		if (!usernameOrEmail || !password) {
			toast.error('Please fill in all fields', { duration: 2000 });
			return;
		}

		// check if email is valid
		if (isEmail && !/^\S+@\S+\.\S+$/.test(usernameOrEmail)) {
			isEmail = false;
		}

		// login
		await axios.post('/api/auth/login', {
			usernameOrEmail,
			isEmail,
			password
		});
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error.response?.data.message, { duration: 2000 });
			// clear the form
			usernameOrEmail = '';
			password = '';
			isEmail = false;
		}
	}
};

// registerAction
export const registerAction = async ({ username, email, password }: AuthProps) => {
	try {
		// validate the data
		if (!username || !email || !password) {
			toast.error('Please fill in all fields', { duration: 2000 });
			return;
		}

		// register
		await axios.post('/api/auth/register', {
			username,
			email,
			password
		});
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error.response?.data.message, { duration: 2000 });
			// clear the form
			username = '';
			email = '';
			password = '';
		}
	}
};
