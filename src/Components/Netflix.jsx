import React from 'react'
import Sdata from './Sdata';
import Card from './Card';

const Netflix = () => {
    return (
        <Card
            key={Sdata[1].id}
            imgscr={Sdata[1].imgscr}
            title={Sdata[1].title}
            sname={Sdata[1].sname}
            link={Sdata[1].link}
        />
    );
}

export default Netflix
