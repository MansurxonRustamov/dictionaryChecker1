window.addEventListener("DOMContentLoaded", ()=>{
	let uzengr = document.querySelector(".uzengr")
		randomBtn = document.querySelector(".randomBtn")
		resultBox = document.querySelector(".result")
		ser = document.querySelector(".ser")
		resultInput = document.querySelector(".resultInput")
		submitBtn = document.querySelector(".submitBtn")
		win =document.querySelector('.win')
	let dataArr = Object.keys(dictionary)
	let question= dataArr[Math.floor(Math.random()*dataArr.length)]
	
	randomBtn.addEventListener("click",()=>{
		resultBox.classList.remove("hidden1")
		uzengr.innerHTML=`${question}:`

		ser.classList.add("hidden1")
	})

	submitBtn.addEventListener("click",()=>{
		if (resultInput.value.toLowerCase() == dictionary[question]){
			win.innerHTML="Barakalla. To`g`ri bajardingiz"
			win.classList.add("text-success")
			win.classList.remove("text-danger")
			setTimeout(function() {
				location.reload()
			}, 1000);


		}else if(resultInput.value == ""){
			win.innerHTML= "Iltimos Javobni Yozin"
			win.classList.remove("text-danger")
			win.classList.add(".text-primary")
		}else{
			win.innerHTML="Bu tarjima Xato"
			win.classList.add("text-danger")
		}
	} )
	 

})