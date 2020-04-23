// uploadImage.js

$(document).ready(function(){
	let link = document.getElementById('input').value
	$("#upload-btn").on('click', function(){
		console.log(link);
		// link error net::ERR_NAME_NOT_RESOLVED
		$("#container").prepend(`
								<div class="col-4">
									<div class="box">
										<img src="https://${link}">
									</div>
								</div>
								`);
		//cannot show in next line
	})
})