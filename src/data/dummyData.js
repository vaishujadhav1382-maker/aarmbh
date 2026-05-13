import { UtensilsCrossed, Leaf, Coffee, Smile, Star, CheckCircle } from 'lucide-react';

// Video imports
import video1 from '../assets/review1.mp4';
import video2 from '../assets/review2.mp4';
import video3 from '../assets/review3.mp4';
import video4 from '../assets/review4.mp4';
import video5 from '../assets/review5.mp4';
import video6 from '../assets/review6.mp4';
import video7 from '../assets/review7.mp4';
import video8 from '../assets/review8.mp4';
import video9 from '../assets/review9.mp4';
import video10 from '../assets/review10.mp4';

export const features = [
  { id: 1, icon: Smile, en: "Family Friendly", mr: "कुटुंबासाठी अनुकूल" },
  { id: 2, icon: Leaf, en: "Fresh Food", mr: "ताजे अन्न" },
  { id: 3, icon: Coffee, en: "Fast Service", mr: "जलद सेवा" },
  { id: 4, icon: CheckCircle, en: "Hygienic Kitchen", mr: "स्वच्छ स्वयंपाकघर" },
  { id: 5, icon: UtensilsCrossed, en: "Traditional Taste", mr: "पारंपारिक चव" },
  { id: 6, icon: Star, en: "Comfortable Seating", mr: "आरामदायक आसन व्यवस्था" },
];

export const foodMenu = [
  {
    id: 1,
    category: 'veg',
    image: '/dish1.png',
    en: { name: 'Paneer Butter Masala', desc: 'Rich and creamy curry made with paneer, spices, onions, tomatoes.' },
    mr: { name: 'पनीर बटर मसाला', desc: 'पनीर, मसाले, कांदा, टोमॅटो यापासून बनवलेली समृद्ध आणि मलईदार करी.' },
    popular: true,
  },
  {
    id: 2,
    category: 'nonveg',
    image: '/dish2.png',
    en: { name: 'Chicken Kolhapuri', desc: 'Spicy chicken curry cooked in authentic Kolhapuri style.' },
    mr: { name: 'चिकन कोल्हापुरी', desc: 'अस्सल कोल्हापुरी शैलीत शिजवलेली मसालेदार चिकन करी.' },
    popular: true,
  },
  {
    id: 3,
    category: 'thali',
    image: '/dish3.png',
    en: { name: 'Maharashtrian Special Veg Thali', desc: 'A complete meal with roti, sabzi, dal, rice, sweet, and papad.' },
    mr: { name: 'महाराष्ट्रीयन स्पेशल व्हेज थाळी', desc: 'पोळी, भाजी, वरण, भात, गोड आणि पापड असलेले संपूर्ण जेवण.' },
    popular: false,
  },
  {
    id: 4,
    category: 'nonveg',
    image: '/dish4.png',
    en: { name: 'Mutton Handi', desc: 'Slow-cooked mutton with aromatic spices and herbs.' },
    mr: { name: 'मटण हंडी', desc: 'सुगंधी मसाले आणि औषधी वनस्पतींसह मंद आचेवर शिजवलेले मटण.' },
    popular: true,
  },
  {
    id: 5,
    category: 'veg',
    image: '/dish5.png',
    en: { name: 'Kaju Curry', desc: 'Delicious cashew nuts cooked in a rich and creamy tomato-onion gravy.' },
    mr: { name: 'काजू करी', desc: 'समृद्ध आणि मलईदार टोमॅटो-कांदा ग्रेव्हीमध्ये शिजवलेले स्वादिष्ट काजू.' },
    popular: false,
  },
  {
    id: 6,
    category: 'thali',
    image: '/dish6.png',
    en: { name: 'Special Chicken Thali', desc: 'Includes chicken curry, dry chicken, bhakri, rice, and solkadhi.' },
    mr: { name: 'स्पेशल चिकन थाळी', desc: 'चिकन करी, सुकं चिकन, भाकरी, भात आणि सोलकढी.' },
    popular: true,
  },
];

export const galleryImages = [
  '/gallery1.png',
  '/gallery2.png',
  '/gallery3.png',
  '/gallery4.png',
  '/gallery5.png',
  '/gallery6.png',
];

export const reviews = [
  { id: 1, name: 'Guest 1', rating: 5, en: 'Amazing experience and delicious food!', mr: 'अप्रतिम अनुभव आणि स्वादिष्ट जेवण!', date: 'Nov 2025', video: video1 },
  { id: 2, name: 'Guest 2', rating: 5, en: 'Highly satisfied with hospitality.', mr: 'आदरातिथ्याने अत्यंत समाधानी.', date: 'Oct 2025', video: video2 },
  { id: 3, name: 'Guest 3', rating: 4, en: 'Perfect family hangout.', mr: 'कुटुंबासाठी उत्तम जागा.', date: 'Dec 2025', video: video3 },
  { id: 4, name: 'Guest 4', rating: 5, en: 'Food was top notch!', mr: 'जेवण अव्वल दर्जाचे होते!', date: 'Sep 2025', video: video4 },
  { id: 5, name: 'Guest 5', rating: 5, en: 'Loved the ambiance.', mr: 'वातावरण खूप आवडले.', date: 'Aug 2025', video: video5 },
  { id: 6, name: 'Guest 6', rating: 5, en: 'Great place!', mr: 'उत्तम ठिकाण!', date: 'July 2025', video: video6 },
  { id: 7, name: 'Guest 7', rating: 4, en: 'Really loved it here.', mr: 'येथे खरोखर आवडले.', date: 'Nov 2025', video: video7 },
  { id: 8, name: 'Guest 8', rating: 5, en: 'Excellent variety of thalis.', mr: 'थाळीचे उत्कृष्ट प्रकार.', date: 'Dec 2025', video: video8 },
  { id: 9, name: 'Guest 9', rating: 5, en: 'Memorable experience.', mr: 'स्मरणीय अनुभव.', date: 'Oct 2025', video: video9 },
  { id: 10, name: 'Guest 10', rating: 5, en: 'Must visit again.', mr: 'पुन्हा नक्की भेट द्या.', date: 'Aug 2025', video: video10 },
];
