import React from 'react'
import './AdminHomePage.css'
import {Visibility} from '@material-ui/icons'
import TeacherInfo from '../../../images/svg-9.svg'
import StudentInfo from '../../../images/svg-10.svg'
import  CoursesInfo from '../../../images/svg-7.svg'




const AdminHomePage = () => {



    return (
        <>
       <div className='Info'>
       <div className='InfoItems'>
        <div className='InfoContainer'>
        <span className='InfoTitle'>Teachers</span>
            <span className='InfoNumber'>4</span>
            <img src={TeacherInfo} alt='Pic' className='IconStyle'/>
        </div>
       </div>
       <div className='InfoItems'>
        <span className='InfoTitle'>Students</span>
        <div className='InfoContainer'>
            <span className='InfoNumber'>4</span>
            <img src={StudentInfo} alt='Pic' className='IconStyle'/>
        </div>
       </div>
       <div className='InfoItems'>
        <span className='InfoTitle'>Courses</span>
        <div className='InfoContainer'>
            <span className='InfoNumber'>4</span>
            <img src={CoursesInfo} alt='Pic' className='IconStyle'/>
        </div>
       </div>
       </div>
       <div className='WidgetHome'>
          <div className='WidgetSm'>
            <span className='WidgeSmtTitle'> Available Teachers </span>
            <ul className='WidgetSmList'>
                <li className='WidgetSmListItems'>
                    <img src='https://picsum.photos/200' alt='PicT' className='WidgetSmImg' />
                    <div className='WidgetSmTeacher'>
                        <span className='WidgetSmTeacherName'>bilel said</span>
                        <span className='WidgetSmTeacherSubject'>Informatique</span>
                    </div>
                    <button className='WidgetSmButton'>
                       <Visibility className='WidgetsmIcon' /> display
                    </button>
                </li>
            </ul>
          </div>
           <div className='WidgetLm'>
            <h3 className='WidgetLmTitle'>Students</h3>
            <table className='WidgetLmTable'>
                <thead className='WidgetLmTr'>
                    <th className='WidgetLmTh'>Name</th>
                    <th className='WidgetLmTh'>Grade</th>
                    <th className='WidgetLmTh'>Subject</th>
                    <th className='WidgetLmTh'>Hours</th>
                </thead>
                <tbody className='WidgetLmTr'>
                <td className='WidgetLgStd'>
                   <img src='https://picsum.photos/200' alt='StdPic' className='WidgetLmImg' />
                   <span className='WidgetLgName'> Ayoub Gebsi </span>
             </td>   
             <td className='WidgetLmGrade'>8éme année</td>
             <td className='WidgetLmSubject'>English</td>
             <td className='WidgetLmHours'>24</td>
             </tbody>
            </table>
          </div>
        
       </div>
     </>
    )
}

export default AdminHomePage
