import Image from "next/image";
import type { ImageProps } from "next/image";
import Search from "../_Icons_/search.png";
import ShoppingCartIcon from "../_Icons_/shopping_cart.png";
import RightArrowIcon from '../_Icons_/rightArrow.png';
import FireIcon from "../_Icons_/fire.png";
import rocketIcon from "../_Icons_/rocket.png";
import moneyIcon from "../_Icons_/money.png";
import safetyIcon from "../_Icons_/safe.png";
import starIcon from "../_Icons_/star.png";
import MailIcon from "../_Icons_/mail.png";
import LockIcon from "../_Icons_/lock.png";
import FacebookIcon from "../_Icons_/facebook.png";
import DiscordIcon from "../_Icons_/discord.png";
import XIcon from "../_Icons_/x.png";
import GoogleIcon from "../_Icons_/google.png";
import MicrosoftIcon from "../_Icons_/microsoft.png";
import UserIcon from "../_Icons_/user.png";
import PhoneIcon from "../_Icons_/phone.png";
import RedFireIcon from "../_Icons_/red_fire.png";
import ControllerIcon from "../_Icons_/controller.png";
import UpArrowIcon from "../_Icons_/up-arrow.png";



export function SearchIcon(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={Search} alt="Search Icon" {...props} />;
}

export function ShoppingCart(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={ShoppingCartIcon} alt="Shopping Cart Icon" {...props} />;
}


export function RightArrow(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={RightArrowIcon} alt="Right Arrow" {...props} />;
}


export function Fire(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={FireIcon} alt="Fire Icon" {...props} />;
}


export function Rocket(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={rocketIcon} alt="Rocket Icon" {...props} />;
}

export function Money(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={moneyIcon} alt="Money Icon" {...props} />;
}

export function Safety(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={safetyIcon} alt="Safety Icon" {...props} />;
}

export function Star(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={starIcon} alt="Star Icon" {...props} />;
}


export function Mail(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={MailIcon} alt="Mail Icon" {...props} />;
}

export function Lock(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={LockIcon} alt="Lock Icon" {...props} />;
}


export function Facebook(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={FacebookIcon} alt="Facebook Icon" {...props} />;
}


export function Discord(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={DiscordIcon} alt="Discord Icon" {...props} />;
}


export function X(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={XIcon} alt="X Icon" {...props} />;
}


export function Google(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={GoogleIcon} alt="Google Icon" {...props} />;
}


export function Microsoft(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={MicrosoftIcon} alt="Microsoft Icon" {...props} />;
}

export function User(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={UserIcon} alt="User Icon" {...props} />;
}

export function Phone(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={PhoneIcon} alt="Phone Icon" {...props} />;
}

export function RedFire(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={RedFireIcon} alt="Red Fire Icon" {...props} />;
}

export function Controller(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={ControllerIcon} alt="Controller Icon" {...props} />;
}

export function UpArrow(props: Omit<ImageProps, 'src' | 'alt'>) {
      return <Image src={UpArrowIcon} alt="Up Arrow Icon" {...props} />;
}