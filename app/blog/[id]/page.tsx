import blogs from '@/app/blog/blogContent.json'
import Header from '@/app/components/header' 
import Footer from '@/app/components/footer' 

export default async function BlogContentPage({ params }: {params: Promise<{id: string}>}) {
    const { id } = await params
    const chosenBlog = blogs.find((blog) => String(blog.id) === id)
    if (!chosenBlog) {
        return(<h1 className='errorMessage'>Cannot find blog</h1>)
    }
    const text = chosenBlog.text
    return(
        <>
            <Header />
            <h1 className='blogTitle'>{chosenBlog.title}</h1>
            <div className='textBox'>
                {text.map((para, index)=> (
                    <div className='section' key={index}>
                        <h2 className='heading'>{para.heading}</h2>
                        <p className='contentText'>{para.body}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}