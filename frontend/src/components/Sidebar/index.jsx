import React from 'react';
import '../../styles/sidebar/index.scss';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome, FaChartArea, FaCreditCard } from 'react-icons/fa';

export default function Sidebar(props) {
  const defaultSelected = window.location.pathname.split('/').pop();
  return (
    <SideNav
      onToggle={open => {
        props.sideNavOpen(open);
      }}
      expanded={props.expanded}
      className="bg-primary"
    >
      <SideNav.Toggle
        className='sidebar-icons'
      />
      <SideNav.Nav

        defaultSelected={defaultSelected}
      >
        <NavItem onSelect={() => { window.location = '/home' }} eventKey="home">
          <NavIcon>
            <FaHome
              className='sidebar-icons text-white'
            />
          </NavIcon>
          <NavText>
            Home
          </NavText>
        </NavItem>
        <NavItem onSelect={() => { window.location = '/aplicar-credito' }} eventKey="aplicar-credito">
          <NavIcon>
            <FaCreditCard
              className='sidebar-icons text-white'
            />
          </NavIcon>
          <NavText>
            Aplicar Crédito
          </NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <FaChartArea
              className='sidebar-icons text-white'
            />
          </NavIcon>
          <NavText>
            Charts
              </NavText>
          <NavItem onSelect={() => { window.location = '/exemplo' }} eventKey="exemplo">
            <NavText>
              Line Chart
              </NavText>
          </NavItem>
          <NavItem onSelect={() => { window.location = '/exemplo' }} eventKey="charts/barchart">
            <NavText>
              Bar Chart
              </NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  )
}

