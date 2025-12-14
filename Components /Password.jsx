import { useState } from "react";

const  Password =()=> {
  
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
       <div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border m-5 align-center"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

   
    
  );
}
export default  Password;