import React, { useState, useEffect } from "react";

// 컴포넌트
import Layout from "./components/Layout/Layout";

// 스타일
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

function Home() {
	const [txts, setTxts] = useState([
		{
			id: 1,
			txt: [
				{
					text: "2등 당첨",
					styles: { color: "#e03131", fontSize: "30px" },
				},
				{
					text: " 신화의",
				},
			],
			isActive: false,
		},
		{
			id: 2,
			txt: [
				{
					text: "빅데이터 분석가와",
				},
			],
			isActive: false,
		},
		{
			id: 3,
			txt: [
				{
					text: "AI 인공지능 개발자가",
				},
			],
			isActive: false,
		},
		{
			id: 4,
			txt: [
				{
					text: "만났다",
					styles: { color: "#e03131", fontSize: "30px" },
				},
			],
			isActive: false,
		},
	]);

	const [cnt, setCnt] = useState(0);

	useEffect(() => {
		if (cnt <= txts.length) {
			setTimeout(() => {
				setTxts((old) =>
					old.map((txt) =>
						txt.id === cnt
							? {
									...txt,
									isActive: true,
							  }
							: txt
					)
				);
				setCnt((old) => old + 1);
			}, 350);
		}
	}, [cnt]);

	return (
		<Layout>
			<div className={cx("wrap")}>
				<div className={cx("container")}>
					<div className={cx("title-box")}>
						<span className={cx("active")}>로또</span>
						<span>의기술</span>
					</div>
					{txts.map((txt) => (
						<div
							key={txt.id}
							className={cx("text-box", {
								active: txt.isActive,
							})}
						>
							{txt.txt.map((txt2, ttIdx2) => (
								<span style={txt2.styles || {}}>
									{txt2.text}
								</span>
							))}
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}
export default Home;
