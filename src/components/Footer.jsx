import React from 'react'

function Footer() {
  return (
    <footer className="footer  sm:footer-horizontal bg-[#081F3F] text-white md:text-sm lg:text-lg p-10 gap-6 lg:gap-14 ">
  <aside>
  
    <h2 className='text-xl'>
      CONTACT US
    </h2>
  
        <p>Hong Kong SAR Headquarters,</p>
    <p>9th Floor, EGL Tower,</p>
    <p>83 Hung To Road,</p>
    <p>Kwun Tong,</p>
    <p>Kowloon, Hong Kong SAR.</p>
    
    <p className='mt-6'>Tel: <a href="tel:+852 3512 0800" target='_blank'>+852 3512 0800</a></p>
    <p>Fax: +852 2345 8558</p>
    <p>info@epichk.com</p>
    <p>communications@epichk.com</p>
  </aside>
  <nav>
    <h6 className="footer-title">our company</h6>
    <a className="link link-hover pl-2.5">About Us</a>
    <a className="link link-hover pl-2.5">Our People</a>
    <a className="link link-hover pl-2.5">Our Clients</a>
    <a className="link link-hover pl-2.5">Awards, Accreditations & Certifications</a>
    <a className="link link-hover pl-2.5">Privacy Policy</a>
    <a className="link link-hover pl-2.5">Terms of use</a>
    <a className="link link-hover pl-2.5">Code of Conduct</a>
    <a className="link link-hover pl-2.5">Reports and Downloads</a>
  </nav>
<div>
      <nav>
    <h6 className="footer-title">our purpose</h6>
    <a className="link link-hover pl-2.5">Relentless Pursuit of Better</a>
    <br />
    <a className="link link-hover pl-2.5">Epic Brand Values</a>

  </nav>
  <nav>
    <h6 className="footer-title">inside our showroom</h6>
    <a className="link link-hover pl-2.5">Products</a>
   

  </nav>
</div>
  <nav>
    <h6 className="footer-title">esg</h6>
    <a className="link link-hover pl-2.5">Asian University for Women</a>
    <a className="link link-hover pl-2.5">Epic University</a>
    <a className="link link-hover pl-2.5">Recycled Polyester</a>
    <a className="link link-hover pl-2.5">Water-less Denim</a>
  </nav>
  <nav>
    <h6 className="footer-title">our capabilities</h6>
    <a className="link link-hover pl-2.5">Development</a>
    <a className="link link-hover pl-2.5">Sourcing</a>
    <a className="link link-hover pl-2.5">Manufacturing</a>
    <a className="link link-hover pl-2.5">Factories of the Future</a>
    <a className="link link-hover pl-2.5">Technology</a>
  </nav>
</footer>
  )
}

export default Footer