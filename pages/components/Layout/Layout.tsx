import React, { useState, useEffect } from "react";

// 스타일
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";
const cx = classNames.bind(styles);

type LayoutProps = {
	children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div className={cx("wrap")}>
			{/* 컨텐츠 */}
			{children}
		</div>
	);
}

export default Layout;
