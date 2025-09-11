// navigationData.ts

import type { IconType } from 'react-icons';
import { FaHome, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

type DropdownItem={
    
name: string;
  href: string;
}


interface NavItem {
  name: string;
  href: string;
  icon?: IconType;
  dropdown?: DropdownItem[];
}

// Main navigation links
export const mainNav: NavItem[] = [
  {  name:'', href: '/', icon: FaHome },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: "FAQ's", href: '/faqs' },
  { name: 'Blog', href: '/blog' },
  {
    name: 'Shop',
    href: '#',
    dropdown: [
      { name: 'All Products', href: '/products' },
      { name: 'My account', href: '/account' },
      { name: 'Cart', href: '/cart' },
      { name: 'Checkout', href: '/checkout' },
      { name: 'Wishlist', href: '/wishlist' },
      { name: 'Products Compare', href: '/compare' },
    ],
  },
  { name: 'Contact Us', href: '/contact' },
];

// social icons
export const socialLinks: NavItem[] = [
  { name: 'Facebook', href: '"https://facebook.com",', icon: FaFacebookF },
  { name: 'LinkedIn', href: "https://linkedin.com", icon: FaLinkedinIn },
  { name: 'Twitter', href: 'https://twitter.com', icon: FaTwitter },
];