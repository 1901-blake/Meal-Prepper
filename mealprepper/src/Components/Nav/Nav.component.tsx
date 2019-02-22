import React from 'react';
import Nav from 'reactstrap/lib/Nav';
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
                <Nav pills>
                    <NavItem>
                        <NavLink><Link to="">Home</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="" >About</Link></NavLink>
                    </NavItem>
                     <NavItem>
                        <NavLink><Link to="" >Grocery List</Link></NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.props.nav.dropdown1} toggle={this.props.toggle}>
                        <DropdownToggle nav>
                            Meal Plan
                        </DropdownToggle>
                        <DropdownMenu left>
                            <DropdownItem>
                                <NavLink>
                                    <Link to="">Weekly View</Link></NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink>
                                <Link to="">Daily View</Link></NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink><Link to="" >Recipe History</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="" >Favorites</Link></NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.props.nav.dropdown2} toggle={this.props.toggle1}>
                        <DropdownToggle nav>
                            Profile
                        </DropdownToggle>
                        <DropdownMenu left>
                            <DropdownItem>
                                <NavLink>
                                <Link to="">Settings</Link></NavLink>            
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink>
                                    <Link to="">User Info</Link></NavLink>
                            </DropdownItem>
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
