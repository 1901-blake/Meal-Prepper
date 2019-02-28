import React from 'react';
import NavItem from 'reactstrap/lib/NavItem';
import { INavState, IState } from '../../reducers';
import { connect } from 'react-redux';
import Dropdown from 'reactstrap/lib/Dropdown';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import { Link } from 'react-router-dom';
import NavLink from 'reactstrap/lib/NavLink';
import { toggle1, toggle } from '../../Actions/Nav.action';

import logodark from '../../assets/logo-dark.png'
import logolight from '../../assets/logo-light.png'

import { Nav } from 'reactstrap';
import SignInButton from '../AuthComponents/SignInButton/SignInButton';
import SignUpButton from '../AuthComponents/SignUpButton/SignUpButton';
import ForgotPasswordButton from '../AuthComponents/ForgotPasswordButton/ForgotPasswordButton';
import SignOutButton from '../AuthComponents/SignOutButton/SignOutButton';
import ChangePasswordButton from '../AuthComponents/ChangePasswordButton/ChangePasswordButton';



export interface INavProps {
    nav: INavState,
    toggle: () => void,
    toggle1: () => void
}

export class NavComponent extends React.Component<INavProps, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav className="navbar navbar-expand-lg navbar-dark bg-dark" pills>
                    <Link to="" className="navbar-brand">
                        <img src={logodark} height="50" className="d-inline-block align-top" alt="prepper" />
                    </Link>
                    <NavItem>
                        <NavLink><Link to="/about" className="navItems">About</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/grocerylist" className="navItems">Grocery List</Link></NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.props.nav.dropdown1} toggle={this.props.toggle}>
                        <DropdownToggle nav className="navItems">
                            Meal Plan
                        </DropdownToggle>
                        <DropdownMenu left>
                            <DropdownItem>
                                <NavLink>
                                    <Link to="/weeklyinfo">Weekly View</Link></NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink>
                                    <Link to="/dailyinfo">Daily View</Link></NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink><Link to="/recipehistory" className="navItems">Recipe History</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/recipeInput" className="navItems">Enter New Recipe</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/favorites" className="navItems">Favorites</Link></NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.props.nav.dropdown2} toggle={this.props.toggle1}>
                        <DropdownToggle nav className="navItems">
                            Profile
                        </DropdownToggle>
                        <DropdownMenu left>
                            <DropdownItem>
                                <NavLink>
                                    <Link to="/setting" className="dropdownItems">Settings</Link></NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink>
                                    <Link to="/userinfo" className="dropdownItems">User Info</Link></NavLink>
                            </DropdownItem>
                            <SignInButton/>
                            <SignUpButton/>
                            <SignOutButton/>
                            <ForgotPasswordButton/>
                            <SignUpButton/>
                            <ChangePasswordButton/>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        nav: state.nav
    }
}

const mapDispatchToProps = {
    toggle,
    toggle1
}

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
