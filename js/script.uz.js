
let engWord = Object.keys(dictionaryUz)
let resWord = engWord[Math.floor(Math.random() * engWord.length)]
	resultWord = document.querySelector(".resultWord")
	resultBtn = document.querySelector('.resultBtn')
	resultInput = document.querySelector(".resultInput")
	checkBtn = document.querySelector(".checkBtn")
	alertPrimary = document.querySelector(".alert-primary")
	alertDanger = document.querySelector(".alert-danger")
	animTranslate = document.querySelectorAll(".animTranslate")
	writeMark = document.querySelector(".writeMark")
	infoBtn = document.querySelector(".infoBtn")
	wordOuterW = document.querySelector(".wordOuterW")

animTranslate.forEach(function(item){
	item.classList.add("animTranslate2d")
})
resultBtn.addEventListener("click",()=>{
	resultWord.textContent = engWord[Math.floor(Math.random() * engWord.length)]
})


function apiUz() {
	let volumeBtn= document.querySelector(".volumeBtn1")
	modalBodyInfo = document.querySelector(".infoBorder")
	sound = document.getElementById("sound")
infoBtn.addEventListener("click", ()=>{
	let valW = resultInput.value.charAt(0).toUpperCase() + resultInput.value.slice(1).toLowerCase()
	const a =fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${valW}`).then(response=>{
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
			

	

	volumeBtn.addEventListener("click",()=>{
		sound.play()
		console.log(sound)
	})
})


}
checkBtn.addEventListener("click",()=>{
	let valueOfres = document.querySelector(".resultWord").outerText.toLowerCase()
	if(dictionaryUz[valueOfres].length ==1){
			if(resultInput.value.toLowerCase()==dictionaryUz[valueOfres].toLowerCase()){
				wordOuterW.textContent= resultInput.value.charAt(0).toUpperCase() + resultInput.value.slice(1).toLowerCase()
 			console.log("it is ::Value of 1 is True")
 			apiUz()
			animTranslate[1].classList.remove("animTranslate2d")
			alertPrimary.classList.add("animTranslate3d")
			writeMark.textContent = "9/10"
			infoBtn.classList.remove("d-none")
			setTimeout(()=>{
				animTranslate[1].classList.add("animTranslate2d")
			},2000)
			}else{
				console.log("it is ::Value of 1 is False")
				animTranslate[0].classList.remove("animTranslate2d")
				alertDanger.classList.add("animTranslate3d")
				writeMark.textContent = "2/10"
				setTimeout(()=>{
					animTranslate[0].classList.add("animTranslate2d")
				},2000)
			}
		}else{
			let wSp = dictionaryUz[valueOfres]
			for(let item in wSp){
				if(wSp[item]==resultInput.value.toLowerCase()){
					wordOuterW.textContent= resultInput.value.charAt(0).toUpperCase() + resultInput.value.slice(1).toLowerCase()
					console.log("true")
					apiUz()
					animTranslate[1].classList.remove("animTranslate2d")
					alertPrimary.classList.add("animTranslate3d")
					writeMark.textContent = "9/10"
					infoBtn.classList.remove("d-none")
					setTimeout(()=>{
						animTranslate[1].classList.add("animTranslate2d")
					},2000)
					break
				}else if(wSp[item] != resultInput.value.toLowerCase()){
					console.log("false")
					animTranslate[0].classList.remove("animTranslate2d")
					alertDanger.classList.add("animTranslate3d")
					writeMark.textContent = "2/10"
					setTimeout(()=>{
						animTranslate[0].classList.add("animTranslate2d")
					},2000)
				}
			}
		}




		
	
})

document.querySelectorAll(".btn-close").forEach(function(item) {
	item.addEventListener("click", function() {
		resultInput.value =""
	writeMark.textContent = ""
	infoBtn.classList.add("d-none")
	})
})
resultBtn.addEventListener("click",()=>{
	resultInput.value =""
	writeMark.textContent = ""
})


