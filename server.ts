import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

const server = serve({ port: 8000 });

console.log("Now serving on port 8000 🔥");

for await (const req of server) {
    req.respond({ body: `<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
  text-align: center;
  font-family: "Roboto", sans-serif;
}

h1 {
  font-family: "Luckiest Guy", cursive;
}

.maedena {
  width: 70%;
  margin: 0 auto;
  padding: 15px;
  background-color: #905494;
}
    </style>
    <title>Deninho, o GOD!</title>
  </head>
  <body>
    <main id="main">
      <header>
        <h1 id="title">Deninho, o mais GOD!</h1>
        <h3>
          A meia que mais cresceu na vida.
        </h3>
      </header>
      <div id="img-div">
        <img id="image" src="https://raw.githubusercontent.com/pachicodes/deninho.com/master/deninho.jpeg" alt="retrato do Deninho" />
        <h4 id="img-caption">
          Em junho de 2020, a comunidade FullDeno developer foi lançada com os
          Mestre de “hello word” em Deno.
        </h4>
      </div>
      <section id="tribute-info">
        <h2>O Deninho eh o melhor, e aqui estao as provas:</h2>
        <ol>
          <li>Vou acabar com o java - Deninho ,</li>
          <li>Node é inutil, mais inutil que o php - Deninho.</li>
          <li>
            Deninho nasceu com o intuito de se vingar e matar o seu inimigo, o
            Node. Mas graças aos fulldenolovers, Deninho saiu dessa vida e virou
            empreendedor e criou um bar e uma loja de tatuagem.
          </li>
          <li>
            Os javairos acharam um país cheio de deninho, em 1500 ai os javeiros
            escravizaram os deninhos até que em 1690 os deninhos recuperaram a
            força e fundaram o Denosil. Choraste?
          </li>
          <li>Deninho uma música ? "Diga onde vc vai, que eu vou fulldeno"</li>
          <li>Ovo mata o noudi. Fulldeno pistola</li>
          <li>
            Dedinho ficou tão popular que ganhou seu proprio programa de TV.
            Deno Sport Toda Terça e Quinta - 12:30 em
            <a
              id="tribute-link"
              href="https://twitch.tv/pokemaobr"
              target="_blank"
              >twitch.tv/pokemaobr</a
            >
          </li>
        </ol>
      </section>
      <section class="fans">
        <h2>O que temos a dizer ao Deninho (ou sobre o ele)?</h2>
        <ul>
          <li>Deninho seu lindo eu te amu <3. Fezes o pensador</li>
          <li>Deninho seu lindo mate o node. Fezes o pensador</li>
          <li>Deninho matando coffeescript pela manhã - rui</li>
        </ul>
      </section>
      <div class="maedena">
        <img src="https://raw.githubusercontent.com/pachicodes/deninho.com/master/maedena.jpg" alt="Mae Dena" />
        <h4>“Mostra pra eles filho” MãeDená.js</h4>
        <h4>👍</h4>
      </div>
    </main>
  </body>
</html></h1>`});
}
