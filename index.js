const apiData = {
	url: 'https://bible-api.com/',
	book: 'luke',
	escape: '%20',
	chapter: '3'
}

const apiUrl = `${apiData.url}${apiData.book}${apiData.escape}${apiData.chapter}`

fetch(apiUrl)
	.then( (data) => data.json())
	.then( (bible) => generateHtml(bible))
	
const generateHtml = (data) => {
	console.log(data)

	const html = `
		<div class="reference">${data.reference}</div>
		<div class="content">${data.text}</div>

	`
	const bibleDiv = document.querySelector('.bible')
    bibleDiv.innerHTML = html
}