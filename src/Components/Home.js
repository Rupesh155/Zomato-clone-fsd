import React,{useState,useEffect} from 'react';
import '../App.css'
import {NavLink, json} from 'react-router-dom';
import {FaUserAlt}  from 'react-icons/fa';
import {BiLogInCircle}  from 'react-icons/bi';
import Logo from '../Images/Zomato-Logo.png'
import Background from '../Images/BackGround.png'
import Card from './Card';
import City from './City';
import Footer from './Footer';

const Home = () => {


    
    const [data, setData] = useState(null);

    useEffect(() => {

         let data=   localStorage.getItem('userData')
         console.log(data,"dataaaaaaaa");
        let newData=  JSON.parse(data)
        console.log(newData,"newData");

        setData(newData)


  
 
    }, []);

       let remove=()=>{
        localStorage.clear('userData')
        setData(null)


       }
  
    // const remove = () => {
    //   localStorage.removeItem('userData');
    //   setUserData(null);
    // };


  


  return (
    <>
    <div className='parent'>

        <img className='img' src={Background} alt="logo" />   {/* background image */}

        <div className='icons-bg'>
        <div className='div1'>
            <span className='floar-right1'> <NavLink   to='/view' className='color-b'>View Food</NavLink> </span> 
            <span className='floar-right2'> <NavLink   to='/addr' className='color-b'>Add Restaurant</NavLink> </span> 
        </div>
        <div className='div2'> 
        {/* {   userData? ( <>      <p>{userData.userData.name }</p>
         <span  onClick={remove}  className='floar-right2'> <NavLink      className='color-b'>Logout</NavLink> <BiLogInCircle/> </span> </>  
        ):(   <>  </>  )}  */}

{
   data? (  <>   <p> {  data.userData.name} </p>
    <span  onClick={remove}   className='floar-right2'> <NavLink  className='color-b'>Logout</NavLink> <BiLogInCircle/> </span>  

    </>

   ):

   (     <>   
   <span className='floar-right1'> <FaUserAlt/> <NavLink  to='/signup'  className='color-b'>Sign-up</NavLink> </span> 
   <span className='floar-right2'> <NavLink  to='/login' className='color-b'>Login</NavLink> <BiLogInCircle/> </span>    </>  )
}





         {/* <span className='floar-right1'> <FaUserAlt/> <NavLink  to='/signup'  className='color-b'>Sign-up</NavLink> </span> 
            <span className='floar-right2'> <NavLink  to='/login' className='color-b'>Login</NavLink> <BiLogInCircle/> </span>   */}
        
        </div>
        </div>
        <div className='heading-zomato'>
        <img src={Logo} alt="logo" />
        </div> 
         <div className='input-search'>

            <h3 id='h3'>Discover the best food & drinks in Chitkara</h3>

                <div className="input">
                <select name="" id="">
                    <option value="Chennai">Chennai</option>
                    <option value="Jaipur">Jaipur</option>
                    <option selected value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Kolkata">Kolkata</option>
                </select>
                <input type="text" placeholder="Search for restaurant or a dish"/>
                </div>
                
        </div> 
        
    </div>

<Card/>



<section>

<City/>

</section>



<footer>
    <Footer/>
</footer>
    </>
  )
}

export default Home