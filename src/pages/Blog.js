import React from 'react';
import { isEmpty } from '../utilities/helper';
import PrintCards from '../utilities/PrintCards';
import { Cards } from '../components/';
export default function Blog() {
    const BLOG = [{
        id: 1,
        title: 'blog',
        description: 'blog 2',
        image: 'https://picsum.photos/seed/picsum/200/300',
      },]
    return <div>
        <h3>Blog</h3>
        <PrintCards items={BLOG} />
    </div>
}