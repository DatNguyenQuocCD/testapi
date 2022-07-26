import './App.css';
import { useState } from 'react';
import {Image} from 'cloudinary-react';
import axios from 'axios';
function App() {

  const [imageSelected, setImageSelected] = useState("");
  const uploadImge = ()=> {
    var name = "bánh";
    var price = 12000;
    const formData = new FormData();
    formData.append("file",imageSelected);
    formData.append("upload_preset","esofqqnh");
    axios.post("https://api.cloudinary.com/v1_1/datpnv23apasserellnumeriques/image/upload", formData)
    .then((response)=>{
      console.log(response);
      var data = {
        name: name,
        img: response.data.secure_url,
        price: price
      }
      axios.post("https://61b5b8db0e84b70017331bac.mockapi.io/apitests", data)
      .then((response)=>{
        console.log(response.data);
        alert('thành công');
      });
    });

  };

  const deleteImge = ()=>{
    axios.delete("https://api.cloudinary.com/v1_1/datpnv23apasserellnumeriques/image/upload/5")
    .then((response)=>{
      alert('xóa thành công');
    });
  }
  return(
    <div>
      <input type="file" onChange={(event)=>{setImageSelected(event.target.files[0])}}/>
      <button onClick={uploadImge}>Upload Image</button>
      <button onClick={deleteImge}>Delete Image</button>
      {/* <img width={500} src='https://res.cloudinary.com/datpnv23apasserellnumeriques/image/upload/v1658801319/cld-sample-5.jpg'/> */}
      {/* <Image style={{with:200}} cloundName ="datpnv23apasserellnumeriques" publicId = "https://res.cloudinary.com/datpnv23apasserellnumeriques/image/upload/v1658811659/tyoxzvw7mbuutupg3mkw.png"/> */}
    </div>
  )
}

export default App;
