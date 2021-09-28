import React, { useState } from 'react';
import dynamic from "next/dynamic";
import Link from "next/link";

const QrReader = dynamic(() => import('react-qr-reader'),{ ssr: false })

interface Props {
  style?: any;
}

export const QRScan = ({
  style,
}: Props) => {

    const [scanResultWebCam, setScanResultWebCam] =  useState('');


    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
            openInNewTab(result);
        }
    }
    return (
    <section>


        <QrReader
            onError={handleErrorWebCam}
            delay={300}
            onScan={handleScanWebCam}
            style = {{marginTop:"10%" , width: '100%'}}
        />
        <a href={scanResultWebCam} >
            {scanResultWebCam}
        </a>


    </section>

  );
};
