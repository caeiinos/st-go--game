"use strict";

import kaboom from "kaboom";

kaboom({
  global:true,
  fullscreen:true,
  scale:5 ,
  debug:1,

});

loadSprite("b", "/assets/images/b.png")
loadSprite("bl", "/assets/images/bl.png")
loadSprite("tl", "/assets/images/tl.png")
loadSprite("t", "/assets/images/t.png")
loadSprite("b", "/assets/images/b.png")
loadSprite("br", "/assets/images/br.png")
loadSprite("r", "/assets/images/r.png")
loadSprite("tr", "/assets/images/tr.png")
loadSprite("l", "/assets/images/l.png")
loadSprite("green", "/assets/images/green.png")

scene("game", () => {
  layers(['bg', 'obj', 'ui'], 'obj')

  const map  = [
    "    bbbbbbbbbbbbbbbbbbbbbb ",
    "   rattttttttttttttttttttcl",
    "   rl                    rl",
    "   rl                    rl",
    "   rl                    rl",
    "   rl                    rl",
    "   rl                    rl",
    "   rl                    rl",
    "    cl                   rl",
    "    rl                   rl",
    "    rdbbbbbbbbbbbbbbbbbbbel",
    "     ttttttttttttttttttttt ",
  ]

  const leveCfg = {
    width: 8,
    height: 8,
    // define what each symbol means, by a function returning a component list (what will be passed to add())
  't': () => [
      sprite('t'),
      area(),
      solid()
      ],
  'b': () => [
      sprite('b'),
      area(), 
      solid()
      ],
  'l': () => [
      sprite('l'),
      area(), 
      solid()
      ],
  'r': () => [
      sprite('r'),
      area(), 
      solid()
      ],
  'a': () => [
      sprite('tl'),
      area(), 
      solid()
      ],
  'c': () => [
      sprite('tr'),
      area(), 
      solid()
      ],
  'd': () => [
      sprite('bl'),
      area(), 
      solid()
      ],
  'e': () => [
      sprite('br'),
      area(), 
      solid()
      ],
  }

  addLevel(map, leveCfg)

 // add([sprite('green'), layer('bg')])
 add([
  pos(24, 24),
  layer('ui'),
  text("ohhi", {
      size: 14, // 48 pixels tall
      width: 320, // it'll wrap to next line when width exceeds this value
      font: "sink", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
  }),
])

}) 
go("game")