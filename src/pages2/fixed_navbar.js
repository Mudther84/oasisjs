import React from 'react';
import { Link } from 'react-router-dom';

// مكونات الصفحة - تأكد من صحة المسارات في مشروعك
import Menu from "./pages/Header";         // مثال على رأس الصفحة أو القائمة
import Home from "./pages/Home";           // الصفحة الرئيسية
import Slow from "./pages/slow";           // مكون بطيء (ربما Lazy loading)
import NewsSection from "./pages/myImage"; // قسم الأخبار أو الصور
import Footer from "../footer";            // تذييل الصفحة
import Pizza from './Header';              // مكون آخر للرأس (قد يكون غير ضروري)

function Navbar() {
    return (
        <>
            {/* الرأس الثابت */}
            <header className="sticky-header">
                <ul>
                    <li><Link to='/' style={{ color: "#ffa07a" }}>الرئيسية</Link></li>
                    <li><Link to='/news'>أخبار</Link></li>
                    <li><Link to='/contact'>اتصل بنا</Link></li>
                    <li><Link to='/cart'>سلة التسوق</Link></li>
                </ul>
            </header>

            {/* قسم الترحيب */}
            <section className="welcome-section">
                <div className="overlay"></div>
                <div className="welcome-content">
                    <h1>مرحبًا بكم في مطاعم لذيذ</h1>
                    <p>
                        استمتعوا بأطباق لذيذة تم إعدادها بعناية وتقديمها باهتمام.
                    </p>
                    <Link to="/menu" className="menu-button">استكشف قائمة الطعام</Link>
                </div>
            </section>

            {/* عرض المكونات الأخرى */}
            <Slow />
            <br />
            <Menu />          {/* ربما هو نفس Navbar */}
            <Pizza />         {/* قد يكون غير ضروري أو يمكن حذفه */}
            <Home />          {/* محتوى الصفحة الرئيسية */}
            <NewsSection />   {/* مكون الأخبار أو الصور */}
            <Footer />        {/* تذييل الصفحة */}
        </>
    );
}

export default Navbar;