import React, { useContext } from "react";
import { Context } from "./Home";
export default function House() {
  const value = useContext(Context);
  console.log("valuedata", value.user);
  return (
    <table  border="2">
      {value.length > 0 &&
        value.map((u) => {
          
            return(
            <tr>
              <td>{u.id}</td>
              <td>{u.name}</td>
             <td>{u.username}</td>
             <td>{u.email}</td>
             <td>{u.phone}</td>


            </tr>
            )
          
        })}
    </table>
  );
}
