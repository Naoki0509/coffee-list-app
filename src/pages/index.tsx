import { NextPage } from "next";
import { Auth, Button, IconLogOut } from "@supabase/ui";
import { Props } from "src/types";
import { client } from "src/lib/supabaseClient";
import { LayoutWrapper } from "src/components/LayoutWrapper";
import { useCallback, useEffect, useState } from "react";
import { Title, TitleList } from "src/components/TitleList";

const getTitles = async () => {
	const { data, error } = await client
		.from("manga_title")
		.select("*")
		.order("title");
	if (!error && data) {
		return data;
	}
	return [];
};

const Container = (props: Props) => {
	const { user } = Auth.useUser();
	const [text, setText] = useState<string>("");
	const [titles, setTitles] = useState<Title[]>([]);

	const getTitleList = useCallback(async () => {
		const data = await getTitles();
		setTitles(data);
	}, []);

	useEffect(() => {
		getTitleList();
	}, [user, getTitleList]);

	if (user) {
		return (
			<div>
				<div className="flex justify-center gap-2 p-4">
					<input
						className="w-full h-12 px-4 bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-700"
						placeholder="Filtering text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<TitleList
					titles={titles}
					uuid={user.id}
					getTitleList={getTitleList}
					filterText={text}
				/>
				<div className="flex justify-end mx-2 my-4">
					<Button
						size="medium"
						icon={<IconLogOut />}
						onClick={() => client.auth.signOut()}
					>
						Sign out
					</Button>
				</div>
			</div>
		);
	}

	return <>{props.children}</>;
};

const Home: NextPage = () => {
	return (
		<LayoutWrapper>
			<Auth.UserContextProvider supabaseClient={client}>
				<Container>
					<div className="flex justify-center pt-8">
						<div className="w-full sm:w-96">
							<Auth
								supabaseClient={client}
								providers={["google"]}
								socialColors={true}
							/>
						</div>
					</div>
				</Container>
			</Auth.UserContextProvider>
		</LayoutWrapper>
	);
};

export default Home;
