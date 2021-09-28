import React, {useState} from 'react';
import { Modal } from '@redq/reuse-modal';
import dynamic from 'next/dynamic';
import {QRScan} from "../components/camera/camerascan";

export default function ScanQR({ deviceType }) {
    return (
            <Modal>
                <main>
                    <QRScan />
                </main>
            </Modal>
    );
}
