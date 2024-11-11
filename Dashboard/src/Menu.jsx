import React from "react";

import { LineChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts";
const Menu = () =>{
    const uData = [60000, 7338, 45886, 9221, 30650, 19094, 3490,45886, 9221, 30650, 19094, 3490];
    const pData = [0, 6338, 60886, 10221, 0, 19094, 8490,45886, 0, 30650, 19094, 0];
    const xLabels = [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec '
      ];
    const imgLogo = "./images/illustrtion/react-logo.webp";
    return(
        <React.Fragment>
            <main className="d-lg-flex">
            <section className="d-lg-none">
                <div className="d-flex justify-content-between px-4 pt-3">
                    <div>
                    <button
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasScrolling"
                        aria-controls="offcanvasScrolling"
                        id="mobile-bar-btn"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    </div>
                    <div
                    className="offcanvas offcanvas-start"
                    data-bs-scroll="true"
                    data-bs-backdrop="false"
                    tabindex="-1"
                    id="offcanvasScrolling"
                    aria-labelledby="offcanvasScrollingLabel"
                    >
                    <div className="offcanvas-header">
                        <div>Dashboard</div>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <div>
                        <h2 className="user-detail">MENU</h2>
                        <div className="menu-item">
                            <div><a href="/" className="text-reset">Dashboard</a></div>
                            <div><a href="/" className="text-reset">Icons</a></div>
                            <div><a href="/" className="text-reset">Map</a></div>
                            <div><a href="/" className="text-reset">Notifications</a></div>
                            <div><a href="/" className="text-reset">User Profile</a></div>
                            <div><a href="/" className="text-reset">Table List</a></div>
                            <div><a href="/" className="text-reset">Typography</a></div>
                            <div><a href="/" className="text-reset">RTL Support</a></div>
                            <div><a href="/" className="text-reset">Upgrade to pro</a></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="heading-mobile"><h1>Dashboard</h1></div>
                    <div>
                    
                    <div class="dropdown">
                        <button
                        class=" dropdown-toggle bg-transparent"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    <ul class="dropdown-menu">
                        <li>
                        <a className="dropdown-item" href="/">
                        Profile
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="/">
                        Settings
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="/">
                        Logout
                        </a>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
                </section>
                <section className="menu-laptop p-2 d-none d-lg-block p-lg-0">
                    <h1 id="heading-lg">Dashboard</h1>
                    <div className="menu-list">
                        <h2 className="user-detail">MENU</h2>
                        <div className="menu-item">
                            <div><i class="fa-solid fa-chart-pie"></i><a href="/" className="text-reset menu-name">Dashboard</a></div>
                            <div><i class="fa-solid fa-atom"></i><a href="/" className="text-reset menu-name">ICONS</a></div>
                            <div><i class="fa-solid fa-globe"></i><a href="/" className="text-reset menu-name">MAP</a></div>
                            <div><i class="fa-solid fa-bell"></i><a href="/" className="text-reset menu-name">NOTIFICATIONS</a></div>
                            <div><i class="fa-regular fa-user"></i><a href="/" className="text-reset menu-name">USER PROFILE</a></div>
                            <div><i class="fa-solid fa-table-list"></i><a href="/" className="text-reset menu-name">TABLE LIST</a></div>
                            <div><i class="fa-solid fa-grip-linesfa-solid fa-earth-americas"></i><a href="/" className="text-reset menu-name">TYPOGRAPHY</a></div>
                            <div><i class="fa-solid fa-rocket"></i><a href="/" className="text-reset menu-name">RTL SUPPORT</a></div>
                        </div>
                    </div>
                </section>
                <section className="dashboard-content">
                    <div className="d-none d-lg-flex justify-content-end pe-5">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <div class="dropdown user-button">
                            <button className=" dropdown-toggle bg-transparent " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={imgLogo} alt="user-image"></img>
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                <a className="dropdown-item" href="/">
                                Profile
                                </a>
                                </li>
                                <li>
                                <a className="dropdown-item" href="/">
                                Settings
                                </a>
                                </li>
                                <li>
                                <a className="dropdown-item" href="/">
                                Logout
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <section className="mt-5 mt-lg-3">
                        <div className="chart-container">
                        <p className="mb-0 opacity-50 text-lg-center">Total Shipments</p>
                        {/* <h4>Performance</h4> */}
                        <div className="line-chart-div ">
                        <LineChart className="d-lg-flex d-none ps-4" width={1000} height={300} series={[{ data: pData, label: 'Total Shipments' },{ data: uData, label: 'Total Shipments' },]} xAxis={[{ scaleType: 'point', data: xLabels }]}/>
                        <LineChart className="d-lg-none" width={450} height={300} series={[{ data: pData, label: 'Total Shipments' },{ data: uData, label: 'Total Shipments' },]} xAxis={[{ scaleType: 'point', data: xLabels }]}/>
                        </div>
                        </div>
                        <div className="mt-5 d-lg-flex">
                        <div className="vertical-graph-container">
                            <p className="opacity-50">Total Earning</p>
                            <div className="vertical-graph-div">
                            <BarChart
                            className="d-lg-flex d-none ps-4"
                                series={[
                                    { data: [35, 44, 24, 34] },
                                    { data: [51, 6, 49, 30] },
                                    { data: [15, 25, 30, 50] },
                                    { data: [60, 50, 15, 25] },
                                ]}
                                width={300}
                                height={290}
                                xAxis={[{ data: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Nov'], scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                            />
                            <BarChart
                                className="d-lg-none"
                                series={[
                                    { data: [35, 44, 24, 34] },
                                    { data: [51, 6, 49, 30] },
                                    { data: [15, 25, 30, 50] },
                                    { data: [60, 50, 15, 25] },
                                ]}
                                width={450}
                                height={290}
                                xAxis={[{ data: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Nov'], scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                            />
                            </div>
                        </div>
                        <div className="vertical-graph-container mt-5 mt-lg-0">
                            <p className="opacity-50">Total Customer</p>
                            <div className="vertical-graph-div">
                            <LineChart
                            className="d-lg-flex d-none ps-4"
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                series={[
                                    {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                    area: true,
                                    },
                                ]}
                                width={300}
                                height={300}
                                />
                                <LineChart
                                className="d-lg-none"
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                series={[
                                    {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                    area: true,
                                    },
                                ]}
                                width={450}
                                height={300}
                                />
                            </div>
                        </div>
                        <div className="vertical-graph-container mt-5 mt-lg-0">
                            <p className="opacity-50">Imported To</p>
                            <div className="vertical-graph-div">
                            <PieChart
                            className="d-lg-flex d-none ps-4"
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 8, label: 'Dubai' },
                                        { id: 1, value: 12, label: 'Germany' },
                                        { id: 2, value: 19, label: 'Italy' },
                                        { id: 3, value: 13, label: 'France' },
                                        { id: 4, value: 5, label: 'USA' },
                                        { id: 5, value: 22, label: 'Japan' },
                                    ],
                                    },
                                ]}
                                width={350}
                                height={200}
                                />
                            <PieChart
                            className="d-lg-none"
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 8, label: 'Dubai' },
                                        { id: 1, value: 12, label: 'Germany' },
                                        { id: 2, value: 19, label: 'Italy' },
                                        { id: 3, value: 13, label: 'France' },
                                        { id: 4, value: 5, label: 'USA' },
                                        { id: 5, value: 22, label: 'Japan' },
                                    ],
                                    },
                                ]}
                                width={450}
                                height={200}
                                />
                            </div>
                        </div>
                        </div>
                    </section>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Menu