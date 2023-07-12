let volumeBtn= document.querySelector(".volumeBtn1")
	modalBodyInfo = document.querySelector(".infoBorder")
	sound = document.getElementById("sound")
infoBtn.addEventListener("click", ()=>{
	let valueOfres = document.querySelector(".resultWord").outerText
	const a =fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${valueOfres}`).then(response=>{
		return response.json()
	}).then(data=>{
		console.log(data)
		console.log(data[0].phonetics[0].audio)
		sound.setAttribute("src", data[0].phonetics[0].audio)

		modalBodyInfo.innerHTML = `
			<h1 class="pronoun bo-bottom h3">${data[0].phonetic || ""}</h1>
				<h1 class="bo-bottom h4">Definition: ${data[0].meanings[0].definitions[0].definition}</h1>
                <h1 class="bo-bottom h4">Part of speech: ${data[0].meanings[0].partOfSpeech}</h1>                
                <h1 class="h4"><i>${("Example: "+ data[0].meanings[0].definitions[0].example) || ""}</i></h1>                
		`
	})
			

	wordOuterW.textContent = valueOfres.charAt(0).toUpperCase()+valueOfres.slice(1)
	

	volumeBtn.addEventListener("click",()=>{
		sound.play()
		console.log(sound)
	})
})

