import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    
    {
      //action: 'tx',
      label: 'Check Casts Count',
      //target: `${NEXT_PUBLIC_URL}/api/tx`,
      //postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    }, 

    /* {
      label: 'My tickets',
    }, */
    
    /* {
      action: 'tx',
      label: 'Send Base Sepolia',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    }, */
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1.91:1',
  },
  input: {
    text: 'Type channel you want to check',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame_result`,
});

export const metadata: Metadata = {
  title: 'Check Weekly Top Channel Cast User',
  description: 'LFG',
  openGraph: {
    title: 'Check Weekly Top Channel Cast User',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Wild Allowance check</h1>
    </>
  );
}
