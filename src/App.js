import React from 'react';
import './App.css';
import HeaderComponent from "./components/Header";
import ContentComponent from "./components/Content";
import {setMenusAction} from "./menu/redux/menuActions";
import {connect} from "react-redux";
import Notification from "./components/notification/Notification";

function App(props) {
    return (
            <div>
                <HeaderComponent {...props}/>
                <ContentComponent/>
                <Notification/>
            </div>
    );
}

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    setMenusAction: (payload) => dispatch(setMenusAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
