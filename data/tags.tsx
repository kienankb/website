import {FaUserClock, FaHeartbeat, FaPenNib} from 'react-icons/fa';


export interface TagData {
    name: string;
    icon: JSX.Element;
}

export const Tags: TagData[] = [
    {
        name: 'old',
        icon: <FaUserClock
            color='red'
            title='old' />,
    },
    {
        name: 'reflective',
        icon: <FaHeartbeat
            color='green'
            title='reflective' />,
    },
    {
        name: 'fiction',
        icon: <FaPenNib
            color='purple'
            title='fiction' />,
    }
];
