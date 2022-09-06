import React, { createContext, useState } from "react";

export const add = createContext();

const Detail = (props) => {
  const [students, setStudents] = useState([
   
   
  ]);
  return (
    <div>
      <add.Provider value={[students, setStudents]}>
        {props.children}
      </add.Provider>
    </div>
  );
};

export default Detail;
