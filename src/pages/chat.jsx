// import { Profile } from './profile';
import React from "react";
import Navbar from "../component/navbar";
import { Profile } from '../component/profile';
import { Message } from "../component/Message";
function chat() {

  const nmsg = true ;
  return (
    <>
      <Navbar></Navbar>
      <div className="row-center page">
      <div className="col messagesPanel f1 ">


          <div className="mymessages row-center full g1 ">
            <p className="head"> Messages </p> 
            <img src="darr.svg" alt="downArrow" className="i" />
            <p className="badge head">12</p>
          </div>

          <div className="search row-center minibold">

            <p className="">Search</p>
          </div>

          <div className="profiles col ">

        <Profile     ></Profile>
      
        {/* <h1>hello</h1> */}

          {/* one profile above  */}
          </div>
{/* 
              <div className="row-between full ">
                <div className="col full">

                <div className="row-between "> */}
                {/* <p className="minibold ">Elmer  Labenty</p>
                <p className="minibold-sub">12m</p>
               </div>
                <p className='minibold-sub'>Haha Oh man XD </p>
                </div>

              </div>
            </div>
          </div>
        </div>  */}
      </div>


      {/* here ends the messages pannel  */}
      <div className="chat border f2 messages col"> 
    <div className="menu row-between">
<div className="row leftmenu g1">
<img src="face.png" alt="sender" />
<div className="col">
  <p className="head">moreigno guar</p>
  <div className="row online g1">
    <img src="online.svg" className="smalli" alt="" />
    <p className="placeholder">online</p>
  </div>
</div>

</div>

<btn className="callbtn row g1">
  <img src="call.svg" alt="call" className="i" />
  <p className="minibold">call</p>
</btn>



    </div>

    <div className="chatbox  col scroll">


<Message    isnew={true} msg={"hello therethis is me first creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class"}  isme ={true} />
<Message    isnew={false} msg={"hello there"}  isme ={true} />
<Message    isnew={true} msg={"hello there"}  isme ={false} />
<Message    isnew={false} msg={"hello there creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class"}  isme ={false} />
<Message    isnew={false} msg={"hello there creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class"}  isme ={false} />
<Message    isnew={false} msg={"hello there creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class"}  isme ={false} />
<Message    isnew={false} msg={"hello there creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class"}  isme ={false} />
<Message    isnew={false} msg={"hello there creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class"}  isme ={false} />
<Message    isnew={false} msg={"hello there creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class"}  isme ={false} />
<Message    isnew={false} msg={"hello there creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class"}  isme ={false} />
<Message    isnew={false} msg={"hello there creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class"}  isme ={false} />
<Message    isnew={false} msg={"hello there creat now the message componenet , inside of it compare the values and give it the class creat now the message componenet , inside of it compare the values and give it the class"}  isme ={false} />











    </div>


    <div className="input row ">
      <img src="file.svg" alt="" className="i" />
      <div className="input-box row-between grow g2   ">
        <label htmlFor="image"></label>
        <input type="text" key={"image"} className="grow "/>
          <img src="sendm.svg" alt=" " className="i" />
      </div>


    </div>


      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>

      {/* here ends the chat */}
        <div className="directory f1   messages placeholder"> directory </div>

      {/* <div className="aProfile col ">
        <div className="con">ilyes benabbe </div>
        <div className="con">ilyes benabbe </div>
        <div className="con">ilyes benabbe </div>
        <div className="con">ilyes benabbe </div>
      </div> */}
      </div>
    </>
  );
}

export default chat;
