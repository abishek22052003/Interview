import main from "../assets/main.png"

function Landing() {
  return < div>
  <h1 style={{justifyContent:"center", textAlign:"center"}}>Welcome to our Store 🚀</h1>
  <h3 style={{textAlign:"center",marginTop:"0px"}}>An E-commerce drip hub to cop trendy shoes, shirts, and watches with a smooth, 
    no-stress shopping experience.</h3>
    <img src={main} alt="" style={{width : "40%",marginLeft:"29%", marginTop:"35px"} } />
  </div>;
}

export default Landing;