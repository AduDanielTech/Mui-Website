import { useState, useEffect } from 'react';
import { Box, CardMedia } from '@mui/material';

const images: string[] = [
  'https://media.istockphoto.com/id/539813110/photo/devices-responsive-on-workspace-online-directory-online.jpg?s=612x612&w=0&k=20&c=Lc0H2shFbV3cjvbgOb9VpJtmRmNerdSHCZyzmjK6vtk=',
  'https://media.istockphoto.com/id/1253711838/photo/laptop-mobile-and-tablet-3d-rendering-showing-hotel-responsive-web-design-3d-illustration.jpg?s=612x612&w=0&k=20&c=YTMmniE_3USF3fQ7cd7ZQC4Qe7e9f9j7zEL_OqObWiU=',
  'https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NzU3MTV8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2NyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
];

export function MyComponent(): JSX.Element {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 4);
      setImageSrc(images[random]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box id="myDiv">
      <CardMedia component="img" image={imageSrc} alt="random image" />
    </Box>
  );
}
