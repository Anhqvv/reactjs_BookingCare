import React, { Component } from "react";
import styles from "./HeaderHome.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// export class HeaderHome extends Component {
//    render() {
//       return (
//          <div className={cx("wrapper")}>
//             <div className={cx("inner")}>now</div>
//          </div>
//       );
//    }
// }
function HeaderHome() {
   return <div className={cx("wrapper")}>
    <div className={cx("inner")}>
        <h2>hoooloo</h2>
    </div>
   </div>;
}
export default HeaderHome;
