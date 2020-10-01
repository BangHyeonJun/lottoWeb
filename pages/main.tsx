import React, { useState } from "react";

// 컴포넌트
import Layout from "./components/Layout/Layout";

// 스타일
import classNames from "classnames/bind";
import styles from "./main.module.scss";
const cx = classNames.bind(styles);

function Main() {
	return (
		<Layout>
			<div className={cx("wrap")}>
				<div className={cx("container")}>
					<div className={cx("header_wrap")}>
						{/* 타이틀 */}
						<div className={cx("title_box")}>
							<span>로</span>
							<span>또</span>
							<span>의기술</span>
						</div>

						<div className={cx("description_wrap")}>
							<div className={cx("description-box")}>
								<span className={cx("red")}>2등당첨</span>
								<span>신화의</span>
								<span className={cx("violet")}>
									빅데이터분석가
								</span>
								<span>와</span>
							</div>
							<div className={cx("description-box")}>
								<span className={cx("violet")}>
									인공지능개발자
								</span>
								<span>의기술로</span>
								<span className={cx("red")}>당첨</span>
								<span>을알려드립니다</span>
							</div>
							{/* <div
								className={cx("description-box")}
							></div> */}
						</div>
					</div>

					{/* 컨텐츠 */}
					<div className={cx("contents_wrap")}>
						<div className={cx("contents_container")}>테스트</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
export default Main;
