import React from 'react'
import CourseNav from '../components/CourseNav'
export const metadata = {
    title: 'My first react application',
    description: 'more about our courses',
  }
export default function layout({children}) {
  return (
    <div className='flex space-x-2'>
        <CourseNav/>
        <section>
            {children}
        </section>
        

    </div>
  )
}
