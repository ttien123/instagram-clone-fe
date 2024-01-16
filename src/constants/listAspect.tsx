import IconAspect16_9 from 'src/assets/IconAspect16_9';
import IconAspect1_1 from 'src/assets/IconAspect1_1';
import IconAspect4_5 from 'src/assets/IconAspect4_5';
import IconAspectOriginal from 'src/assets/IconAspectOriginal';

const listAspect = [
    {
        aspect: 'Original',
        value: 4 / 3,
        imgIcon: <IconAspectOriginal />,
    },
    {
        aspect: '1:1',
        value: 1 / 1,

        imgIcon: <IconAspect1_1 />,
    },
    {
        aspect: '4:5',
        value: 4 / 5,
        imgIcon: <IconAspect4_5 />,
    },
    {
        aspect: '16:9',
        value: 16 / 9,
        imgIcon: <IconAspect16_9 />,
    },
];

export default listAspect;
