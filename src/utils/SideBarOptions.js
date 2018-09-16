import axisIcon from '../images/axis.jpg';
import relianceIcon from '../images/reliance.jpg';
import sbiIcon from '../images/sbi.jpg';
import adityaIcon from '../images/aditya.jpg';
import iciciIcon from '../images/icici.jpg';
import hdfcIcon from '../images/hdfc.jpeg';
import ourChoiceIcon from '../images/ourchoice.jpg';


export const sidebarMenu  = () => ([
    {
        name: "Our Choice",
        key : "Top10",
        icon : ourChoiceIcon
    },

    {
        name:"Axis Bank",
        key: "Axis",
        icon: axisIcon
    }, 
    {
        name: "Reliance",
        key: "Reliance",
        icon: relianceIcon,
    }, 
    {
        name : "SBI",
        key : "SBI",
        icon : sbiIcon
    }, 
    {
        name: "Aditya Birla",
        key: "Aditya Birla",
        icon: adityaIcon
    },
    {
        name: "ICICI",
        key: "ICICI",
        icon: iciciIcon
    },
    {
        name : "HDFC",
        key : "HDFC",
        icon : hdfcIcon
    },
]);