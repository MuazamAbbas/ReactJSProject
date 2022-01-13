import React from 'react'
import Sdata from './Sdata';
import Card from './Card';

const Amazone = () => {
    return (
        <Card
            key={Sdata[3].id}
            imgscr={Sdata[3].imgscr}
            title={Sdata[3].title}
            sname={Sdata[3].sname}
            link={Sdata[3].link}
        />
    );
}

export default Amazone
