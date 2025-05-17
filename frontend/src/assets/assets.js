import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]
export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Kumar',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Rajesh Kumar specializes in general medicine with a focus on preventive healthcare and early diagnosis. He is dedicated to providing compassionate care to patients across all age groups.',
        fees: 500,
        address: {
            line1: '123 MG Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Anjali Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, DGO',
        experience: '8 Years',
        about: 'Dr. Anjali Sharma is an experienced gynecologist known for her expertise in women’s health, prenatal care, and reproductive medicine. She provides personalized treatment plans.',
        fees: 700,
        address: {
            line1: '45 Connaught Place',
            line2: 'New Delhi, Delhi'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Suresh Reddy',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDV',
        experience: '6 Years',
        about: 'Dr. Suresh Reddy offers advanced skin treatments, including acne care, eczema management, and cosmetic dermatology, focusing on holistic skin health.',
        fees: 400,
        address: {
            line1: '22 MG Road',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Neha Verma',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS, DCH',
        experience: '5 Years',
        about: 'Dr. Neha Verma is a pediatrician committed to child health and development, providing vaccinations, nutrition guidance, and treatment of childhood illnesses.',
        fees: 450,
        address: {
            line1: '88 Park Street',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Vivek Joshi',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM Neurology',
        experience: '12 Years',
        about: 'Dr. Vivek Joshi is a neurologist specializing in neurological disorders such as epilepsy, stroke, and neuropathy, with a focus on patient-centered care.',
        fees: 800,
        address: {
            line1: '10 Marine Drive',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Arjun Singh',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, DM Neurology',
        experience: '9 Years',
        about: 'Dr. Arjun Singh has extensive experience in managing neurological conditions and uses modern diagnostic tools to provide accurate treatment.',
        fees: 750,
        address: {
            line1: '15 Residency Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Kavita Patel',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Kavita Patel is known for her holistic approach to general medicine, focusing on lifestyle management and preventive care.',
        fees: 500,
        address: {
            line1: '101 MG Road',
            line2: 'Ahmedabad, Gujarat'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Rohit Mehta',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, DGO',
        experience: '6 Years',
        about: 'Dr. Rohit Mehta provides expert care in gynecology, focusing on reproductive health, infertility treatment, and antenatal care.',
        fees: 650,
        address: {
            line1: '5 Brigade Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Pooja Sharma',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDV',
        experience: '4 Years',
        about: 'Dr. Pooja Sharma specializes in skin allergies, cosmetic dermatology, and laser treatments to improve skin health and appearance.',
        fees: 450,
        address: {
            line1: '60 Park Street',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Aditya Gupta',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS, DCH',
        experience: '7 Years',
        about: 'Dr. Aditya Gupta is dedicated to child health, focusing on preventive care, vaccination schedules, and managing common childhood diseases.',
        fees: 500,
        address: {
            line1: '33 Connaught Place',
            line2: 'New Delhi, Delhi'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Meena Reddy',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM Neurology',
        experience: '10 Years',
        about: 'Dr. Meena Reddy has a strong background in treating neurological disorders and advocates for rehabilitation and long-term care.',
        fees: 800,
        address: {
            line1: '12 MG Road',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Sameer Khan',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, DM Neurology',
        experience: '8 Years',
        about: 'Dr. Sameer Khan focuses on cutting-edge neurological research and offers advanced care for stroke and neurodegenerative diseases.',
        fees: 780,
        address: {
            line1: '50 Marine Drive',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Nisha Patel',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Dr. Nisha Patel offers comprehensive general health services including chronic disease management and health education.',
        fees: 450,
        address: {
            line1: '78 Residency Road',
            line2: 'Ahmedabad, Gujarat'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Arvind Joshi',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, DGO',
        experience: '9 Years',
        about: 'Dr. Arvind Joshi provides compassionate gynecological care, focusing on antenatal and postnatal services.',
        fees: 700,
        address: {
            line1: '19 Brigade Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Priya Singh',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDV',
        experience: '6 Years',
        about: 'Dr. Priya Singh is an expert in treating skin disorders and specializes in cosmetic dermatology treatments for glowing skin.',
        fees: 500,
        address: {
            line1: '25 Park Street',
            line2: 'Kolkata, West Bengal'
        }
    },
]
