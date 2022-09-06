import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'



const Student = () => {
  const [student] =useContext(store)
  return (
    <div>

    <div className="student_nav_ctn">
    <span className='Contact_detail_text_ctn'>Student Details</span>
    <Link className='add_student_button' to="/add-student">Add Students</Link>
    </div>

    <div className="table_ctn">
    <div>
        <table class="table table-bordered border-primary">
  <thead>
    <tr>
    <th scope="col">Name</th>
    <th scope="col">Age</th>
    <th scope="col">Course</th>
    <th scope="col">Branch</th>
    <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>
    {student.map((student)=>(<tr key={student.id}>

<td>{student.Name}</td>
<td>{student.Age}</td>
<td>{student.Course}</td>
<td>{student.Branch}</td>
<td><Link to="/edit">Edit</Link></td>

</tr>


    ))}


</tbody>
</table>




    </div>


   
      
    </div>

   





    </div>
  )
}

export default Student




