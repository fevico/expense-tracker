import Header from '@/components/Header'
import Index from '@/components/Index'

const Home = () => {
  return (
          <div className='bg-gray-100 h-screen'>
            <Header/>
            <div className="px-10 mt-35">
        <Index/>
             </div>
           </div>
  )
}

export default Home