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
import { Greeting } from "./components/greeting/greeting ";
import { List } from "./components/todo-list/list";
import ButtonComponets1 from "./components/class-componets/c-button";
import Inlinestyles from "./components/styling/inline-style";
import ExternalStyels from "./components/styling/externalstyle";
import ModuleStyles from "./components/styling/module-style";











function App(){
  return(
    <div>
      <h3>app.js</h3>
      <ButtonComponets></ButtonComponets>
      <ListComponent/>
      <FormComponent></FormComponent>
      <Greeting></Greeting>
      <List></List>
      <ButtonComponets1></ButtonComponets1>


      {/* <Inlinestyles></Inlinestyles> */}
      <ExternalStyels></ExternalStyels>
      <ModuleStyles></ModuleStyles>
      
      

      
    </div>
  )
}
export default App;
