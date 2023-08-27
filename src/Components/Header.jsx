import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import { Link } from "react-router-dom";
import { auth } from '../firebase';
import "./Header.css";
import { useStateValue } from './Stateprovider';

function Header(){
    const handleAuthenctation = ()=>{
        if(user){
            auth.signOut();
        }
    }
    const [{cart,user},dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to="/">
            <img className="header_logo" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png"/>
            </Link>
            

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthenctation} className="header_option">
                    <span className="header_optionLineOn">{user?.email}</span>
                    <span className="header_optionLineTw">{user?'Sign Out':'Signin'}</span>
                </div>
                </Link>
               
                <div className="header_option">
                    <span className="header_optionLineOn">Returns</span>
                    <span className="header_optionLineTw">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOn">Your</span>
                    <span className="header_optionLineTw">Prime</span>
                </div>
                    <Link to="/Checkout">
                    <div className="header_otionBasket">
                <ShoppingCartIcon></ShoppingCartIcon>
                <span className="header_optionLineTwo">{cart?.length}</span>
                </div>
                    </Link>
                
            </div>
        </div>
    )
}
export default Header;