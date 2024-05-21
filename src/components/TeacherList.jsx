import React from 'react'
import "../styles/teacherList.css"
import Image1 from '../assets/download.jpg'

const teachers = [
    {
        image: Image1,
        name: 'Prof. John Doe',
        duration: '20 hours lesson',
        cost: '100'
    },
    {
        image: Image1,
        name: 'Prof. John Doe',
        duration: '20 hours lesson',
        cost: '100'
    },
    {
        image: Image1,
        name: 'Prof. John Doe',
        duration: '20 hours lesson',
        cost: '100'
    },
    {
        image: Image1,
        name: 'Prof. John Doe',
        duration: '20 hours lesson',
        cost: '100'
    },
    {
        image: Image1,
        name: 'Prof. John Doe',
        duration: '20 hours lesson',
        cost: '100'
    },
]

const TeacherList = () => {
    return (
        <div className='teacher--list'>
            <div className="list--header">
                <h2>Teachers</h2>
                <select name="" id="">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                </select>
            </div>
            <div className="list--container">
                {teachers.map((teacher, index) => (
                    <div className="list">
                        <div className="teacher--details">
                            <img src={teacher.image} alt={teacher.name} />
                            <h2>{teacher.name}</h2>
                        </div>
                        <span>{teacher.duration}</span>
                        <span>${teacher.cost}/hr</span>
                        <span className='teacher--todo'>:</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeacherList
