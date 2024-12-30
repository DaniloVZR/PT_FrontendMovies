import amex from "../../assets/payment/medios_de_pago_amex.svg";
import bancolombia from "../../assets/payment/medios_de_pago_bancolombia.svg";
import codensa from "../../assets/payment/medios_de_pago_codensa.svg";
import contraretega from "../../assets/payment/medios_de_pago_contraentrega.svg";
import credifin from "../../assets/payment/medios_de_pago_credifin.svg";
import credito from "../../assets/payment/medios_de_pago_credito.svg";
import debito from "../../assets/payment/medios_de_pago_debito.svg";
import diners from "../../assets/payment/medios_de_pago_diners.svg";
import efecty from "../../assets/payment/medios_de_pago_efecty.svg";
import mastercard from "../../assets/payment/medios_de_pago_master_card.svg";
import pse from "../../assets/payment/medios_de_pago_pse.svg";
import visa from "../../assets/payment/medios_de_pago_visa.svg";

import facebook from "../../assets/social/icon-facebook.svg";
import instagram from "../../assets/social/icon-instagram.svg";
import tiktok from "../../assets/social/icon-tiktok.svg";
import youtube from "../../assets/social/icon-youtube.svg";

import iconSic from "../../assets/footer/icon-sic.svg";
import iconWeb from "../../assets/footer/icon-web.svg";

// Banners desktop
import chilloutDesktop from "../../assets/banners/banner-ppal-chillout-desktop.webp";
import grinchDesktop from "../../assets/banners/banner-ppal-grinch-desktop.webp";
import harryDesktop from "../../assets/banners/banner-ppal-harry-desktop.webp";
import sharestoryDesktop from "../../assets/banners/banner-ppal-sharestory-desktop.webp";

// Banners mobile
import chilloutMobile from "../../assets/banners/banner-ppal-chillout-mobile.webp";
import grinchMobile from "../../assets/banners/banner-ppal-grinch-mobile.webp";
import harryMobile from "../../assets/banners/banner-ppal-harry-mobile.webp";
import sharestoryMobile from "../../assets/banners/banner-ppal-sharestory-mobile.webp";

import bag from "../../assets/promise/bag.svg";
import locator from "../../assets/promise/locator.svg";
import service from "../../assets/promise/service.svg";
import shipping from "../../assets/promise/shipping.svg";

import search from '../../assets/nav/search.svg';
import pin from '../../assets/nav/pin.svg';
import favorite from '../../assets/nav/favorite.svg';
import user from '../../assets/nav/user.svg';
import shoppingBag from '../../assets/nav/shopping-bag.svg';

export const navIcons = [
  { name: "search", source: search },
  { name: "pin", source: pin },
  { name: "favorite", source: favorite },
  { name: "user", source: user },
  { name: "shoppingBag", source: shoppingBag },
]

export const payment = [
  { name: "amex", source: amex },
  { name: "bancolombia", source: bancolombia },
  { name: "codensa", source: codensa },
  { name: "contraretega", source: contraretega },
  { name: "credifin", source: credifin },
  { name: "credito", source: credito },
  { name: "debito", source: debito },
  { name: "diners", source: diners },
  { name: "efecty", source: efecty },
  { name: "mastercard", source: mastercard },
  { name: "pse", source: pse },
  { name: "visa", source: visa },
];

export const socialMediaIcons = [
  { name: "facebook", source: facebook, link: "https://www.facebook.com/movieslahistoriacontinua/" },
  { name: "instagram", source: instagram, link: "https://www.instagram.com/moviesshop/?hl=es" },
  { name: "tiktok", source: tiktok, link: "https://www.tiktok.com/@moviesshopco?lang=es" },
  { name: "youtube", source: youtube, link: "https://www.youtube.com/channel/UCQw7YEJYjcd-bRCbcyYVCUQ" }
]

export const footerIcons = [
  { name: "Icono Sic", source: iconSic },
  { name: "Icono Web", source: iconWeb },
]

export const policies = [
  "Términos y condiciones",
  "Promociones vigentes",
  "Política de privacidad",
  "Términos recoge en tienda",
  "Habeas data"
]

export const bannerSlides = [
  { name: "chillout", source: chilloutDesktop },
  { name: "grinch", source: grinchDesktop },
  { name: "harry", source: harryDesktop },
  { name: "sharestory", source: sharestoryDesktop },
]

export const bannerSlidesMobile = [
  { name: "chilloutMobile", source: chilloutMobile },
  { name: "grinchMobile", source: grinchMobile },
  { name: "harryMobile", source: harryMobile },
  { name: "sharestoryMobile", source: sharestoryMobile },
]

export const services = [
  {
    name: "shipping",
    source: shipping,
    title: "Envío gratuito",
    description: "Envío gratis a partir de $150.000 a todo el país"
  },
  {
    name: "service",
    source: service,
    title: "Servicio al cliente",
    description: "Nuestro equipo estará disponible para ayudarte cuando lo necesites"
  },
  {
    name: "bag",
    source: bag,
    title: "Facil devolución",
    description: "Puedes realizar el proceso de devolución o cambio de tu producto fácil"
  },
  {
    name: "locator",
    source: locator,
    title: "Seguimiento de pedido",
    description: "Cuando realizas tu compra enviamos el número de guía para que puedas rastrearlo"
  },
]