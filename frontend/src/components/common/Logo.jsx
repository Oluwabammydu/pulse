import Link from 'next/link';
import React from 'react';

const Logo = () => {
	return (
		<Link href={'/'} className='block'>
			<p className='text-[2rem] font-[300] leading-normal p-0 m-0'>
				social<span className='font-[600]'>jar</span>
			</p>
			<p className='text-[0.75rem] font-[500] text-slate-800 leading-normal uppercase p-0 mt-[-5px]'>
				by CilAcademy
			</p>
		</Link>
	);
};

export default Logo;
