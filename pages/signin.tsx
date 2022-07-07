import { useForm } from "react-hook-form";
import { NextPage } from "next";
import { Form } from "../components/Form";
import { supabase } from "../lib/supabaseClient";

type IForm = {
	email: string;
	password: string;
};

const Signin: NextPage = () => {
	const { register, handleSubmit } = useForm<IForm>();
	const handleSignin = ({ email, password }: IForm) => {
		supabase.auth.signIn({ email, password });
	};

	const inputList = [
		{ type: "email", name: "email", ref: register },
		{ type: "password", name: "password", ref: register },
	];

	return (
		<div className="flex items-center justify-center">
			<Form
				onSubmit={handleSubmit(handleSignin)}
				inputList={inputList}
				buttonText="サインイン"
			/>
			<h1>Sign In</h1>
		</div>
	);
};

export default Signin;
