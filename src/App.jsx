import { Suspense } from 'react'
import './App.css'
import CustomerTickets from './Components/CustomerTickets/CustomerTickets'
import Header from './Components/Header/Header'
import Stats from './Components/Stats/Stats'
import { ToastContainer } from 'react-toastify';


function App() {
  const fetchDatas = fetch('datas.json').then(res => res.json())
  return (
    <>
      {/* <h1 className='text-7xl'>Hello World</h1> */}
      <Header></Header>
      <Stats></Stats>
      <Suspense fallback={<h1>Tickets Loading...</h1>}>
        <CustomerTickets fetchDatas={fetchDatas}></CustomerTickets>
      </Suspense>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
