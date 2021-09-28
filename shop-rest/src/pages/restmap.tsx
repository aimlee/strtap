import React, {useState} from 'react';
import { Modal } from '@redq/reuse-modal';
import dynamic from 'next/dynamic';
import {QRScan} from "../components/camera/camerascan";
import {TableScheme} from "../components/table-scheme/table_scheme";

export default function TablScheme({ deviceType }) {
    return (
            <Modal>
                <main>
                    <TableScheme data={"src"} />
                </main>
            </Modal>
    );
}
