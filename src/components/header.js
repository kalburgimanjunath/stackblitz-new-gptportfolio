import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  const menu = [
    { title: 'Home', link: 'home' },
    { title: 'About Me', link: 'about' },
    { title: 'Portfolio', link: 'portfolio' },
    { title: 'Resume/CV', link: 'https://docs.google.com/document/d/15hAwugHy3a6zVBL7n7mNGNZ50qpvxsZ1hEFVK1wXTy4/edit#heading=h.5x0d5h95i329' },
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
