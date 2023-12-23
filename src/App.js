// import logo from './logo.svg';
import {useState} from "react"
import './App.css';

function App() {
  const store = () =>{
    const list = JSON.parse(localStorage.getItem("ar"));
    if(list){
        return JSON.parse(localStorage.getItem("ar"));
    }
    else{
      return [];
    }
  }
  
const [subject, subjectfun] = useState("");
const [hour, hourfun] = useState();
// const [hr, plusminfun] = useState("");
const [ar , addarr] = useState(store());
localStorage.setItem("ar", JSON.stringify(ar));

  function fun1(){
    if(subject !== "" && hour !== "" ){
    addarr([...ar , {key1: subject , key2:hour}]);
    subjectfun("");
    hourfun("");
    }
    else{
      alert("please fill Subject & Hour")
    }
  //  let a1 = document.getElementById("a").value
  //   console.log(a1);
  //   let b1 = document.getElementById("b").value
  //   console.log(b1);
   
  //  subjectfun([...subject , a1]);
  //  localStorage.setItem("sub" ,subject);
  //  console.log(subject);
  //  hourfun([...hour, b1 ])
  //  localStorage.setItem("hr", hour);

}

function increment(idx){
  addarr((prevar) => {
    const updatedarr = [...prevar];
    updatedarr[idx] = {...updatedarr[idx], key2: parseInt(updatedarr[idx].key2) + 1};
    return updatedarr;
  })
}

function decrement(idx){
  if(ar.key2 !== 0){
  addarr((prevar) => {
    const updatedarr = [...prevar];
    updatedarr[idx] = {...updatedarr[idx], key2: parseInt(updatedarr[idx].key2) - 1};
    return updatedarr;
  }) }
}

  return (
    
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", paddingTop:"75px", backgroundColor:"#B0926A" ,height:"100vh"}}>
           <h1 style={{color:"#706233", fontWeight:"bolder", fontSize:"60px"}} >Education Planner</h1>
           <div>
           <input id="a" style={{height:"30px",width:"300px" ,borderRadius:"5px",color:"#192655"}} type="text" value={subject} placeholder='Subject'
           onChange = {(e) => subjectfun(e.target.value)}
           />

           <input id="b" value={hour}
            onChange={(e)=> hourfun(e.target.value)} 
            style={{height:"30px", borderRadius:"5px", width:"50px", marginInline:"10px",color:"#192655"}} type="number" placeholder='Hour'/>

          <button onClick={fun1} style={{height:"35px", borderRadius:"5px", padding:"10px 10px", backgroundColor:"#192655", color:"white", border:"none"}}>ADD</button>
          {
       
          }
          </div>
           
           <div>
           {
            
        ar.map((item, idx) => {
            
        return <div  key = {idx} style={{backgroundColor:"#f7f9f7", display:"flex" , gap:"5px", margin:"10px", borderRadius:"10px" , padding:"0px 20px"}}>
      <p style={{width:"280px"}}> {item.key1} - {item.key2} hours </p>
      <button style={{backgroundColor:"green", padding:"0px 20px", margin:"10px" , borderRadius:"10px"}}
      onClick={() => {increment(idx)}}
      >+</button>
      <button style={{backgroundColor:"red",padding:"0px 20px", margin:"10px" , borderRadius:"10px"}}
      onClick={() => {decrement(idx)}}
      >-</button>
      
      </div> 
      })
      
   } 

      </div>
          
    </div>


    
  );
}

export default App;