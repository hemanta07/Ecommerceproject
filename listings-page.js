import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Nav from "../../components/nav/nav";

import Image4 from "../../assets/rectangle-839.png";
import Image5 from "../../assets/page-1.png";
import Image from "../../assets/packing-list.png";
import Image1 from "../../assets/trolley.png";
import Image2 from "../../assets/boxes.png";
import Image6 from "../../assets/shoppingcart.png";
import Image7 from "../../assets/search.png";
import Image8 from "../../assets/group-5.png";
import Image9 from "../../assets/bitmap4.png";
import Image10 from "../../assets/group-8.png";
import Image11 from "../../assets/bitmap1.png";
import Image12 from "../../assets/bitmap2.png";
import Image13 from "../../assets/bitmap5.png";
import Image14 from "../../assets/bitmap3.png";


import "./listings-page.css";

class ListingsPage extends Component {
    constructor(Props) {
        super(Props);
    
        this.state = {
          name:'count count1 count2 ',
          count: 0,
          count1: 0,
          count2: 0,
          count4: 0 ,
          delete: false,
          count5:0,
           isActive:false
        
          
        };
      }
    
      increment = () => {
        this.setState({ count: this.state.count + 1 });
      };
      decrement = () => {
        if (this.state.count > 0) {
          this.setState({ count: this.state.count - 1 });
        } else {
          alert("sorry zero limit Reached");
        }
      };
    
      increment1 = () => {
        this.setState({ count1: this.state.count1 + 1 });
      };
      decrement1 = () => {
        if (this.state.count1 > 0) {
          this.setState({ count1: this.state.count1 - 1 });
        } else {
          alert("sorry zero limit Reached");
        }
      };
    
      increment2 = () => {
        this.setState({ count4: this.state.count4 + 1 });
      };
      decrement2 = () => {
        if (this.state.count4 > 0) {
          this.setState({ count4: this.state.count4 - 1 });
        } else {
          alert("sorry zero limit Reached");
        }
      };
      Add= ()=>{
        this.setState({count4: this.state.count4 + 1});
         

      }
      delete=()=>{
        if (this.state.count4 > 0) {
          this.setState({ count4: this.state.count4 - 1 });
        } else {
          alert("sorry zero limit Reached");
        }
      };
      
    Add2 =()=>{
      this.setState({count5: this.state.count5 + 1});
    }
      
      
      
     
    
      


      state = {
        isActive:false
     }
   
     toggle = ()=>{
         this.setState({
             isActive:!this.state.isActive
         })
     }
    
   
   
       
       
     

    


    render() {

       
       
        return(
    


    
    <div class="wrap">

        <div className= {this.state.isActive ? 'containerA1 Active' : 'containerA1'}>
        <div className= {this.state.isActive ? 'bx.Active':'bx'}>
        
        <div className = {this.state.isActive ?'rectangle1Active':'rectangle1'}>
        <span className="logo">LOGO</span>
        </div>
        
        </div>
            
        <div className= {this.state.isActive ? 'bx b1 Active':'bx b1'}>
            <img src={Image} alt="" />
            <p>PLACE AN ORDER</p>
            </div>
        <div className= {this.state.isActive ? 'bx b2 Active':'bx b2'}>
            <img src={Image1} alt="" />
            <p>MY ORDER</p>
            </div>
        <div className={this.state.isActive ? 'bx b2 Active':'bx b2'}>
            <img src={Image2} alt="" />
            <p>INVENTORY</p>
            </div>
            
               
        </div>

        <div className={this.state.isActive ? 'containerB Active':'containerB '}>


        <div className= {this.state.isActive ?'nav2 Active': 'nav2 '}>
            <div className="details">
             
           {/* ------------------------------------------------------------------------ */}
          
          <div> <img src={Image4} className="img1" alt="" onClick={this.toggle} /></div>
         
           
          
            <Link to ="home"><img src={Image5} className="img2" alt="" /></Link>
            <p><b>My Address</b><br/> 
            Southbank, Great Wilson St, Leeds LS11 5AD, UK</p>
            </div>
            <Nav />
        </div>


        <div className= 'containerB1 '>
            <p>Valves</p>
            
            <img src={Image6}  alt="" />
            
            <div className="line2a" ></div>
            <input className="search-box" name="search" type="text" />
            <div className="sr-oval"><img src={Image7} className="search" alt="" /></div>
            <div className="line2b"></div>
            <div className="shp-btn">
     <Link to ="yourorder" className="yourorder"> <div className="shp-crt"><img src={Image8} alt="" /></div></Link>  
      
       <div className="shp-crt1"><p>{this.state.count4}</p></div>
            </div>
            
           
        </div>
        <div className="containerB2">
                
            <div className= 'griddd'>
            <div className="heading1">
                <h3>Valves</h3>
                <p>Showing 1-30 of 101</p>
                
            </div>
                <div className="grdd bxx1">
                    <div className="img-fr">
                        <img src={Image9} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>White Upvc Threaded Ball Valve, Size: 15 Mm To 50 Mm</b><br/><br/>
                        Available Unit/Qty: 500 Units </p>
                        </div>
                          <div className="btn-add" onClick={this.Add}><p>ADD</p></div> 
                          <div className="deleteicon" onClick={this.delete}><i class="fas fa-trash"></i></div>
                          
                        
                </div>
                <div className="grdd bxx2">
                <div className="img-fr">
                        <img src={Image10} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Stainless Steel Medium Pressure Audco Valves, Temperature of Media : High</b><br/><br/>
                        Available Unit/Qty: 824 Units </p>
                        </div>
                        <div className="select"> 
                            <div className="sl-box" onClick={this.decrement}><i class="fas fa-minus"></i></div>
                            <div className="sll-box" ><p>{this.state.count}</p></div>
                            <div className="sl-box" onClick={this.increment}><i class="fas fa-plus"></i></div>
                        </div>
                </div>
                <div className="grdd bxx2">
                <div className="img-fr">
                        <img src={Image11} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Stainless Steel Mounted Ball Valves, Size: 25 mm</b><br/><br/>
                        Available Unit/Qty: 120 Units </p>
                        </div>
                        <div className="select"> 
                            <div className="btn-add" onClick={this.Add}><p>ADD</p></div>
                            <div className="deleteicon22" onClick={this.delete}><i class="fas fa-trash"></i></div>
                          
                          
                        </div>
                </div>
                <div className="grdd bxx1">
                <div className="img-fr">
                        <img src={Image12} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Payal Pvc Three Way Ball Valve, Size: 1 To 2.5 Inch</b><br/><br/>
                        Available Unit/Qty: 1302 Units </p>
                        </div>
                        
                        <div className="sl-box" onClick={this.decrement1}><i class="fas fa-minus"></i></div>
                            <div className="sll-box"><p>{this.state.count1}</p></div>
                            <div className="sl-box" onClick={this.increment1}><i class="fas fa-plus"></i></div>
                      
                </div>
                <div className="grdd bxx2">
                <div className="img-fr">
                        <img src={Image13} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Stainless Steel Screwed Ends Ball Valves</b><br/><br/>
                        Available Unit/Qty: 1398 Units </p>
                        </div>
                        <div className="select">
                        
                          
                        <div className="btn-add" onClick={this.Add} ><p>ADD</p></div> 
                        <div className="deleteicon22" onClick={this.delete}><i class="fas fa-trash"></i></div>
                          
                        </div>
                </div>
                <div className="grdd bxx1">
                <div className="img-fr">
                        <img src={Image14} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Ball Valve for Chemical Industry</b><br/><br/>
                        Available Unit/Qty: 500 Units </p>
                        </div>
                        
                        <div className="sl-box"onClick={this.decrement2} ><i class="fas fa-minus"></i></div>
                            <div className="sll-box"><p>{this.state.count5}</p></div>
                            <div className="sl-box" onClick={this.increment2}><i class="fas fa-plus"></i></div>
                      
                </div>
            </div>
         <div className="footrr1"><p > © Con5 Online Ordering System, 2019 </p></div>
        </div>

        </div>
        
    </div>
    )
    }
}
export default ListingsPage;