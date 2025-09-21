
import DefaultIcon from "../assets/images/left-panel/default-icon.svg";
import DefaultIconDark from "../assets/images/left-panel/default-icon-dark.svg";

import EcommerceIcon from "../assets/images/left-panel/ecommerce-icon.svg";
import EcommerceIconDark from "../assets/images/left-panel/ecommerce-dark.svg";

import OnlineCourseIcon from "../assets/images/left-panel/online-courses-icon.svg";
import OnlineCourseIconDark from "../assets/images/left-panel/online-course-dark.svg";

import UserProfileIcon from "../assets/images/left-panel/user-profile-icon.svg";
import UserProfileIconDark from "../assets/images/left-panel/user-profile-dark.svg";

import AccountIcon from "../assets/images/left-panel/account-icon.svg";
import AccountIconDark from "../assets/images/left-panel/account-dark.svg";

import CorporateIcon from "../assets/images/left-panel/corporate-icon.svg";
import CorporateIconDark from "../assets/images/left-panel/corporate-dark.svg";

import BlogIcon from "../assets/images/left-panel/blog-icon.svg";
import BlogIconDark from "../assets/images/left-panel/blogs-dark.svg";

import SocialIcon from "../assets/images/left-panel/social-icon.svg";
import SocialIconDark from "../assets/images/left-panel/social-dark.svg";

export const SIDEBAR_DATA = [
  {
    id: "header",
    type: "header",
    items: [
      { id: "favorites", label: "Favorites", type: "header-item" },
      { id: "recently", label: "Recently", type: "header-item" }
    ]
  },
  {
    id: "favorites",
    type: "section",
    items: [
      {
        id: "overview",
        label: "Overview",
        icon: "overview",
        type: "simple"
      },
      {
        id: "projects",
        label: "Projects",
        icon: "projects",
        type: "simple"
      }
    ]
  },
  {
    id: "dashboards",
    type: "section",
    title: "Dashboards",
    items: [
      {
        id: "default",
        label: "Default",
        icon: "default",
        type: "nav",
        path: "/default"
      },
      {
        id: "orders",
        label: "Orders",
        icon: "orders",
        type: "nav",
        path: "/orders"
      }
    ]
  },
  {
    id: "pages",
    type: "section",
    title: "Pages",
    items: [
      {
        id: "account",
        label: "Account",
        icon: "account",
        type: "nav",
        path: "/account"
      },
      {
        id: "corporate",
        label: "Corporate",
        icon: "corporate",
        type: "nav",
        path: "/corporate"
      },
      {
        id: "blog",
        label: "Blog",
        icon: "blog",
        type: "nav",
        path: "/blog"
      },
      {
        id: "social",
        label: "Social",
        icon: "social",
        type: "nav",
        path: "/social"
      }
    ]
  },
  {
    id: "projects-dropdown",
    type: "dropdown",
    title: "Projects",
    icon: "projects",
    dropdownId: "projects",
    items: [
      {
        id: "online-courses",
        label: "Online Courses",
        icon: "online-courses",
        type: "simple"
      }
    ]
  },
  {
    id: "pages-dropdown",
    type: "dropdown",
    title: "User Profile",
    icon: "user-profile",
    dropdownId: "userProfile",
    items: [
      {
        id: "account",
        label: "Account",
        icon: "account",
        type: "simple"
      },
      {
        id: "corporate",
        label: "Corporate",
        icon: "corporate",
        type: "simple"
      },
      {
        id: "blog",
        label: "Blog",
        icon: "blog",
        type: "simple"
      },
      {
        id: "social",
        label: "Social",
        icon: "social",
        type: "simple"
      }
    ]
  }
];

export const ICON_MAP = {
  overview: { light: null, dark: null }, // Will use bullet styling
  projects: { light: null, dark: null }, // Will use bullet styling
  default: {
    light: DefaultIcon,
    dark: DefaultIconDark
  },
  orders: {
    light: EcommerceIcon,
    dark: EcommerceIconDark
  },
  "online-courses": {
    light: OnlineCourseIcon,
    dark: OnlineCourseIconDark
  },
  "user-profile": {
    light: UserProfileIcon,
    dark: UserProfileIconDark
  },
  account: {
    light: AccountIcon,
    dark: AccountIconDark
  },
  corporate: {
    light: CorporateIcon,
    dark: CorporateIconDark
  },
  blog: {
    light: BlogIcon,
    dark: BlogIconDark
  },
  social: {
    light: SocialIcon,
    dark: SocialIconDark
  }
};
