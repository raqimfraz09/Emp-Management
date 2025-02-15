import React, { useEffect, useState } from 'react'
import EmpTable from './EmpTable'
import { GetAllEmployees } from '../api';

function EmployeeManagementApp() {

    const [employeesData, setEmployeeData] = useState({
        "employees":[],
        "pagination": {
            "totalEmployess": 0,
            "currentPage": 1,
            "totalPages": 1,
            "pageSize": 5
        }
    });

    const fetchEmployees = async (search='', page=1, limit = 5) => {
        try{
            const data= await GetAllEmployees(search, page, limit);
            console.log(data);
            setEmployeeData(data);
        }
        catch(err){
            console.log('Error', err);
        }

    }

    


    useEffect(()=> {
        fetchEmployees();
    }, [])



  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 p-3'>
        <h1>Employee Management App</h1>
        <div className='w-100 d-flex justify-content-center'>
            <div className='w-80 border bg-light p3' style={{width: '80%'}}>
                <div className='d-flex justify-content-between mb-3'>
                    <button className='btn btn-primary'>
                        Add
                    </button>

                    <input type='text' placeholder='Search Employee....' className='form-control w-50'/>
                </div>

                <EmpTable
                employees = {employeesData.employees}
                pagination = {employeesData.pagination} 
                />

            </div>
        </div>
    </div>
  )
}

export default EmployeeManagementApp