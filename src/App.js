import {React , useState ,useEffect} from 'react';
import'./App.css';


function  Buttons({current,xindex,start})
{
  let but=[];
  for(let i=1;i<=10;i++)
  {
    but.push(i);
  }
  console.log(xindex);
  return (
    <div>
      {
        but.map(item=>{
        return (
        <button onClick={()=>current(item)} style={{color:item-1==(xindex)?'blue':'',fontSize:item==xindex?'25px':'',height:'40px',width:'40px',background:'transparent',border:'2px solid blue',outline:'none',fontSize:'20px'}}>
        {item}
        
        </button>
        );
        })
      }
    </div>
  );
}
function App() {
  const [data,getdata]=useState([]);
  const [formatdata,getformatdata]=useState([]);
  var [xindex,setindex]=useState(0);
  const [start,setstart]=useState(1);
  useEffect(()=>{
    fetch('https://classmarker-app.herokuapp.com/mockData')
    .then(res=>res.json())
    .then(dataset=>{
      getformatdata(dataset);
      getdata(dataset.slice(0,20));
      console.log(formatdata);
    });
  },[])
 
  const current=(index)=>{  
    index--;
    setindex(index);
    var newList=[...formatdata];
    getdata(newList.slice((index*20),(index*20)+20));
  }

  const currentPrev=(index)=>{
    index--;
    setindex(index);
    
    var newList=[...formatdata];
    getdata(newList.slice((index*20),(index*20)+20));
  }

  const currentNext=(index)=>{
    index++;
    setindex(index);
    
    var newList=[...formatdata];
    getdata(newList.slice((index*20),(index*20)+20));
  }

  return (
    <div className="App" >
    <h1 style={{textAlign:'center',fontWeight:'lighter',color:'#333'}}>My User List</h1>
    <div style={{margin:''}}>
    <div style={{display:'flex',justifyContent:"center"}}>
    <button onClick={()=>currentPrev(xindex)} style={{marginRight:'5px',color:'#fff',height:'40px',width:'80px',background:'#034256',textTransform:'uppercase'}}>previous</button>
    < Buttons  current={current} xindex={xindex} start={start}/>
    <button onClick={()=>currentNext(xindex)} style={{marginLeft:'5px',color:'#fff',height:'40px',width:'80px',background:'#034256',textTransform:'uppercase'}}>next</button>
    </div>
     <table style={{fontFamily: 'arial, sans-serif',borderCollapse:'collapse', width: '90%',margin:'auto'}}>
       <thead style={{background:'#ccc',border:'1px solid #000',width:'30px',height:'20px'}}>
        <tr>
        <td>sl.No</td>
        <td>Name</td>
         <td>Email</td>
          <td>company</td>
           <td>job</td>
            <td>city</td> 
            <td>Contact No</td>
            <td>Fav Movie</td>
        </tr>
       </thead>
    {
     data.map((item,index)=>{
      return (
        <tbody>
         <tr style={{background:(index%2!=0)?'#ddd':''}}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.company}</td>
        <td>{item.job}</td>
        <td>{item.city}</td>
        <td>{item.phone}</td>
        <td>{item['Fav Movie']}</td>
         </tr>
       </tbody>
   
      )})}
        </table>   
    
    
    </div>
    </div>
  );
}

export default App;
