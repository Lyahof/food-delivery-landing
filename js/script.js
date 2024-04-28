const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnNav.addEventListener('click', function () {
	header.classList.toggle('nav-open');
})

// smooth scroll
 const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link){

	link.addEventListener('click', function(e) {
		e.preventDefault();
		const href = link.getAttribute('href');
		
		if (href === '#')
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})

		if (href !== '#' && href.startsWith('#')){
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({behavior: 'smooth'})
		}

		if (link.classList.contains('main-nav-link'))
			header.classList.toggle('nav-open');
	})
}) 


// Sticky header

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(function(entries){

	const ent = entries[0];
	ent.isIntersecting === false
		? document.body.classList.add('sticky') 
		: document.body.classList.remove('sticky');
},
{
	root: null,
	threshold: 0,
	rootMargin: '-80px',
})

obs.observe(sectionHeroEl);
