import { useEffect, useState } from "react";

const Greeting = () => {
  const [time, setTime] = useState(new Date());
  const hours = time.getHours();

  // Greeting logic
  let greeting = "";
  if (hours >= 5 && hours < 12) greeting = "Good Morning ";
  else if (hours >= 12 && hours < 17) greeting = "Good Afternoon ";
  else if (hours >= 17 && hours < 22) greeting = "Good Evening ";
  else greeting = "Good Night 🌙";

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        color: "white",
        fontFamily: "Poppins, sans-serif"
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "2px 2px 8px rgba(0,0,0,0.3)"
        }}
      >
        {greeting}
      </h1>

      <p
        style={{
          fontSize: "32px",
          background: "rgba(255, 255, 255, 0.2)",
          padding: "15px 30px",
          borderRadius: "12px",
          backdropFilter: "blur(5px)",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          letterSpacing: "2px"
        }}
      >
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Greeting;