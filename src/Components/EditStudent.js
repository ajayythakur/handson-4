import React from 'react'

const EditStudent = () => {
  return (
    <form>
    <label for="name">Name</label>
    <input type="text"></input>
    <label for="age">Age</label>
    <input type="number"></input>
    <br />
    <label for="course">Course</label>
    <input type="text"></input>
    <label for="Batch">Batch</label>
    <input type="number"></input>
    <br />
    <button>Cancel</button>
    <button>Submit</button>
  </form>  )
}

export default EditStudent