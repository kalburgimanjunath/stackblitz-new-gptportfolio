import React from 'react';
import { isEmpty } from '../utilities/helper';
import PrintCards from '../utilities/PrintCards';
import { Cards } from '../components/';
export default function Blog(){
    const BLOG = []
return <div>
<h3>Blog</h3>
<PrintCards items={BLOG}/>
</div>
}