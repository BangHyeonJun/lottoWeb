import React from "react";

// 스타일
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function Header() {
	return <div className={cx("wrap")}>헤더입니다</div>;
}

export default Header;
