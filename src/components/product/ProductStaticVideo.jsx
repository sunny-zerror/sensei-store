import React from 'react'
import Marquee from 'react-fast-marquee'

export const ProductStaticVideo = () => {
    return (
        <>
            <div className="product_page__video_section">
                <video
                    className="product_page__video"
                    loop
                    autoPlay
                    muted
                    src="https://oflyn.fr/cdn/shop/videos/c/vp/d6f92673694940a5817f345b3abc144b/d6f92673694940a5817f345b3abc144b.HD-1080p-7.2Mbps-44303516.mp4?v=0"
                ></video>

                <div className="product_page__video_marquee">
                    <Marquee speed={100}>
                        <div className="marquee_inner text-8xl">
                            <p>Memory Collection</p>
                            <p>Memory Collection</p>
                            <p>Memory Collection</p>
                            <p>Memory Collection</p>
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    )
}
