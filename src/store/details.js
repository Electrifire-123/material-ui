

import React, { createContext, useState, } from 'react'

export const store = createContext();
const Details = (props) => {
    const [students, setStudents] = useState([
        {
            'Name':'Raju',
            'Age':'23',
            'Course':'React',
            'Batch': 'FEB',
            'id':'1'
        },
        {
            'Name':'Rancho',
            'Age':'24',
            'Course':'Angular',
            'Batch': 'JAN',
            'id':'2'

        },
        {
            'Name':'Farhan',
            'Age':'23',
            'Course':'MERN',
            'Batch': 'FEB',
            'id':'3'

        },
        {
            'Name':'Sarang',
            'Age':'22',
            'Course':'Python',
            'Batch': 'JAN',
            'id':'4'

        },
        {
            'Name':'Yash',
            'Age':'21',
            'Course':'C++',
            'Batch': 'Aug',
            'id':'5'

        },
        {
            'Name':'Harsh',
            'Age':'20',
            'Course':'C',
            'Batch': 'Mar',
            'id':'6'

        },
    ])
  return (
        <store.Provider value={[students,setStudents]}>
            {props.children}
        </store.Provider>
  )
}

export default Details;