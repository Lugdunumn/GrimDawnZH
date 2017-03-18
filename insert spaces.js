function space(){
	var len = document.getElementById('text').value.length;
	var text = document.getElementById('text').value;
	var text2 = text.charAt(0);
	for(var i = 1; i < len-1; i++) {
	text2 += text.charAt(i);
	if(text.charCodeAt(i) > 128 && text.charAt(i+1) != " " && text.charAt(i+1) != "\n")
	text2 += " ";
        }
		text2 += text.charAt(len-1);
		len = text2.length;
		var text3 = text2.charAt(0);
        for(var i = 1; i < len-1; i++) {
            if(text2.charCodeAt(i) > 128 && text2.charAt(i-1) != " " && text2.charAt(i-1) != "\n")
				text3 += " ";
            text3 += text2.charAt(i);
        }
		text3 += text2.charAt(len-1);
        document.getElementById("text").value = text3;
    }
