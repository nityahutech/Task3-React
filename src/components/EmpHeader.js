import React from 'react'

function EmpHeader({setIsAdding}) {
  return (
    <header>
        <h3>Employee Management Software</h3>
        <div style={{marginTop: '30px', marginBottom: '18px'}}>
            <button onClick={()=> setIsAdding(true)} className='btn btn-info'>Add Employee</button>
        </div>
    </header>
  )
}

export default EmpHeader