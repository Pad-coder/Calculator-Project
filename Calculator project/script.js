let title = document.getElementById("title")
title.innerText = 'Calculator'.toUpperCase(title)

let description = document.getElementById("description")
description.innerText = 'Digital Calculator created for quick arithmetic operation'


let Calculator = document.getElementById("container")

Calculator.innerHTML = `
<div class="Display">
<input type="text" name="display" id="result" class="input">
</div>

<div class="buttons">
<button class="operator" id="clear" onclick="result.value=''">AC</button>

<button class="operator" id="Delete" onclick="result.value=result.value.toString().slice(0,-1)">DEL</button>

<button id="Decimal" onclick="result.value+='.'">.</button>

<button class="operator" id="divide" onclick="result.value+='/'">/</button>

<button id="7" onclick="result.value+='7'">7</button>

<button id="8" onclick="result.value+='8'">8</button>

<button id="9" onclick="result.value+='9'">9</button>

<button class="operator" id="Multiply" onclick="result.value+='*'">*</button>

<button id="4" onclick="result.value+='4'">4</button>

<button id="5" onclick="result.value+='5'">5</button>

<button id="6" onclick="result.value+='6'">6</button>

<button class="operator" id="subtract" onclick="result.value+='-'">-</button>

<button id="1" onclick="result.value+='1'">1</button>

<button id="2" onclick="result.value+='2'">2</button>

<button id="3" onclick="result.value+='3'">3</button>

<button class="operator" id="add" onclick="result.value+='+'">+</button>

<button id="Double-Zero" onclick="result.value+='00'">00</button>

<button id="0" onclick="result.value+='0'">0</button>

<button class="operator" id="equal" onclick="result.value=eval(result.value)">=</button>

</div>
`