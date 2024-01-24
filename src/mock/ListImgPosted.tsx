import img1 from 'src/assets/AuthImg/screenshot1.png';
import img2 from 'src/assets/AuthImg/screenshot2.png';
import img3 from 'src/assets/AuthImg/screenshot3.png';
import video1 from 'src/assets/AuthImg/Vite + React + TS and 6 more pages - Personal - Microsoft​ Edge 2023-12-24 23-17-23.mp4';

const listImgPosted = [
    {
        id: 1,
        type: 'image',
        url: img1,
        cropInit: { x: 0, y: 0 },
        zoomInit: 1,
    },
    {
        id: 2,
        type: 'image',
        url: img2,
        cropInit: { x: 0, y: 0 },
        zoomInit: 1,
    },
    {
        id: 3,
        type: 'image',
        url: img3,
        cropInit: { x: 0, y: 0 },
        zoomInit: 1,
    },
    {
        id: 4,
        type: 'video',
        url: video1,
        cropInit: { x: 264.7352941176471, y: -0.125 },
        zoomInit: 1,
    },
];

export default listImgPosted;
