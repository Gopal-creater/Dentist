import React from 'react';
import XRay from 'react-js-x-ray';
import Tooth from '../../assets/6.png';
import Blue_Tooth from '../../assets/5.png';

export default function Testing() {
    return (
        <div>
            <XRay
                images={
                    [Tooth, Blue_Tooth]
                }
                beyond={false}
                diameter={300}
                cursor={true}
                responsive={true}
                type={'circle'}
                backgroundColor={''}
                resize={[
                    {
                        screen: 1199,
                        diameter: 100
                    },
                    {
                        screen: 991,
                        diameter: 50
                    }
                ]}
            />
        </div>
    );
}