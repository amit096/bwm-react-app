import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

function Header(props) {
  function handleLogout() {
    props.logout();
    props.history.push('/rentals'); //history object is avalable because of this withrouter component
  }

  function renderAuthButtons() {
    const token = localStorage.getItem('auth_token')
    if (token) {
      return <Link className='nav-item nav-link active clickable' to='/login' onClick={handleLogout}>Logout</Link>;
    }
    return (
      <>
        <Link className='nav-item nav-link active' to='/login'>Login <span className='sr-only'>(current)</span></Link>
        <Link className='nav-item nav-link' to='/register'>Register</Link>
      </>
    );
  }
  return (
    <nav className='navbar navbar-dark navbar-expand-lg'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>BookWithMe</Link>
        <form className='form-inline my-2 my-lg-0'>
          <input className='form-control mr-sm-2 bwm-search' type='search' placeholder="Try 'Delhi'" aria-label='Search'></input>
          <button className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search' type='submit'>Search</button>
        </form>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            {renderAuthButtons()}
          </div>
        </div>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }

}

export default withRouter(connect(mapStateToProps)(Header));