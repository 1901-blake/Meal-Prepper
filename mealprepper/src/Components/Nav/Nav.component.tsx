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
import { Nav } from 'reactstrap';
import SignInButton from '../AuthComponents/SignInButton/SignInButton';
import SignUpButton from '../AuthComponents/SignUpButton/SignUpButton';
import SignOutButton from '../AuthComponents/SignOutButton/SignOutButton';
import Container from 'reactstrap/lib/Container';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';



export interface INavProps {
    nav: INavState,
    isLoggedIn : boolean,
    toggle: () => void,
    toggle1: () => void
}

export class NavComponent extends React.Component<INavProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <div>
                    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" pills>
                        <Link to="" className="navbar-brand">
                            <img src={logodark} height="50" className="d-inline-block align-top" alt="prepper" />
                        </Link>
                        <Link to="/grocerylist" className="navItems ml-auto">
                            <Button color="dark">Grocery List</Button>{' '}
                        </Link>
                        <Dropdown nav isOpen={this.props.nav.dropdown1} toggle={this.props.toggle}>
                            <DropdownToggle nav className="navItems">
                                Meal Plan
                            </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem>
                                    <NavLink><Link to="/generate" className="dropdownItems">Generate Meal Plan</Link></NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink>
                                        <Link to="/weeklyinfo" className="dropdownItems">Weekly View</Link></NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        
                        <Link to="/recipehistory" className="navItems">
                            <Button color="dark">Recipe History</Button>{' '}
                        </Link>
                        <Link to="/recipeInput" className="navItems">
                            <Button color="dark">Enter New Recipe</Button>{' '}
                        </Link>
                        {/* <Link to="/favorites" className="navItems">
                            <Button color="dark">Favorites</Button>{' '}
                        </Link> */}
                        <Link to="/userinfo" className="navItems">
                            <Button color="dark">User Info</Button>{' '}
                        </Link>
                        
                        {/* <Dropdown nav isOpen={this.props.nav.dropdown2} toggle={this.props.toggle1}>
                            <DropdownToggle nav className="navItems">
                                Profile
                            </DropdownToggle>
                            <DropdownMenu left color="dark">
                                <DropdownItem>
                                    <NavLink>
                                        <Link to="/setting" className="dropdownItems">Settings</Link></NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink>
                                        <Link to="/userinfo" className="dropdownItems">User Info</Link></NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown> */}
                        <SignOutButton color="dark" />
                    </Nav>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" pills>
                        <Link to="" className="navbar-brand">
                            <img src={logodark} height="50" className="d-inline-block align-top" alt="prepper" />
                        </Link>
                            <SignInButton color="dark" className="ml-auto"/>
                            <SignUpButton color="dark" />
                    </Nav>
                </div>
            );
        }
    }
}

const mapStateToProps = (state: IState) => {
    return {
        nav: state.nav,
        isLoggedIn : state.auth.isLoggedIn
    }
}

const mapDispatchToProps = {
    toggle,
    toggle1
}

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
