import React, { useState } from "react";

// 스타일
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

function Home() {
	return (
		<div className={cx("wrap")}>
			<div className={cx("container")}></div>
		</div>
	);
}
export default Home;
