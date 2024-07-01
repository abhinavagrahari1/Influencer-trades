import React from 'react'
import Navbar from '../components/common/Navbar';
import Hero from '../components/landing/Hero';
import Clients from '../components/landing/Clients';
import Community from '../components/landing/Community';
import Footer from '../components/common/Footer';

const Landing =()=> {


  // useEffect(()=>{ }, [])
    //Get Clients data

    const clientsData = [{
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },
    {
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },{
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },
    {
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },
    {
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },
    {
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },{
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },
    {
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },{
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },
    {
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },{
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },
    {
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },
    {
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    },
    {
      name: 'The Original Bull',
      subscribersCount: 166,
      banner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?'
    }]
 
  return (
    <>
    <Navbar/>
    <Hero/>
    <Clients clientsData = {clientsData}/>
    <Community/>
    <Footer/>
    </>
  )
}

export default Landing;
