import React from 'react';
import { SideBar } from './components/SideBar/SideBar.js';
import { Feed } from "./components/Feed/Feed.js"
import { Tuit } from "./components/Feed/Tuit/Tuit.js"
import { Trending } from "./components/Trending/Trending.js"

export function App() {
  return (
    <div className="app">
      <SideBar/>
      <Feed
        userAvatar="https://avatars1.githubusercontent.com/u/56234680?s=460&u=c8b81c525b1fd029db3020b17177dde2458a994e&v=4"
        tuit={
          <React.Fragment>
            <Tuit content={{
                avatar:"https://avatars1.githubusercontent.com/u/56234680?s=460&u=c8b81c525b1fd029db3020b17177dde2458a994e&v=4",
                name:"federico",
                username:"@federicoig",
                when:"2 minutes ago",
                tuit:"welcome to tuity!"
              }}/>
            <Tuit content={{
                avatar:"https://i.gyazo.com/7d308f43dd9ddbfc474fee90664f074c.png",
                name:"los simuladores",
                username:"@simuladoresbot",
                when:"36 minutes ago",
                tuit:"Oh cruentas serpientes, ustedes si merecen la prisión, pues me enteré recientemente que a sus presas no matan por hambre, si no por diversión."  
              }}/>
            <Tuit content={{
                avatar:"https://i.gyazo.com/7d308f43dd9ddbfc474fee90664f074c.png",
                name:"los simuladores",
                username:"@simuladoresbot",
                when:"3 hours ago",
                tuit:"Tortuga marítima"  
              }}/>
              <Tuit content={{
                avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Luis_Alberto_Spinetta_en_1976.jpg/220px-Luis_Alberto_Spinetta_en_1976.jpg",
                name:"luis alberto",
                username:"@spinetta",
                when:"5 hours ago",
                tuit:`Rojas y verdes luces del amor
                Prestidigitan bajo un halo de rouge
                ¿Qué sombra extraña te ocultó de mi guiño
                Que nunca oíste la hojarasca crepitar?
                
                Pues yo te escribiré
                Yo te haré llorar
                Mi boca besará
                Toda la ternura de tu acuario`  
              }}/>
              <Tuit content={{
                avatar:"https://flacostereo.files.wordpress.com/2018/10/aabb.jpg",
                name:"gustavo",
                username:"@cerati",
                when:"5 hours ago",
                tuit:`Cuando no hay mas que decirnos
                Habla el humo, nada el humo
                y rema en espiral
                
                Cuando no hay mas que decirnos
                Se abren al aire vacios
                Que dos no pueden respirar`  
              }}/>
              <Tuit content={{
                avatar:"https://i.gyazo.com/7d308f43dd9ddbfc474fee90664f074c.png",
                name:"los simuladores",
                username:"@simuladoresbot",
                when:"15 hours ago",
                tuit:"Te amo, Lamponne"  
              }}/>
              <Tuit content={{
                avatar:"https://i.gyazo.com/498c703949b55dc8f8a78ac8a16d72fc.png",
                name:"charly garcia",
                username:"@charlygarcia",
                when:"3 hours ago",
                tuit:`Acabo de llegar, no soy un extraño
                Conozco esta ciudad no es como en los diarios, desde allá
                Dos tipos en un bar, se toman las manos
                Prenden un grabador y bailan un tango, de verdad`  
              }}/>
          </React.Fragment>
        }
      />
      <Trending
      />   
    </div>
  );
}
