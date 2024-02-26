const cardContent = document.querySelectorAll('.portfolio__card')

cardContent.forEach((item, index) => {
	let cardHeader = item.querySelector('.portfolio__card-top')
	cardHeader.addEventListener('click', () => {
		item.classList.toggle('open')

		let cardDescription = item.querySelector('.portfolio__card-bottom')

		if (item.classList.contains('open')) {
			cardDescription.style.height = `${cardDescription.scrollHeight}px`
			cardDescription.style.visibility = `visible`
			cardDescription.style.opacity = 1
		} else {
			cardDescription.style.height = `0px`
			cardDescription.style.visibility = `hidden`
			cardDescription.style.opacity = 0
		}
		removeOpen(index)
	})
})

removeOpen = index1 => {
	cardContent.forEach((item2, index2) => {
		if (index1 != index2) {
			item2.classList.remove('open')

			let des = item2.querySelector('.portfolio__card-bottom')
			des.style.height = `0px`
			des.style.visibility = `hidden`
			des.style.opacity = 0
		}
	})
}
