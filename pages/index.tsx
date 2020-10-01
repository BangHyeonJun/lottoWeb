import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage, NextPageContext } from "next";
import MobileDetect from "mobile-detect";
import { isMobile } from "react-device-detect";

// 컴포넌트
import Layout from "./components/Layout/Layout";

// 스타일
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

interface IProps {
	isMobile: boolean;
}

function Home({ isMobile }) {
	const router = useRouter();
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
	const [end, setEnd] = useState(false);

	useEffect(() => {
		if (!isMobile) {
			setTimeout(() => {
				setEnd(true);
				setTimeout(() => {
					router.replace("/main");
				}, 1000);
			}, 3500);
		}
	}, []);

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
			<div className={cx("wrap", { active: end })}>
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

Home.getInitialProps = async (ctx: NextPageContext) => {
	let mobile;

	if (ctx.req) {
		const md = new MobileDetect(ctx.req.headers["user-agent"]);
		mobile = !!md.mobile();
	} else {
		mobile = isMobile;
	}
	return { isMobile: mobile };
};

export default Home;
