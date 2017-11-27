
var person = {
			firstname : "min",
			lastname  : "zhang",
			id        :   100001
		}

		document.write(person.firstname + "<br/>")
		document.write(person.lastname + "<br/>")


		var people;
		var car = "Volvo"

		document.write(people + "<br />")
		document.write(car + "<br  />")

		car = null

		document.write(car + "<br  />")


// new 

		var str = new Number

		document.write(str + "<br />")


		var str1 = new Boolean


		document.write(str1 + "<br />")


		// object in javascript 

		var txt = "hello"

		x = txt.length

		document.write(txt.toUpperCase() + "<br />")

		
		document.write(txt.search())











function checkinput()
	{
		name = document.getElementById("comment").value
		greeting =  (name == "zhangmin")?"Dear zhang":"Dear"
		alert(greeting)
	}
	


function welcome(name, job)
	{
		alert("Welcome" + name +"your job is " + job)
	}



