import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TableChartIcon from '@mui/icons-material/TableChart';
import React, { useContext, useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../ColorContext/darkContext';
import './Sidebar.scss';
import {useNavigate} from "react-router-dom"

function Sidebar({setCurrentUser}) {
    // color state management using react context
    const { darkMode, dispatch } = useContext(ColorContext);
    const [active , setActive] = useState(false)
    const [item , setItem] = useState(false)

    const handleClickItem = (event) => {
        setActive(true);
        setItem(event.target.innerText)
    }

    const navigate = useNavigate()

        const handleLogout = () => {
            setCurrentUser(null)
            navigate("/login")
        }

  

    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h3 className="text_none">AdminDashboard</h3>
                </Link>
            </div>

            <div className="links">
                <ul>
                    <p className="spann">Main</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li onClick={(event)=>handleClickItem(event)} className={active && item === "Dashboard" ? "active" : ""}>
                            <DashboardIcon className="icon" /> Dashboard
                        </li>
                    </Link>

                    <p className="spann">lists</p>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li onClick={(event)=>handleClickItem(event)} className={active &&  item === "Users" ? "active" : ""}>
                            <PersonIcon className="icon" /> Users
                        </li>
                    </Link>

                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li onClick={(event)=>handleClickItem(event)} className={active && item === "Products"  ? "active" : ""}>
                            <TableChartIcon className="icon" /> Products
                        </li>
                    </Link>
                    <Link to="/orders" style={{ textDecoration: 'none' }}>
                        <li onClick={(event)=>handleClickItem(event)} className={active && item === "Orders"  ? "active" : ""}>
                            <CreditCardIcon className="icon" /> Orders
                        </li>
                    </Link>
                    <li onClick={(event)=>handleClickItem(event)} className={active && item === "Balance"  ? "active" : ""}>
                        <CreditCardIcon className="icon" /> Balance
                    </li>
                    <li onClick={(event)=>handleClickItem(event)} className={active && item === "Status"  ? "active" : ""}>
                        <BarChartIcon className="icon" /> Status
                    </li>

                    <p className="spann">Seetings</p>
                    <li onClick={(event)=>handleClickItem(event)} className={active && item === "Profile"  ? "active" : ""}>
                        <AccountCircleIcon className="icon" /> Profile
                    </li>
                    <li onClick={(event)=>handleClickItem(event)} className={active && item === "Setting"  ? "active" : ""}>
                        <SettingsRoundedIcon className="icon" /> Setting
                    </li>
                    <li onClick= {handleLogout}>
                        <LogoutIcon className="icon" /> Log Out
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
