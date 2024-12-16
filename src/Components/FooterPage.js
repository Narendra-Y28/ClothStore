import React from 'react';

export default function FooterPage() {
 

  return (
    <footer className="footerSection"> 
      <section className="footerBanner">
        <hr/>
        <img src="https://www.pngmart.com/files/7/Guy-PNG-Pic.png" alt="Footer Banner" className="footerImg" />
        <div>
          <h2>Let's Keep in Touch</h2>
          <p>News and inspo straight to your inbox, every week. Let’s have some fun, with style.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
            />
            <button type="submit">Subscribe</button>
          </form>
          <p>By clicking you agree to Velasca's terms of service and consent to the processing of your data.</p>
        </div>
      </section>

      <section className="footer">
        <div className="footerSectionItem aboutUs">
          <h4>WE'RE HERE FOR YOU</h4>
          <p>Velasca was created to offer you artisanal quality shoes and clothing at a fair price. To be worn for a lifetime. We really care, so if you have any doubts, do get in touch.</p>
        </div>

        <div className="footerSectionItem help">
          <h2>HELP</h2>
          <ul>
            <li>Impact Report</li>
            <li>Shipping and Return</li>
            <li>Make a Return</li>
            <li>Mob: +91 9652146503</li>
            <li>Email: hello@clothstore.com</li>
          </ul>
        </div>

        <div className="footerSectionItem about">
          <h2>ABOUT</h2>
          <ul>
            <li>All Our Bottegas</li>
            <li>Work With Us</li>
            <li>Our Story</li>
            <li>Made in India</li>
          </ul>
        </div>
      </section>
      
    </footer>
  );
}
