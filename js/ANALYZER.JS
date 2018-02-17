if (typeof(data)!="undefined"){
document.write("<h2 class='PaperName'>" + data.name + "（" + data.courseName + "）" + "</h2>");

var no=1;
Analyse(data.details[0].questions);
try
{Analyse(data.details[1].questions);
}catch(e){}
try
{Analyse(data.details[2].questions);
}catch(e){}
try
{Analyse(data.details[3].questions);
}catch(e){}
}else{
	document.write("<p>未检测到题目数据文件！");
}
function Analyse(questions) {for (var i in questions){
		var T=questions[i];
		//题干
		document.write("<h4 class='QuestionBody'>" + no+". "+T.body.sections[0].blocks[0].value + "</h4>");
		no++;
		//选项
		var options=T.options;
		for (var j in options){
			var ele = document.createElement("p");
			ele.innerHTML = Num2ABCD(j)+". "+options[j].body.sections[0].blocks[0].value;
			if (options[j].correct == true)
			{
				ele.setAttribute("class", "Option_Correct");
			}
			else
			{
				ele.setAttribute("class", "Option_Incorrect");
			}
			document.body.appendChild(ele);

		}


	}
}

function Num2ABCD(n) //选项序号转换为abcd
{
	var m=n.charCodeAt(0)+17;
	return String.fromCharCode(m).toUpperCase();
}

