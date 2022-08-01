import "./App.css";
import { useState } from "react";
 

let total=0
const addbox = (name, type) => {
  //  styles stole from: https://codepen.io/lucasyem/pen/ZEEYKdj
  return (
    <div class="form__group field">

      <input type={type} id={name} placeholder={name} required  className="form__field"/>
      <label for={name} class="form__label">{name }</label>

    </div>
  );
};
 
function App() {

const [changepage,usechangepage]= useState(0);

function f ()
{
  usechangepage(changepage+1)

  console.log("changepage" + changepage)
}
function f1 ()
{

  usechangepage(changepage+2)
  
}


function Paymentpage() {

  // for payment https://www.labnol.org/upi/

return(
  <div className="App">
  <header className="App-header">
    <h1>Paymentpage</h1>
  <div>
<h1> total amoount is: {total}</h1>

</div>
</header>
</div>

);}







function Membership()
{
function addradio(name,id,price)
{
  return(<tr><td><label> {name}</label> </td>   <td> <label>      {price}$ only</label> </td> <td style={{ textAlign:"center"}}><input type="checkbox" id={id} value={price} name="channels"></input> </td>  </tr>)

}


function checkout() {

  // copied from  https://www.techiedelight.com/retrieve-checked-checkboxes-values-javascript/
 
  var checkboxes = document.querySelectorAll('input[name="channels"]:checked');
  for (var checkbox of checkboxes) {
      total+=parseInt(checkbox.value);
}

console.log(total)

alert("your total price is" + total)

// Paymentpage(total)
f()

}

return(

  <div className="App">
  <header className="App-header">
  <div>
    membership selection page
    <div>
  <table align="left">

  <tr>
            <th>channel name</th>
            <th>price</th>
            <th> selection</th>
            
  </tr>
    {addradio("pewdiepie","pewds",99)}

    {addradio("madan growri","mgna",10)}

    {addradio("pubgmadan","mandanop",1)}

    {addradio("plip plip ","vanmam",69)}

    {addradio("TTF","cringe",999)}


    </table>

    </div>
    <br></br>

    <button onClick={checkout}> checkut</button>



  </div>
  </header>
  </div>


)

}



function Loginpage()
{


  function isok()
  {
    let user=document.getElementById("user").value;
    let pass=document.getElementById("pass").value;

    if(user==="" || pass==="" )
    {
      alert("username or password cant be empty")
    }

    else if(!(user==="r"))
    {
      alert("user not found")
    }
    else if(!(pass==="p"))
    {
      alert("wronge password")
    }


    else
{


  if(pass=="p" && user=="r")
  {
    f();

  }

}
  }

  return(
    <div className="App">
    <header className="App-header">

      <h1>login page</h1>
    <div>

    <input type = "text" id="user" placeholder="enter the useer name" ></input>
    <br></br>


    <input type = "password" id="pass" placeholder="enter the password" ></input>

    <br></br>
    <br></br>
    <br></br>

    <button onClick={isok}> login</button>


    </div>
    </header>
    </div>
  );


}








 if(changepage==0){
  return (
    <div className="App">
      <header className="App-header">
        Vishnu
        <form onSubmit={f1}>
          {addbox("name", "text")}
          
 
          {addbox("email", "email")}

          {addbox("username", "text")}

          {addbox("password", "password")}
          
          {addbox("age", "tel")}
          
          {addbox("phone number", "tel")}
          
          {addbox("capital city", "text")}
          <h6 style={{size:"2px"}}> upload your profile pic    </h6>

          <Img />
          <br></br>

          <button onClick={f}> login</button>
          <button>submit</button>
        </form>
      </header>
    </div>
  );
 }

else if(changepage==1)
{
  return <Loginpage />
}

else if(changepage==2)
{
  return <Membership />
}

else if(changepage==3)
{
  return <Paymentpage />
}


else{
  return<h1>page not found</h1>
}


}
 
export default App;
 
const Img = () => {
  const [img, setImg] = useState(
    "https://recenthighlights.com/wp-content/uploads/2020/06/Solo-Leveling-Anime.jpg"
  );
 
  const imgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
 
  return (
    <>
      <input type="file" onChange={imgHandler} accept="image/*" />
      <br/>
      <img src={img} alt="should be an image" width="300" height="200"/>
    </>
  );
};