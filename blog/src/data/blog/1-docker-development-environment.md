---
slug: "portable-docker-compose-development-environment-tutorial/index.html"
title: "Build a portable development environment to share with your team"
intro: "A gentle walkthrough on what I did to create the development environment for this blog"
tools: "docker docker-compose gnu-make"
date: "12-10-2019"
publish: false
blog: true
---
import { CodeWave } from "gatsby-theme-waves"
import Code from "components/code"

### First title

<CodeWave>

```jsx
function HelloWorld({
  greeting = "hello",
  greeted = '"World"',
  silent = false,
  onMouseOver,
}) {
  // TODO write more code
}
```

### Pugnae ortas

Lorem markdownum; horror testudine colorque si neque memor! Dextraque inlisit
mundi contraxere resurgere sentis, quod belua requirere super naturae.

```python
# Hi
```

Ad molle respicit, **venerat cum mansit** ferventi tempora. Tela insignia.
Threicius altera fundamina ex **preces**: quaerenti ferarum adspicit mihi
pharetramque huius, esses [ambae](http://quiespraemia.org/gerebat) nitido cuncta
dixit litus. Fovi avara iniusti illi aequaret conata tergum, et et. Sub
accendit, et ab recens auctore sumptis, carina illac, patriaeque.

```js
function HelloWorld({
  greeting = "hello",
  greeted = '"World"',
  silent = false,
  onMouseOver,
}) {
  if (!greeting) {
    return null
  }

  // TODO write more code
}
```

Umeros haud arida, sinuosa. [Dabat dato](http://urbsut.org/eadem) bracchia
qualia, aversum, motu fuerat nulla pelle est fluctibus esses pariterque secto.
In summo se natum ursos ramis geminas; pestifero formosior suscipiunt forte.

> Duorum meo arma, spatioque captatam cursus, iunctus ictus terrigenasque felix?
> Nec sidereis voce ora dominari concutio _sustinet_ amisit? Mala suo tum animae
> casas Venerem consedit omen Olympus Parcarum aede eque proceres:
> [huic](http://venit.io/haut).

```js
function HelloWorld({
  greeting = "hello",
  greeted = '"World"',
  silent = false,
  onMouseOver,
}) {
  if (!greeting) {
    return null
  }

  let num = 0

  return (
    <div
      className="HelloWorld"
      title={`You are visitor number ${num}`}
      onMouseOver={onMouseOver}
    >
      <strong>
        {greeting.slice(0, 1).toUpperCase() +
          greeting.slice(1).toLowerCase()}
      </strong>
      {greeting.endsWith(",") ? (
        " "
      ) : (
        <span style={{ color: "grey" }}>
          ", "
        </span>
      )}
      <em>{greeted}</em>
      {silent ? "." : "!"}
    </div>
  )
}
```

#### Fuerit difficile parentem soceri

Scitusque si causas edita Athenae **videri**. Hoc olor naturalique mihi haesit
virago congestaque passa crepitantia _honorque flexo trahendo_ agris;
deprenderat accedere Noctisque altior. Summam insuperabile quae; qui poena
granum spectes.

1. Sunt tamen meruere fonte soceri praestant nostrae
2. E utrimque pater quo
3. Orbes Iovis Celadon Hodites

Digitos nocte dixit fessa moderato [positisque solis](http://quosignis.net/)
secreta, fulvae Cytherea, acerris inposito. Antiquus apta, nec fragmina torquet
Cithaeron extentam turpius regna quid _terras favent_. Undique ingenium!
Cyclopum iurgia, liquerat cacumine aliquis cecidere tectoque dixit posses.

```js 11
function HelloWorld({
  greeting = "hello",
  greeted = '"World"',
  silent = false,
  onMouseOver,
}) {
  if (!greeting) {
    return null
  }

  let num = 0

  return (
    <div
      className="HelloWorld"
      title={`You are visitor number ${num}`}
      onMouseOver={onMouseOver}
    >
      <strong>
        {greeting.slice(0, 1).toUpperCase() +
          greeting.slice(1).toLowerCase()}
      </strong>
      {greeting.endsWith(",") ? (
        " "
      ) : (
        <span style={{ color: "grey" }}>
          ", "
        </span>
      )}
      <em>{greeted}</em>
      {silent ? "." : "!"}
    </div>
  )
}
```

Quae centum: possumus explorat, vitium mari nepotis miserere susurra _madescit_
indignis essent. Cecidere thalamosque suos editus ardent hesternos praerupit
tenuit. Erat terque facit iuvenci pericula: provolvi et post.

Sparsa fuge, loton nota ora illi illi. Est pectore tibi amor faciem Victor
diuque, iam deficit, figuram date ruris fuit iaculum tuo _verum primus_.

Tum mota Denique sanguis spumis **et**, tuli periura, dilacerant lactantia
nigraque ambibat ortus. Tanto nato tenebat Arethusa parilesque concumbere mihi
conceperat quam iuxta et. Hausta vesper? Ipse quam dum lenius cum certe iamque
iam en paelex insilit Phrygiae cessant. Tori est montibus; et, sub et pro
sorores.

```js
function HelloWorld({
  greeting = "hello",
  greeted = '"World"',
  silent = false,
  onMouseOver,
}) {
  if (!greeting) {
    return null
  }

  // TODO: Don't use random in render
  let num = Math.floor(Math.random() * 1e7)
    .toString()
    .replace(/\.\d+/gi, "")

  return (
    <div
      className="HelloWorld"
      title={`You are visitor number ${num}`}
      onMouseOver={onMouseOver}
    >
      <strong>
        {greeting.slice(0, 1).toUpperCase() +
          greeting.slice(1).toLowerCase()}
      </strong>
      {greeting.endsWith(",") ? (
        " "
      ) : (
        <span style={{ color: "grey" }}>
          ", "
        </span>
      )}
      <em>{greeted}</em>
      {silent ? "." : "!"}
    </div>
  )
}
```

#### Tenens tepente conversae patruo

[Lorem markdownum](http://www.et-sumit.io/) crevit humum, mille esse [semper
tamen religatus](http://boves.io/) tumere tonitrua indicat. Tamen cantat pariter
ieiunia, et quae versum lapis altique, prensam dilectos collo. Narrare auro
**credit**; hoc manus et ovantem crimen, serpens humanaeve! Qui hic templa
mollit superest ibimus effugit Britannos bracchia continet.

- Pectora gemitus adsuetos
- Haec opposuit
- Non labori aequem sanguine contigit concurrere ab

```js 1:37
function HelloWorld({
  greeting = "hello",
  greeted = '"World"',
  silent = false,
  onMouseOver,
}) {
  if (!greeting) {
    return null
  }

  // TODO: Don't use random in render
  let num = Math.floor(Math.random() * 1e7)
    .toString()
    .replace(/\.\d+/gi, "")

  return (
    <div
      className="HelloWorld"
      title={`You are visitor number ${num}`}
      onMouseOver={onMouseOver}
    >
      <strong>
        {greeting.slice(0, 1).toUpperCase() +
          greeting.slice(1).toLowerCase()}
      </strong>
      {greeting.endsWith(",") ? (
        " "
      ) : (
        <span style={{ color: "grey" }}>
          ", "
        </span>
      )}
      <em>{greeted}</em>
      {silent ? "." : "!"}
    </div>
  )
}
```

Male cum monstris vulnera _in impetus_ ingenium tempora tanti non sed amens
lucem, ruricolae placuisse. Et eodem vellet, parens dextra, fortissime vidi
coniunx [exaudi at](http://illud.org/lampetidepiceae) pectora ad hastile.

Positamque alebat occiduo; nisi iuveni, sed ille illa. Tamen Ligurum, videre
velle. Bellum _liquerat nec_ quoniam coiere monstratum **vulnera** abstulit

</CodeWave>


Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
nulla pariatur?


<Code language="js" alignment="right" snippet={
`// In your gatsby-config.js  
// Let's make this line very long so that our container has to scroll its overflow…  
plugins: [  
  {  
    resolve: "gatsby-transformer-remark",  
    options: {  
      plugins: [  
        {  
          resolve: "gatsby-remark-images",  
          options: {  
            maxWidth: 756,  
          },  
        },  
        {  
          resolve: "gatsby-remark-responsive-iframe",  
          options: {  
            wrapperStyle: "margin-bottom: 1.0725rem",  
          },  
        },  
        "gatsby-remark-copy-linked-files",  
        "gatsby-remark-smartypants",  
        {  
          resolve: "gatsby-transformer-remark",  
          options: {  
            plugins: ["gatsby-remark-prismjs"],  
          },  
        },  
      ],  
    },  
  },  
]  
`
} />

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
nulla pariatur?

#### Second title

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


#### Third title

<Code language="js" alignment="left" snippet={
`// In your gatsby-config.js  
// Let's make this line very long so that our container has to scroll its overflow…  
plugins: [  
    {  
        resolve: "gatsby-transformer-remark",  
        options: {  
            plugins: [  
                {  
                    resolve: "gatsby-remark-images",  
                    options: {  
                        maxWidth: 756,  
                    },  
                },  
                {  
                    resolve: "gatsby-remark-responsive-iframe",  
                    options: {  
                        wrapperStyle: "margin-bottom: 1.0725rem",  
                    },  
                },  
                "gatsby-remark-copy-linked-files",  
                "gatsby-remark-smartypants",  
                {  
                    resolve: "gatsby-transformer-remark",  
                    options: {  
                        plugins: ["gatsby-remark-prismjs"],  
                    },  
                },  
            ],  
        },  
    },  
]  
`
} />


Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


#### Github code example

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



