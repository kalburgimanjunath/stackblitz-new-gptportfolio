import React from 'react';
import { isEmpty } from '../utilities/helper';
import { Cards } from '../components/';
export default function Portfolio() {
  //   Projects:
  // Showcase your work with images, descriptions, and links.
  // Case Studies:
  // In-depth analysis of a few key projects.
  // Testimonials:
  // Include quotes from clients or colleagues.
  const CARDS = [
    {
      id: 1,
      title: 'product',
      description: 'product 1 description',
      image: 'https://picsum.photos/seed/picsum/200/300',
      link: 'https://google.com',
    },
  ];
  const Studies = [
    {
      id: 1,
      title: 'ERP Study',
      description: 'product 1 description',
      image: 'https://picsum.photos/seed/picsum/200/300',
      link: 'https://google.com',
    },
  ];
  const Testimonials = [
    {
      id: 1,
      title: 'Santosh Panda',
      description: 'Santosh Panda Quotes',
      image: 'https://picsum.photos/seed/picsum/200/300',
    },
  ];

  const PrintCards = ({ items }) => {
    return isEmpty(items) ? <Cards items={items} /> : 'empty items';
  };
  return (
    <div>
      <h3>Portfolio</h3>
      <PrintCards items={CARDS} />
      <h4>Projects</h4>
      <PrintCards items={CARDS} />
      <h4>Case Studies</h4>
      <PrintCards items={Studies} />
      <h4>Testimonials</h4>
      <PrintCards items={Testimonials} />
    </div>
  );
}
