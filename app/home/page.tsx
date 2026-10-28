import Header from '@/app/components/header' 
import Footer from '@/app/components/footer' 
import BlogPage from '@/app/blog/page'
export default function HomePage() {
    const members = [
        {"Name": "Naya", "Position": "Founder", "Photo":""},
        {"Name": "Shelicia", "Position": "Lead", "Photo":""},
        {"Name": "Celesta", "Position": "Lead", "Photo":""},
        {"Name": "Maddy", "Position": "Treasurer", "Photo":""},
        {"Name": "Smara", "Position": "Volunteer", "Photo":""},
        {"Name": "Elycia", "Position": "Volunteer", "Photo":""}
    ]
    const visions = [
        {'Heading': "Goal", "Description":"Our goals is to reach out to underpriviledged communities and provide aid to them. Our hope is for our small city to be a more supportive environment for everyone."},
        {'Heading': "Activities", "Description":"We regularly donate to people who are in need. Some things we've shared: Food, cards, and more!! We also raise funds through fun activites like selling food and collaborating with other businesses."},
        {'Heading': "Progress", "Description":"We've donated to various orphanages and a nursing home. In total we've helped around 100+ individuals, and we continually seek to widen our impact."}
    ]
    return (
        <>
            <div className='webWrapper'>
                <Header />
                <div className='webBody'>
                    <div className='introWrapper'>
                        <h1>What is ATS??</h1>
                        <p>All The Same (ATS) is a youth-led volunteer organization dedicated to creating a supportive space for underprivileged communities, regardless of background. ATS Palembang expands this mission across South Sumatra to foster positive social change!</p>
                    </div>
                    <div className='memberWrapper'>
                        <h1>Meet Our Members!</h1>
                        {members.map((member, index) => (
                            <div className='memberFrame' key={index}>
                                <img src={member.Photo} alt={member.Name}>
                                <h2>{member.Name}</h2> 
                                <h3>{member.Position}</h3> 
                            </div>
                        ))}
                    </div>
                    <div className='goalsWrapper'>
                        <h1>~Vision & Mission~</h1>
                        {visions.map((a)=>(
                            <div className={a.Heading}>
                                <h3>{a.Heading}</h3>
                                <p>{a.Description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <BlogPage />
                <Footer />
            </div>
        </>
    )
}