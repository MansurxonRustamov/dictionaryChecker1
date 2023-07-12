
let engWord = Object.keys(dictionaryEng)
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
checkBtn.addEventListener("click",()=>{
	let valueOfres = document.querySelector(".resultWord").outerText.toLowerCase()
	if(dictionaryEng[valueOfres].length ==1){
			if(resultInput.value.toLowerCase() == dictionaryEng[valueOfres]){
			console.log("it is ::Value of 1 is True")
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
			let wSp = dictionaryEng[valueOfres]
			for(let item in wSp){
				if(wSp[item]==resultInput.value.toLowerCase()){
					console.log("true")
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
document.querySelectorAll(".btn-close1").forEach(function(item) {
	item.addEventListener("click", function() {
	infoBtn.classList.add("d-none")
	})
})
resultBtn.addEventListener("click",()=>{
	resultInput.value =""
	writeMark.textContent = ""
})


