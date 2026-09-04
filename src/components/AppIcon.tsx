"use client";

import React from "react";
import {
  MdHome,
  MdPersonPin,
  MdPerson,
  MdShare,
  MdMoreHoriz,
  MdWbSunny,
  MdDarkMode,
  MdMail,
  MdContentCopy,
  MdCheck,
  MdOpenInNew,
  MdTerminal,
  MdCode,
  MdAltRoute,
  MdArrowRightAlt,
  MdArrowForward,
  MdSportsMartialArts,
  MdCalendarMonth,
  MdPhotoCamera,
  MdPlayCircle,
  MdChat,
  MdSend,
  MdLocationOn,
  MdNorthEast,
  MdLightbulb,
  MdVerified,
  MdTag,
  MdBadge,
  MdAccountBox,
  MdDataObject,
  MdFeed,
  MdSchedule,
  MdSmartDisplay,
  MdPhotoLibrary,
  MdMenuBook,
  MdMarkEmailUnread,
  MdAccountCircle,
  MdAutoStories,
  MdEditNote,
} from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";
import { GiKimono } from "react-icons/gi";
import { IconType } from "react-icons";

interface AppIconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  size?: number | string;
}

const iconMap: Record<string, IconType> = {
  // Navigation & General
  home: MdHome,
  person_pin: MdPersonPin,
  person: MdPerson,
  share: MdShare,
  more_horiz: MdMoreHoriz,
  light_mode: MdWbSunny,
  dark_mode: MdDarkMode,
  mail: MdMail,
  content_copy: MdContentCopy,
  check: MdCheck,
  open_in_new: MdOpenInNew,
  terminal: MdTerminal,
  code: MdCode,
  alt_route: MdAltRoute,
  arrow_right_alt: MdArrowRightAlt,
  arrow_forward: MdArrowForward,
  arrow_outward: MdNorthEast,
  sports_martial_arts: MdSportsMartialArts,
  sports_kabaddi: GiKimono,
  bjj: GiKimono,
  calendar_month: MdCalendarMonth,
  photo_camera: MdPhotoCamera,
  play_circle: MdPlayCircle,
  chat: MdChat,
  send: MdSend,
  location_on: MdLocationOn,
  lightbulb: MdLightbulb,
  verified: MdVerified,
  tag: MdTag,
  badge: MdBadge,
  account_box: MdAccountBox,
  data_object: MdDataObject,
  feed: MdFeed,
  schedule: MdSchedule,
  smart_display: MdSmartDisplay,
  photo_library: MdPhotoLibrary,
  menu_book: MdMenuBook,
  mark_email_unread: MdMarkEmailUnread,
  account_circle: MdAccountCircle,
  auto_stories: MdAutoStories,
  edit_note: MdEditNote,

  // Socials
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
  telegram: FaTelegram,
  twitter: FaXTwitter,
  x: FaXTwitter,
};

export default function AppIcon({ name, className, style, size }: AppIconProps) {
  const IconComponent = iconMap[name.toLowerCase()] || iconMap[name] || MdCode;
  return <IconComponent className={className} style={style} size={size} />;
}
