import React from 'react';
import { Card, CardTitle, CardDescription } from './FeaturesElements';

const FeaturesCard = ({rname, description}) => {
    return (
        <>
            <Card animate={{
                y:[100,0]
            }}
                whileHover={{scale:1.1} }
            >
                <CardTitle>{rname}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </Card>  
        </>
    )
}

export default FeaturesCard;
