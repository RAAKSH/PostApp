import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import  MenuIcon  from '@mui/icons-material/Menu';
import GoogleBtn from './GoogleBtn';
import { Stack } from 'react-bootstrap';
import  HomePageBody from '../Components/HomePageBody';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import {GetPostData} from './GetPostData'
import {localUserStorage as userStorage} from '../userStorage';

export function HomePage(props) {


    
    return (
        <div>
            <GetPostData />
           
          
        </div>
    );
}

