import { FC } from 'react';
import style from './heading.module.scss';

interface HeadingProps {
	title: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
	return <h1 className={style.heading}>{title}</h1>;
};

export default Heading;
