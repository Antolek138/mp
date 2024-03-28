const body = document.querySelector('body')
const nav = document.querySelector('.nav')
const logo = document.querySelector('.nav__logo')
const menu = document.querySelector('.nav__menu')
const bars = document.querySelector('.nav__bars')
const allNavItems = document.querySelectorAll('.nav__menu-link')
const accordionContent = document.querySelectorAll('.questions__accordion-content')
const offersContent = document.querySelectorAll('.offers__card')

const handleNav = () => {
	if (window.scrollY >= 20) {
		nav.classList.add('nav--active')
	} else {
		nav.classList.remove('nav--active')
	}
}

const showMenu = () => {
	menu.classList.toggle('nav__menu--active')
	bars.classList.toggle('nav__bars--active')

	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			menu.classList.remove('nav__menu--active')
			bars.classList.remove('nav__bars--active')
		})
	)
}

accordionContent.forEach((item, index) => {
	let accordionHeader = item.querySelector('.questions__accordion-header')
	accordionHeader.addEventListener('click', () => {
		item.classList.toggle('open')

		let accordionDescription = item.querySelector('.questions__accordion-description')
		if (item.classList.contains('open')) {
			accordionDescription.style.height = `${accordionDescription.scrollHeight + 10}px`
			accordionDescription.style.opacity = 1
			accordionDescription.style.paddingTop = '.5em'
		} else {
			accordionDescription.style.height = `0px`
			accordionDescription.style.opacity = 0
		}
		removeOpen(index)
	})
})

const removeOpen = index1 => {
	accordionContent.forEach((item2, index2) => {
		if (index1 != index2) {
			item2.classList.remove('open')

			let des = item2.querySelector('.questions__accordion-description')
			des.style.height = `0px`
			des.style.opacity = 0
		}
	})
}

const footerDate = () => {
	const footerSpan = document.querySelector('.footer__year')

	const date = new Date()
	const year = date.getFullYear()

	footerSpan.textContent = year
}

const lockedBody = () => {
	if (body.classList.contains('unlocked')) {
		body.classList.remove('unlocked')
		body.classList.add('locked')
	} else {
		body.classList.remove('locked')
		body.classList.add('unlocked')
	}
}

const closeLogo = () => {
	body.classList.remove('locked')
	body.classList.add('unlocked')
	menu.classList.remove('nav__menu--active')
	bars.classList.remove('nav__bars--active')
}

footerDate()
window.addEventListener('scroll', handleNav)
logo.addEventListener('click', closeLogo)
bars.addEventListener('click', () => {
	showMenu(), lockedBody()
})
