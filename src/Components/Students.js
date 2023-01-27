import React from 'react'
import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import  Data from "./DataContext";

const Students = () => {
  let context=useContext(Data);
  console.log(context)
  return (
    <div>
      <text id='heading'>Students Details</text>
      <Link to='addnewstudent'> 
        <button id='ansbtn'>Add New Student</button>
        </Link>
        <table width='100%'>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
           <tr>
         <td>Ajay</td>
          <td>22</td>
          <td>Full Stack</td>
          <td>EA18</td>
          </tr>
          <td>Deepak</td>
          <td>22</td>
          <td>BBA</td>
          <td>2019</td>
          
          {/* {context.entries.map((item)=>(
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.batch}</td>
              <td>
                <Link to='editstudent' state={{data:item.id}}>Edit</Link>
              </td>
            </tr>
          ))} */}
          
        </table>

      </div>
  )
}

export default Students