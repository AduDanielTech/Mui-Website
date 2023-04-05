import { useState, useEffect } from 'react';
import { Box,Stack } from "@mui/system";
import { Card,CardContent,Typography,CardActions,Button,CardMedia } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { Frontpage2Card } from './frontpage2Card';


















const content =[
  {
    headerText:' Responsive Design',
    descText:' Make sure the website design is responsive and adjusts to different screen sizes so that it can be viewed on different devices such as smartphones, tablets, and desktops.',
    img:[
      'https://media.istockphoto.com/id/539813110/photo/devices-responsive-on-workspace-online-directory-online.jpg?s=612x612&w=0&k=20&c=Lc0H2shFbV3cjvbgOb9VpJtmRmNerdSHCZyzmjK6vtk=',
      'https://media.istockphoto.com/id/1253711838/photo/laptop-mobile-and-tablet-3d-rendering-showing-hotel-responsive-web-design-3d-illustration.jpg?s=612x612&w=0&k=20&c=YTMmniE_3USF3fQ7cd7ZQC4Qe7e9f9j7zEL_OqObWiU=',
      'https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NzU3MTV8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2NyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    ],

  },
  {
    headerText:' Navigation',
    descText:' Create an intuitive and easy-to-use navigation menu that helps users find what they are looking for quickly and easily.',
    img:[
      'https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF2aWdhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1569938709389-ff8ab00530b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwbmF2aWdhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      'https://thumbs.dreamstime.com/b/futuristic-touch-screen-interface-businessman-working-36575481.jpg',
      'https://media.gettyimages.com/id/1152936423/vector/customer-service-icon-set.jpg?s=612x612&w=gi&k=20&c=MZv0qHGkhf2pLAMh97tTYyyOucrcZjeYJOqTrgWOkFM='

    ],
  },
  {
    headerText:' Image Slider',
    descText:'  A visually appealing image slider can help showcase your products, services or portfolio on your homepage.',
    img:[
      'https://images.unsplash.com/photo-1524680319993-fe837ad4bf2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2xpZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1554941426-e9604e34bc94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2xpZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNsaWRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    ],
  },
]










export const Frontpage2 = () => {
    const theme = useTheme()
 
    return (
       <Stack sx={{display: 'grid',placeContent: 'center'}} width='100%' 
       >
         <Stack height='100%' direction={{xs:'column',sm:'row'}} spacing={{sm:2,md:6,lg:8}} >
         {content.map((content, index) => (
             <Frontpage2Card content={content} index={index}/>
              ))}
            
        </Stack>
       </Stack>
    )
}