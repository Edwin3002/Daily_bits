import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import '../style/home.css'
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    
    const [value, setValue] = React.useState(0);

    return (

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction  as={Link} to="/Home" label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction as={Link} to="/Statistics" label="Statistics" icon={<BarChartIcon />} />
                <BottomNavigationAction as={Link} to="/Profile" label="Profile" icon={<AccountCircleIcon />} />
            </BottomNavigation>

    );
}

