import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Layout/Hedaer/Header'
import Home from '../Home/Home'
import About from '../About/About'
import AllTour from '../Destination/AllTours/AllTour'
import Footer from '../Layout/Footer/Footer'
import Sub from '../Destination/SubTours/Sub'
import TourDetail from '../Destination/TourDetail/TourDetail'
import Reg from '../User/Registration/Reg';
import Log from '../User/Login/log'
import Trekking from '../Activity/Trekking/Trekking'
import Widlife from '../Activity/Wildlife/Widlife'
import River from '../Activity/RiverRafting/River'
import Paragliding from '../Activity/Paragliding/Paragliding'
import Allprod from '../Product/AllProduct/Allprod'
import ProdDetail from '../Product/DetailProduct/ProdDetail'
import BookNow from '../BookNow/BookNow'
import Profile from '../User/Profile/Profile'
import BookingDetail from '../BookNow/BookingDetails/BookingDetail'
import Contact from '../Contact/Contact'
import ProtectedRoutes from '../Protected/Protected'
import Error from '../ErrorPage/Error'
import Edit from '../BookNow/Edit/Edit'
import Pnf from '../PageNotFound/Pnf'

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path='' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='alltour' element={<AllTour />} />
                    <Route path='alltour/subtour/:subId' element={<Sub />} />
                    <Route path='alltour/subtour/:subId/tourdetail/:deId' element={<TourDetail />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='reg' element={<Reg />} />
                    <Route path='log' element={<Log />} />
                    <Route path='profile' element={<Profile />} />



                    <Route element={<ProtectedRoutes />}>
                     <Route path='booknow' element={<BookNow />} />
                    </Route>
                    <Route path='bookingdetail' element={<BookingDetail />} />
                    <Route path='edit/:eid' element={<Edit/>}/>


                    <Route path='allprod' element={<Allprod />} />
                    <Route path='allprod/proddetail/:prodId' element={<ProdDetail />} />

                    <Route path='trekking' element={<Trekking />} />
                    <Route path='wildlife' element={<Widlife />} />
                    <Route path='river' element={<River />} />
                    <Route path='paragliding' element={<Paragliding />} />

                    <Route path='*' element={<Pnf/>}/>
                    <Route path='error' element={<Error/>}/>

                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Routing