// import React from 'react';

// function App() {
//   return (
//   <div>
//   <h1>helloword</h1>
  
  
//     <h2>list</h2>
//     <ol>
//       <li>marella</li>
//       <li>leela</li>
//       <li>venkata meerasai</li>
//     </ol>

//     <table>

//     <th>course</th>
//     <th>university</th>
//     <th>yearofpassing</th>

//     <tr>
//       <td>b.sc</td>
//       <td>viswateja college</td>
//       <td>2023</td>
//     </tr>
//     <tr>
//       <td>inter</td>
//       <td>aditya junior college</td>
//       <td>2019</td>
//     </tr>

    
//     </table>
//   </div>

//   );
// }

// export default App;




import {components} from "react"
import ButtonComponets from "./components/button/button-components";
import ListComponent from "./components/list/list-component";
import FormComponent from "./components/forms/form-components";










function App(){
  return(
    <div>
      <h3>app.js</h3>
      <ButtonComponets></ButtonComponets>
      <ListComponent/>
      <FormComponent></FormComponent>
    </div>
  )
}
export default App
