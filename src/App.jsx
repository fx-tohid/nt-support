import { Suspense, useState } from 'react'
import './App.css'
import CustomerTickets from './Components/CustomerTickets/CustomerTickets'
import Header from './Components/Header/Header'
import Stats from './Components/Stats/Stats'
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer/Footer'


function App() {
  const fetchDatas = fetch('datas.json').then(res => res.json())

  const [progress, setProgress] = useState(0);
  const [solved, setSolved] = useState(0);
  return (
    <>
      {/* <h1 className='text-7xl'>Hello World</h1> */}
      <Header></Header>
      <Stats solved={solved} progress={progress}></Stats>
      <Suspense fallback={<h1>Tickets Loading...</h1>}>
        <CustomerTickets setSolved={setSolved} setProgress={setProgress} fetchDatas={fetchDatas}></CustomerTickets>
      </Suspense>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  )
}

export default App
