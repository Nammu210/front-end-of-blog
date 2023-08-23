import React from 'react'
import { Logo, TopNavigation,LogoMobile } from '../../Components'
import TechArticleList from './TechArticleList'
import TechTopPost from './TechTopPost'
import Store from '../../Utility/ContextStore/contextAPI'
import Footer from '../../Components/Footer/Footer'

const Technology = () => {
  return (
    <>
   <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
      <TopNavigation/></div>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
            <Store>
    <TechArticleList/>
    <TechTopPost/>
    </Store>
   
    </div>
    </div>
    </div>
    <br/>
    <Footer/>
      
    </>
  )
}

export default Technology
