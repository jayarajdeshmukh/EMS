import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ChangePassword(){

  const navigate = useNavigate();


  const [oldPassword,setOldPassword] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const [message,setMessage] = useState("");



  const handleChangePassword = async(e)=>{

    e.preventDefault();


    const user = JSON.parse(
      localStorage.getItem("user")
    );


    if(!user){

      setMessage("User not found");
      return;

    }



    // Check old password

    if(user.password !== oldPassword){

      setMessage("❌ Old password is incorrect");
      return;

    }



    // Check new password

    if(newPassword.length < 6){

      setMessage(
        "❌ Password must be minimum 6 characters"
      );

      return;

    }



    if(newPassword !== confirmPassword){

      setMessage(
        "❌ Passwords do not match"
      );

      return;

    }



    try{


      await axios.patch(

        `https://ems-backend-1-lhsi.onrender.com/${user.id}`,

        {
          password:newPassword
        }

      );



      // update local storage

      const updatedUser = {

        ...user,

        password:newPassword

      };


      localStorage.setItem(

        "user",

        JSON.stringify(updatedUser)

      );



      setMessage(
        "✅ Password changed successfully"
      );



      setTimeout(()=>{

        navigate("/profile");

      },1500);



    }
    catch(error){

      console.log(error);

      setMessage(
        "Something went wrong"
      );

    }


  };





return (

<div className="p-6 bg-gray-100 min-h-screen">


<div className="max-w-md bg-white shadow rounded-xl p-6">


<h2 className="text-2xl font-bold mb-5">

Change Password

</h2>



<form onSubmit={handleChangePassword}>


<input

type="password"

placeholder="Old Password"

value={oldPassword}

onChange={(e)=>setOldPassword(e.target.value)}

className="w-full p-3 border rounded mb-3"

/>



<input

type="password"

placeholder="New Password"

value={newPassword}

onChange={(e)=>setNewPassword(e.target.value)}

className="w-full p-3 border rounded mb-3"

/>



<input

type="password"

placeholder="Confirm New Password"

value={confirmPassword}

onChange={(e)=>setConfirmPassword(e.target.value)}

className="w-full p-3 border rounded mb-3"

/>




<button

className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700"

>

Update Password

</button>



</form>



{
message &&

<p className="mt-4 text-center text-blue-600">

{message}

</p>

}



</div>


</div>

);


}


export default ChangePassword;