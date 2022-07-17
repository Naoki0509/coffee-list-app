import { FC, useCallback, useState } from "react";
import { client } from "src/lib/supabaseClient";
import { Image } from "next/image";

type props = {
	uuid: string;
	getTitleList: VoidFunction;
};

export const AddTitle: FC<props> = (props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [title, setTitle] = useState<string>("");
	const [anthor, setAnthor] = useState<string>("");

	const openModal = useCallback(() => {
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => {
		setTitle("");
		setAnthor("");
		setIsOpen(false);
	}, []);

	const handleAdd = useCallback(
		async (uuid: string) => {
			if (title === "") {
				alert("タイトルを入力してください");
				return;
			}
			const { data, error } = await client
				.from("manga_title")
				.insert([{ user_id: uuid, title: title, anthor: anthor }]);
			if (error) {
				alert(error);
			} else {
				if (data) {
					props.getTitleList();
					closeModal();
				}
			}
		},
		[title, anthor, props, closeModal]
	);

	return (
		<div>
			<div className="p-2 border cursor-pointer" onClick={openModal}>
				<div className="flex justify-center"></div>
			</div>
		</div>
	);
};
