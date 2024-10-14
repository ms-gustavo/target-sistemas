<h1>Desafios Técnicos em Node.js</h1>

<p>Este repositório contém soluções para uma série de desafios técnicos desenvolvidos em JavaScript, utilizando o Node.js. Os desafios abrangem conceitos básicos de programação, manipulação de strings, cálculo de sequências e análise de dados.</p>

<h2>Pré-requisitos</h2>
<ul>
    <li>Node.js instalado em sua máquina. Caso não tenha, você pode baixá-lo <a href="https://nodejs.org/" target="_blank">aqui</a>.</li>
</ul>

<h2>Como Executar</h2>
<p>Para rodar qualquer um dos códigos, abra o terminal na pasta do projeto e execute o seguinte comando:</p>
<pre><code>node &lt;NomeDoArquivo&gt;.js</code></pre>
<p>Substitua <code>&lt;NomeDoArquivo&gt;</code> pelo nome do arquivo que deseja executar.</p>

<h2>Desafios</h2>

<h3>1. Cálculo da Soma de Valores</h3>
<p>Este desafio soma os números de 1 a 12 e imprime o resultado final.</p>
<p>Arquivo: <code>soma.js</code></p>
<pre><code>let index = 12;<br>
let sum = 0;<br>
let k = 1;<br><br>

while (k &lt; index) {<br>
    &nbsp;&nbsp;k += 1;<br>
    &nbsp;&nbsp;sum += k;<br>
}<br><br>

console.log(sum);</code></pre>

<h3>2. Verificação de Ocorrências da Letra "a"</h3>
<p>Este desafio verifica quantas vezes a letra "a" (maiúscula ou minúscula) aparece em uma string fornecida.</p>
<p>Arquivo: <code>verificacaoLetraA.js</code></p>
<pre><code>function verificarLetraA(str) {<br>
    &nbsp;&nbsp;let contador = 0;<br><br>
    &nbsp;&nbsp;for (let i = 0; i &lt; str.length; i++) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;if (str[i].toLowerCase() === "a") {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contador++;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    &nbsp;&nbsp;}<br><br>
    &nbsp;&nbsp;if (contador &gt; 0) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;console.log(`A letra 'a' aparece ${contador} vezes na string.`);<br>
    &nbsp;&nbsp;} else {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;console.log("A letra 'a' não aparece na string.");<br>
    &nbsp;&nbsp;}<br>
}<br><br>

const stringTeste = "Target Sistemas";<br>
verificarLetraA(stringTeste);</code></pre>

<h3>3. Geração de Próximos Elementos de Sequências Numéricas</h3>
<p>Este desafio gera o próximo elemento para várias sequências numéricas, como números ímpares, potências de 2 e números de Fibonacci.</p>
<p>Arquivo: <code>proximosElementos.js</code></p>
<pre><code>// Funções para gerar próximos elementos das sequências<br>
function proximoImpar(serie) {<br>
    &nbsp;&nbsp;let ultimo = serie[serie.length - 1];<br>
    &nbsp;&nbsp;return ultimo + 2;<br>
}<br><br>

function proximaPotenciaDe2(serie) {<br>
    &nbsp;&nbsp;let ultimo = serie[serie.length - 1];<br>
    &nbsp;&nbsp;return ultimo * 2;<br>
}<br><br>

function proximoQuadradoPerfeito(serie) {<br>
    &nbsp;&nbsp;let ultimoIndice = Math.sqrt(serie[serie.length - 1]);<br>
    &nbsp;&nbsp;return Math.pow(ultimoIndice + 1, 2);<br>
}<br><br>

function proximoFibonacci(serie) {<br>
    &nbsp;&nbsp;let penultimo = serie[serie.length - 2];<br>
    &nbsp;&nbsp;let ultimo = serie[serie.length - 1];<br>
    &nbsp;&nbsp;return penultimo + ultimo;<br>
}</code></pre>

<h3>4. Verificação de Pertencimento à Sequência de Fibonacci</h3>
<p>Este desafio verifica se um número específico pertence à sequência de Fibonacci.</p>
<p>Arquivo: <code>verificacaoFibonacci.js</code></p>
<pre><code>function isFibonacci(num) {<br>
    &nbsp;&nbsp;let a = 0, b = 1, c = 0;<br><br>
    &nbsp;&nbsp;if (num === 0 || num === 1) return true;<br><br>
    &nbsp;&nbsp;while (c &lt; num) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;c = a + b;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;a = b;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;b = c;<br>
    &nbsp;&nbsp;}<br><br>
    &nbsp;&nbsp;return c === num;<br>
}<br><br>

const numberToCheck = 51;<br>
const result = isFibonacci(numberToCheck);<br>
console.log(`${numberToCheck} pertence à sequência Fibonacci? ${result ? "Sim" : "Não"}`);</code></pre>

<h3>5. Verificar Lâmpada acesa</h3>
<ul>
    <li>Ligo o primeiro interruptor e deixo a lâmpada aquecer e em seguida desligo</li>
    <li>Ligo o segundo interruptor e o deixo ligado</li>
    <li>Vou a sala</li>
    <li>A lâmpada acesa corresponde ao segundo interruptor. A lâmpada desligada, porém fria, corresponde ao terceiro interruptor. A lâmpada desligada, porém quente, corresponde ao primeiro interruptor</li>
</ul>
