import React from 'react';

const Home = () => {
	return (
		<div className='relative min-h-[calc(100vh-56px)]'>
			<div className="absolute inset-0 bg-[url('images/bg.webp')] bg-cover bg-no-repeat bg-center" />
			<div className='absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/50 from-70% via-85% to-100%' />
			<div className='relative p-[min(4em,6%)] z-10 justify-around gap-4 md:flex'>
				<aside className='flex-col md:max-w-2/3 md:mb-4'>
					<div className='text-center'>
						<img
							className='md:inline-block'
							src='images/logo-black.webp'
							alt='pizzeria logo'
						/>
					</div>
					<ul className='hidden md:list-disc md:block md:font-[OpenSans] md:text-2xl'>
						<li>
							Family-owned since 1987, bringing
							<b> authentic Italian recipes</b> passed down
							through generations to your neighborhood. Our
							hand-tossed dough made fresh daily, wood-fired
							ovens, and traditional techniques create pizza
							perfection.
						</li>
						<br />
						<li>
							<b>Freshly-sourced organic ingredients</b> from
							regional farms, we believe in strengthening our
							community while delivering exceptional quality. By
							joining us, you are helping support the work of
							local farmers while enjoying peak freshness in every
							bite.
						</li>
						<br />
						<li>
							Committed to eco-friendly packaging, waste reduction
							and responsible sourcing, we adopt
							<b> sustainable practices</b> in our everyday
							routine for a better tomorrow.
						</li>
						<br />
					</ul>
				</aside>

				<section className='text-center m-5 p-[min(3em,3%)] bg-white/50 rounded-lg flex-col shadow-xl md:max-w-1/3 md:text-start'>
					<h1 className='font-[Fairplay] text-2xl mb-2'>
						Login/Sign Up
					</h1>
					<hr className='mb-8 w-1/4 mx-auto md:mb-4 md:mx-0' />
					<h4 className='font-[OpenSans] text-lg'>E-mail</h4>
					<input
						className='mb-6 border-b rounded-xs focus:bg-white duration-300 focus:border-b-transparent md:mb-2'
						type='email'
						name='email'
						id='input-email'
						placeholder='Enter your e-mail'
					/>
					<h4 className='font-[OpenSans] text-lg'>Password</h4>
					<input
						className='mb-6 border-b rounded-xs focus:bg-white duration-300 focus:border-b-transparent md:mb-2'
						type='password'
						name='password'
						id='input-password'
						placeholder='Enter your password'
					/>
					<br />
					<button className='m-5 p-1.5 border cursor-pointer duration-150 rounded-sm hover:bg-[#1e1e1e] hover:text-white md:mx-0.5'>
						Login
					</button>
					<p className='login__error'></p>
				</section>
			</div>
		</div>
	);
};

export default Home;
