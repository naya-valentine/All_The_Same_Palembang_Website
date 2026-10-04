import { Header } from '@/app/components/header'
import React from 'react'
import blogs from '@/app/blog/blogContent.json'
export default function BlogPage() {
    return(
        <>
            <div className='container'>
                <Header />
                <div className='titleContainer'>
                    <h1>Blog</h1>
                    <h3>Come read our stories!</h3>
                </div>
                <div className='blogGrid'>
                    <ul>
                        {blogs.map((blog)=> (
                        <li key={blog.id}>
                            <a href=''>
                                <h3>{blog.title}</h3>
                                <img src={blog.image} alt={blog.title}/>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}