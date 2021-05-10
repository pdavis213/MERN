import React, { useState } from 'react';

const Tabs = props => {

    const[tabs, setTabs] = useState();

    const tab = [
        "tab 1",
        "tab 2",
        "tab 3"
    ];

    return(
        <div class="container mt-5">
            <h1>Tabs Assignment</h1>
            <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <a className={tabs === 0 ? "nav-link active": "nav-link"} href="/#" onClick={i => setTabs(0)}>Tab 1</a>
                </li>
                <li className="nav-item">
                    <a className={tabs === 1 ? "nav-link active": "nav-link"} href="/#" onClick={i => setTabs(1)}>Tab 2</a>
                </li>
                <li className="nav-item">
                    <a className={tabs === 2 ? "nav-link active": "nav-link"} href="/#" onClick={i => setTabs(2)}>Tab 3</a>
                </li>
            </ul>
            <div className="alert">{tab[tabs]}</div>
        </div>
    )
}
export default Tabs;