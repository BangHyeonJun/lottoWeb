import React, { useState } from "react";

// 컴포넌트
import Layout from "./components/Layout/Layout";

// 스타일
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

function Home() {
	return (
		<Layout>
			<div className={cx("wrap")}>테스트</div>
		</Layout>
	);
}
export default Home;
