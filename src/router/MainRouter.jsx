import { NavBarUi,FooterUi } from '../ui'
import { Route, Routes } from "react-router-dom";
import { HomePage, AboutMePage, ContactPage, ImcPage, ClockPage, AgeCalcPage } from '../pages';

export const MainRouter = () => {
  return (
        <>
            <NavBarUi />
            <Routes>
                    <Route path="/*" element={ <HomePage /> } />
                    <Route path='/home' element={<HomePage />}/>
                    <Route path='/imc' element={<ImcPage />}/>
                    <Route path='/age' element={<AgeCalcPage />}/>
                    <Route path='/clock' element={<ClockPage />}/>
                    <Route path='/about-me' element={<AboutMePage />}/>
                    <Route path='/contact' element={<ContactPage />}/>
            </Routes>
            <FooterUi/>
        </>
    )
}
