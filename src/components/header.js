import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  const menu = [
    { title: 'Home', link: 'home' },
    { title: 'About Me', link: 'about' },
    { title: 'Portfolio', link: 'portfolio' },
    { title: 'Resume/CV', link: 'resume' },
    { title: 'Blog', link: 'blog' },
    { title: 'Social Media', link: 'social' },
    { title: 'Testimonials', link: 'testimonals' },
    { title: 'Services ', link: 'services' },
    { title: 'Blog/News', link: 'blog' },
    { title: 'FAQs', link: 'faq' },
    // 'Privacy Policy',
    { title: 'Contact Us', link: 'contactus' },
  ];
  return (
    <div className="header">
      {menu &&
        menu.map((item) => {
          return (
            <div>
              <Link to={item.link}>{item.title}</Link>
            </div>
          );
        })}
    </div>
  );
}
