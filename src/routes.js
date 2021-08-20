/* eslint-disable */
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';

import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';



import DealDetailsView from './components/Deal/DealDetailsView';
import MerchantDetailsView from './components/Merchant/MerchantDetailsView';
import UserDetailsView from './components/user/UserDetailsView';
import AddDeal from './pages/AddDeal';
import AddMerchant from './pages/AddMerchant';

import CreatUser from './pages/CreatUser';
import DealList from './pages/DealList';
import MerchantList from './pages/MerchantList';
import UserList from './pages/UserList';
import SystemConfiguration from './pages/SystemConfiguration';
import AddRole from './components/role/AddRole';
import RoleList from './pages/RoleList';
import Commission from './pages/Commission';
import ForgotPassword from './pages/ForgotPassword';
import SetPassword from './pages/SetPassword';
import InActiveMerchantReport from './pages/InActiveMerchantReport';


const routes = (token) => [
  {
    path: 'app',
    element: token ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'user', element: <UserList /> },
      { path: 'Deal', element: <DealList /> },
      { path: 'addDeal', element: <AddDeal /> },
      { path: 'adduser', element: <CreatUser /> },
      { path: 'edituser', element: <CreatUser /> },
      { path: 'editDeal', element: <AddDeal /> },
      { path: 'userView', element: <UserDetailsView /> },

      { path: 'merchantView', element: <MerchantDetailsView /> },
      { path: 'dealView', element: <DealDetailsView /> },
      { path: 'addmerchant', element: <AddMerchant /> },
      { path: 'addrole', element: <AddRole /> },
      { path: 'updateRole', element: <AddRole /> },
      { path: 'viewRole', element: <AddRole /> },
      { path: 'roleList', element: <RoleList /> },
      { path: 'editmerchant', element: <AddMerchant /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'merchant', element: <MerchantList /> },
      { path: 'merchantStatus', element: <InActiveMerchantReport/> },

      { path: 'systemConfiguration', element: <SystemConfiguration /> },

      { path: 'Commission', element: <Commission /> },
      { path: '*', element: <Navigate to="/app/dashboard" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [

      { path: 'login', element: <Login /> },
      { path: 'forgotpassword', element: <ForgotPassword/> },
      { path: 'setpassword/:code', element: <SetPassword/> },
      { path: '404', element: <Navigate to="/app/dashboard" /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/app/dashboard" /> }
    ]
  }
];

export default routes;
