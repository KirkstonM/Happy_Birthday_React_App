import Home from './pages/Home/Home'
import Poem from './pages/Poem/Poem';
import Story from './pages/Story/Story';
import PhotoGallery from './pages/PhotoGallery/PhotoGallery';

export const routes = [
    {
        path: '/',
        element: Home,
        displayName: 'Home'
    },
    {
        path: '/poem',
        element: Poem,
        displayName: 'Poem'
    },
    {
        path: '/story',
        element: Story,
        displayName: 'Story'
    },
    {
        path : '/gallery',
        element: PhotoGallery,
        displayName : 'Gallery'
    }
];
