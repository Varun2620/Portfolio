import logo from '../../../assets/react.svg'
import NoteEditor from '../../../assets/notedi.jpg'
import Meme from '../../../assets/memeGen.png'
import AirBnb from '../../../assets/airBnb.jpg'
import LittleLemon from '../../../assets/littleLemon.jpg'

export const projData = {
    userRecogintion: {
        projectName: 'User Recognition For App Ratings',
        projectDesc: `
                        Developed a user recognition system using Python to identify users and allow them to rate 
                        applications, preventing bot reviews. Implemented a secure authentication mechanism to 
                        verify user identities, resulting in a 10% reduction in fraudulent reviews.
                     `,
        projectImage: logo
    },
    
    noteEdi: {
        projectName: 'Note Editor',
        projectDesc: `
                        Developed a responsive web application for note editing using React, HTML, and CSS.
                        Implemented an auto-save feature using local storage to prevent data loss, resulting 
                        in a 99% data retention rate during unexpected browser closures.
                     `,
        projectImage: NoteEditor
    },

    littleLemon: {
        projectName: 'Little Lemon Restaurant',
        projectDesc: `
                        Developed a responsive restaurant web app using React and Figma for UI/UX design. Integrated 
                        interactive table reservations, reducing booking friction and increasing test group engagement by 30%.
                        Used component-based design for reusability and maintainability, simulating enterprise UI development.
                     `,
        projectImage: LittleLemon
    },
    
    memeGen: {
        projectName: 'Meme Generator',
        projectDesc: `
                        Developed a responsive meme generatot web application using React, HTML and CSS. Implemented by creating 
                        the data for the memes locally and accessed it as a object. Used component based design for reuasbility 
                        and maintanability.
                     `,
        projectImage: Meme
    },

    airBnb: {
        projectName: 'Air Bnb Clone',
        projectDesc: `
                        Created a responsive Airbnb-style web interface with React.js, emphasising component-based
                        architecture. Reusable elements (Navbar, Hero, and Card) were implemented, and dynamic 
                        content was displayed by mapping over an array of data (appData).
                     `,
        projectImage: AirBnb
    }
}