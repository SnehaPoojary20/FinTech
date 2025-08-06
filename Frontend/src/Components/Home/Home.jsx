import React from 'react'
import "./Home.css";
import Expense from "../Expense/Expense";


const Home = () => {
  return (
           <> 
          <div className='home'>
       <p>Welcome To Fintech  <br></br>
           Where AI Meets Financial Wisdom.
        </p>
        <br></br>
      </div>
      <div className='expense'>
         <Expense/>
        </div>
       </>
  )
}

export default Home;
