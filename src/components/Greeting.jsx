import React, { useState, useEffect } from "react";

const greeting= ['Paz', 'Amor' , 'sentimento Abrupto', 'felicidade', 'armonia','inspiração']

const Greeting = ({position}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (count < 6) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 2000);
    } else {
      setCount(0);
    }
    return () => {
      clearInterval(interval)
    }
  }, [count]);
  return <h1 style={{color: 'white'}}> bem vindo a esse ambiente de {greeting[count]} </h1>;
};

export default Greeting;