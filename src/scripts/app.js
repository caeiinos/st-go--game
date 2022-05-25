"use strict";
 let screenscale = 0;
import kaboom from "kaboom";
if(window.innerWidth < 1400){
    screenscale = 3
}
else{
    screenscale = 3.5
};

kaboom({
  global:true,
  scale:screenscale,
  fullscreen:true,

});


add([
  sprite("background"),
  // Make the background centered on the screen
  pos(width() / 2, height() / 2),
  origin("center"),
  // Allow the background to be scaled
  scale(1),
  // Keep the background position fixed even when the camera moves
  fixed()
]);
// Scale the background to cover the screen

  
function land(url) {
    window.open(url, '_blank').focus();
};

let SPEED = 120
let largeur = window.innerWidth;
let hauteur = window.innerHeight;

loadRoot("/assets/images/")
loadSprite("background", "background.jpg")
loadSprite("backgreen", "backgreen.jpg")
loadSprite("dirt", "dirt.png")
loadSprite("crane", "crane.png")
loadSprite("os", "os.png")
loadSprite("os--2", "os--2.png")
loadSprite("cote", "cote.png")
loadSprite("b", "b.png")
loadSprite("bl", "bl.png")
loadSprite("tl", "tl.png")
loadSprite("t", "t.png")
loadSprite("b", "b.png")
loadSprite("br", "br.png")
loadSprite("r", "r.png")
loadSprite("tr", "tr.png")
loadSprite("l", "l.png")
loadSprite("bl--eau", "bl--eau.png")
loadSprite("tl--eau", "tl--eau.png")
loadSprite("t--eau", "t--eau.png")
loadSprite("br--eau", "br--eau.png")
loadSprite("r--eau", "r--eau.png")
loadSprite("tr--eau", "tr--eau.png")
loadSprite("l--eau", "l--eau.png")
loadSprite("lombre--eau", "lombre--eau.png")
loadSprite("rombre--eau", "rombre--eau.png")
loadSprite("ombre--eau", "ombre--eau.png")
loadSprite("site--b", "site--b.png")
loadSprite("site--bl", "site--bl.png")
loadSprite("site--tl", "site--tl.png")
loadSprite("site--t", "site--t.png")
loadSprite("site--b", "site--b.png")
loadSprite("site--br", "site--br.png")
loadSprite("site--r", "site--r.png")
loadSprite("site--tr", "site--tr.png")
loadSprite("site--l", "site--l.png") 
loadSprite("herb", "herb.png")
loadSprite("feu", "feu.png")
loadSprite("stone", "stone.png")
loadSprite("arbre--1", "arbre--1.png")
loadSprite("arbre--3", "arbre--3.png")
loadSprite("sapin", "sapin.png")
loadSprite("deco1", "deco--1.png")
loadSprite("deco2", "deco--2.png")
loadSprite("deco3", "deco--3.png")
loadSprite("champi", "champi.png")
loadSprite("corner--tl", "corner--tl.png")
loadSprite("corner--tr", "corner--tr.png")
loadSprite("corner--bl", "corner--bl.png")
loadSprite("corner--br", "corner--br.png")
loadSprite("corner--lombre", "corner--lombre.png")
loadSprite("corner--rombre", "corner--rombre.png")
loadSprite("corner--tleau", "corner--tleau.png")
loadSprite("corner--treau", "corner--treau.png")
loadSprite("corner--bleau", "corner--bleau.png")
loadSprite("corner--breau", "corner--breau.png")
loadSprite("green", "green.png")
loadSprite("grey", "grey.png")
loadSprite("score", "score.png")
loadSprite("cailloux--1", "cailloux--1.png")
loadSprite("cailloux--2", "cailloux--2.png")
loadSprite("cailloux--3", "cailloux--3.png")
loadSprite("iguanodon", "iguanodon.png")
loadSprite("fossil", "fossil.png",{
    sliceX: 4,

    anims: {
		"repos": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 3,
			// Frame per second
			speed: 5,
			loop: true,
		},
    }
})
loadSprite("perso", "alain.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 8,
	// Define animations
	anims: {
		"repos": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 3,
			// Frame per second
			speed: 5,
			loop: true,
		},
		"cours": {
			from: 4,
			to: 7,
			speed: 10,
			loop: true,
		},
	},
})


scene("game", (mapIdx) => {
  layers(['bg', 'obj','deco', 'ui'], 'obj')


  const map  = [
      [    
    "ibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbz",
    "r    n                         ebbbbbbbbz",
    "r                         s             l",
    "r                                       l",
    "r                                    n  l",
    "r                                       l",
    "r              2 o                      l",
    "r                                       l",
    "yc          s                     2     l",
    "xr    1                                 l",
    "xr                                      l",
    "xytttttttttttttttttttc                  l",
    "x=$$$$$$$$$$$$$$$$$$$r  m               l",
    "xxxxxxxxxxxxxxxxxxxxxr         3        l",
    "xxxxxxxxxxxxxxxxxxxxxr                  l",
    "xxxxxxxxxxxxxxxxxxxxxr               s  l",
    "xxxxxxxxxxxxxxxxxxxxxr    o             l",
    "xxxxxxxxxxxxxxxxxxxxxr             2    l",
    "xxxxxxxxxxxxxxxxxxxxxr                  l",
    "xxxxxxxxxxxxxxxxxxxxxr                  l",
    "xxxxxxxxxxxxxxxxxxxxxr     1        ù   l",
    "xxxxxxxxxxxxxxxxxxxxxr                  l",
    "xxxxxxxxxxxxxxxxxxxxxyttttttttttttttttttu",
    "xxxxxxxxxxxxxxxxxxxxx=$$$$$$$$$$$$$$$$$$µ",


],
[    
    "ibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbz",
    "r    s                         ebbbbbbbbz",
    "r                      o                lxxxxxxxxxx",
    "r                                       lxxxxxxxxxx",
    "r                            1          lxxxxxxxxxx",
    "r                                       lxxxxxxxxxx",
    "r                3                      lxxxxxxxxxx",
    "r     1                                 lxxxxxxxxxx",
    "r                                m      lxxxxxxxxxx",
    "r                                       lxxxxxxxxxx",
    "r     n                   2             lxxxxxxxxxx",
    "yc          o                           lxxxxxxxxxx",
    "xr                                      lxxxxxxxxxx",
    "xr                                      ebbbbbbbbbz",
    "xytttttttttttttttttttc                            l",
    "x=$$$$$$$$$$$$$$$$$$$r  1                         l",
    "xxxxxxxxxxxxxxxxxxxxxr         2             1    l",
    "xxxxxxxxxxxxxxxxxxxxxr               s            l",
    "xxxxxxxxxxxxxxxxxxxxxr                            l",
    "xxxxxxxxxxxxxxxxxxxxxr    s                       l",
    "xxxxxxxxxxxxxxxxxxxxxr             2              l",
    "xxxxxxxxxxxxxxxxxxxxxr                            l",
    "xxxxxxxxxxxxxxxxxxxxxr                            l",
    "xxxxxxxxxxxxxxxxxxxxxr      o                 ù   l",
    "xxxxxxxxxxxxxxxxxxxxxr                            l",
    "xxxxxxxxxxxxxxxxxxxxxyttttttttttttttttttttttttttttu",
    "xxxxxxxxxxxxxxxxxxxxx=$$$$$$$$$$$$$$$$$$$$$$$$$$$$µ",
],
[    
    "ibbbbbbbbbbbbbbbbbbbbbbz",
    "r                      l",
    "r    1            m    l",
    "r                      l",
    "yttttttc               l",
    "$$$$$$$r           o   l",
    "xxxxxxxr       2       l",
    "xxxxxxxr               l",
    "xxxxxxxr   s           l",
    "xxxxxxxr               l",
    "xxxxxxxr           n   l",
    "xxxxxxxr               l",
    "xxxxxxxr  3            l",
    "ibbbbbbd               l",
    "r                      l",
    "r   ù         o     2  l",
    "r                      l",
    "yttttttttttttttttttttttu",
    "=$$$$$$$$$$$$$$$$$$$$$$µ",

],
[    
    "ibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbz",
    "r                                                          l",
    "r       1           n        1            m         s      l",
    "r                                                          l",
    "r                                                          l",
    "r               m                    o    3                l",
    "r                       3                          s       l",
    "r       f                                                  l",
    "yc                                   s                 ù   l",
    "xr   s             2  o                   1                l",
    "xr                                                         l",
    "xytttttttttttttttttttttttttttttttttttttttttttttttttttttttttu",
],
[    
    "ibbbbbbbbbbbbbbbbbbz",
    "r  s               l",
    "r             3    l",
    "r                f l",
    "r                  l",
    "r   1        o     l",
    "r                  l",
    "yttttttttttttttttttu", 
  ],

  ]


    addLevel(map[mapIdx], {
        width: 8,
        height: 8,
      't': () => [
          sprite('t--eau'),
          area(),
          solid()
          ],
      'b': () => [
          sprite('b'),
          area(), 
          solid()
          ],
      'l': () => [
          sprite('l--eau'),
          area(), 
          solid()
          ],
      'r': () => [
          sprite('r--eau'),
          area(), 
          solid()
          ],
      'a': () => [
          sprite('tl--eau'),
          area(), 
          solid()
          ],
      'c': () => [
          sprite('tl--eau'),
          area(), 
          solid()
          ],
      'd': () => [
          sprite('bl--eau'),
          area(), 
          solid()
          ],
      'e': () => [
          sprite('br--eau'),
          area(), 
          solid()
          ],
          'z': () => [
            sprite('corner--treau'),
            area(), 
            solid()
            ],
        'i': () => [
            sprite('corner--tleau'),
            area(), 
            solid()
            ],       
        'y': () => [
            sprite('corner--bleau'),
            area(), 
            solid()
            ],  
        'u': () => [
            sprite('corner--breau'),
            area(), 
            solid()
        ],
        '$': () => [
            sprite('ombre--eau'),
            area(), 
            solid()
        ],
        'µ': () => [
            sprite('corner--rombre'),
            area(), 
            solid()
        ],
        '=': () => [
            sprite('corner--lombre'),
            area(), 
            solid()
        ],        
        ' ': () => [
            sprite('green'),
            area(),
        ],
        's': () => [
            sprite('sapin'),
            area(), 
            solid(),
            origin('center'),
            layer('deco'),
        ], 
        'o': () => [
            sprite('stone'),
            area(), 
            solid(),
            layer('deco'),
        ], 
        '1': () => [
            sprite('deco1'),
            area(), 
            layer('deco'),
        ],
        '2': () => [
            sprite('deco2'),
            area(), 
            layer('deco'),
        ],
        '3': () => [
            sprite('deco3'),
            area(), 
            layer('deco'),
        ],  
        'n': () => [
            sprite('arbre--3'),
            area(), 
            solid(),
            origin('center'),
            layer('deco'),
        ],
        'm': () => [
            sprite('arbre--1'),
            area(), 
            solid(),
            origin('center'),
            layer('deco'),
        ],  
        'f': () => [
            sprite('feu'),
            area(), 
            solid(),
            layer('deco'),
        ],  
        'ù': () => [
            sprite('fossil'),
            area(),
            solid(),
            layer('deco'),
            origin('center'),
            "fossil",
        ]
      })
    
    const restart = add([
    text("restart",
        {
        size: 10,
        lineSpacing: 4,
        letterSpacing: 2,
        cursor: "pointer",
        }),

    pos(vec2(10, 10)),
    fixed(),
    area({ cursor: "pointer", }),
    scale(1),
    stay(),
    layer('ui'),
    origin("left"),
    "restart"
    ])

    every("fossil", (f) => {
        f.play('repos')
    })


    restart.onUpdate(() => {
        if (restart.isHovering()) {
            const t = time() * 10
            restart.color = rgb(
                wave(0, 255, t),
                wave(0, 255, t+2),
                wave(0, 255, t+4),
            )
            restart.scale = vec2(1.2)
        } else {
            restart.scale = vec2(1)
            restart.color = rgb()
        }
    })

    add([
        text("escpace pour interagir",
            {
            size: 10,
            
            cursor: "pointer",
            }),
    
        pos(vec2(width()-20, 10)),
        fixed(),
        area({ cursor: "pointer", }),
        layer('ui'),
        origin("right"),
        ])

    add([
        text("fleches pour bouger",
            {
            size: 10,
            cursor: "pointer",
            }),
    
        pos(vec2(width()-20, 20)),
        fixed(),
        layer('ui'),
        area({ cursor: "pointer", }),
        origin("right"),
        ])

    restart.onClick(()=>{
        go("game",0)
        destroyAll("score")
        destroyAll("affiche")
    })

    const player = add([
        sprite("perso"),
        pos(70, 30),
        origin("center"),
        area(),
        solid(),
        layer('ui')
    ])

    add([
        sprite("background"),
        pos(width() / 2, height() / 2),
        origin("center"),
        scale(1),
        layer('bg'),
        ]);


    player.onUpdate(() => {
        // Set the viewport center to player.pos
        camPos(player.pos)
    })


    // .play is provided by sprite() component, it starts playing the specified animation (the animation information of "repos" is defined above in loadSprite)
    player.play("repos")


    // Switch to "repos" or "cours" animation when player hits ground

    player.onAnimEnd("repos", () => {
        // You can also register an event that courss when certain anim ends
    })

    add([
        text(mapIdx + '/4',{
            size:12,
        }),
        pos(vec2(20, height() - (20))),
        fixed(),
        stay(),
        origin('center'),
        "score"
    ])

    add([
        sprite("score"),
        pos(vec2(14, height() - (40))),
        fixed(),
        stay(),
        "score"
    ])

    
    var gonext = false
    
    player.onCollide("fossil", () => {
        gonext = true             
	})

    onKeyPress("space", () => {
        if(gonext){
            if (mapIdx < map.length) {
				go("excave", mapIdx)
			} else {
				go("start")
			}
        }
    })

    onKeyPress(["left", "right", "up", "down"], () => {
        gonext = false
    }) 

    onKeyDown("left", () => {
        player.move(-SPEED, 0)
        player.flipX(true)
        // .play() will reset to the first frame of the anim, so we want to make sure it only courss when the current animation is not "cours"
        if ( player.curAnim() !== "cours") {
            player.play("cours")
        }
    })

    onKeyDown("right", () => {
        player.move(SPEED, 0)
        player.flipX(false)
        if ( player.curAnim() !== "cours") {
            player.play("cours")
        }
    })

    onKeyDown("up", () => {
        player.move(0, -SPEED)
        if ( player.curAnim() !== "cours") {
            player.play("cours")
        }
    })

    onKeyDown("down", () => {
        player.move(0, SPEED)
        if ( player.curAnim() !== "cours") {
            player.play("cours")
        }
    })

    onKeyRelease(["left", "right", "up", "down"], () => {
        // Only reset to "repos" if player is not holding any of these keys
        if ( !isKeyDown("left") && !isKeyDown("right") && !isKeyDown("up") && !isKeyDown("down")) {
            player.play("repos")
        }   
    }) 

    var fiche = document.querySelector(".content");
    var trigger = document.querySelector(".fiche__trigger");

    trigger.addEventListener("click", remove);
    
    function remove(){
        fiche.classList.remove("is--visible");  
    }

    if(mapIdx == 4){
        destroyAll("score")
        add([
            sprite("iguanodon"),
            pos(vec2(20, height() - 30)),
            fixed(),
            stay(),
            area(),
            "affiche"
        ])   

        onClick("affiche", () => {
            fiche.classList.add("is--visible");
        })
    }
    else{
        fiche.classList.remove("is--visible");
    }


}) 

scene("excave", (excaveIdx) => {
    layers(['bg', 'foss', 'obj', 'ui'], 'obj')
  
  
    const fouille  = [
  [    
    "atttttttttttttc",
    "l  3 31 123   r",
    "l  121  2 11  r",
    "l3   22 3322  r",
    "l 23  321  1  r",
    "l   1  33 3 2 r",
    "l 1  2  2 33  r",
    "l 22 121  32  r",
    "dbbbbbbbbbbbbbe", 
  ],
  [    
    "atttttttttttttc",
    "l  33 11 2    r",
    "l     31  33  r",
    "l33 1 2   11  r",
    "l  232 1  2   r",
    "l  121  3 2 1 r",
    "l   11  2  1  r",
    "l 22 12 33 2  r",
    "dbbbbbbbbbbbbbe", 
  ],
  [    
    "atttttttttttttc",
    "l  1232   2   r",
    "l    11 323   r",
    "l3 2 2  321 1 r",
    "l    23 31    r",
    "l   33 21  1  r",
    "l21  123 2  1 r",
    "l   1233   1  r",
    "dbbbbbbbbbbbbbe", 
  ],
  [    
    "atttttttttttttc",
    "l  3 22 1 3   r",
    "l   3223   1  r",
    "l22 3   21  22r",
    "l   323 1 1   r",
    "l   3 21 1  1 r",
    "l 2  33 21 3  r",
    "l   321 11  31r",
    "dbbbbbbbbbbbbbe", 
  ],
  
    ]
  
      addLevel(fouille[excaveIdx], {
          width: 16,
          height: 16,
          pos: vec2(center().x -120, center().y -72),

        't': () => [
          sprite('site--t'),
          area(),
          solid()
          ],
      'b': () => [
          sprite('site--b'),
          area(), 
          solid()
          ],
      'l': () => [
          sprite('site--l'),
          area(), 
          solid()
          ],
      'r': () => [
          sprite('site--r'),
          area(), 
          solid()
          ],
      'a': () => [
          sprite('site--tl'),
          area(), 
          solid()
          ],
      'c': () => [
          sprite('site--tr'),
          area(), 
          solid()
          ],
      'd': () => [
          sprite('site--bl'),
          area(), 
          solid()
          ],
      'e': () => [
          sprite('site--br'),
          area(), 
          solid()
        ],
        '1': () => [
            sprite('cailloux--1'),
            area(), 
            solid(),
            'cailloux'
        ],
        '2': () => [
            sprite('cailloux--2'),
            area(), 
            solid(),
            'cailloux'
        ],
        '3': () => [
            sprite('cailloux--3'),
            area(), 
            solid(),
            'cailloux'
        ],             
              
        })


        add([
            text("clique pour casser les blocs",
                {
                size: 10,
                cursor: "pointer",
                }),
        
            pos(vec2(width()-20, 10)),
            fixed(),
            area({ cursor: "pointer", }),
            origin("right"),
            ])

            add([
                sprite('dirt'),
                pos(vec2(center().x -120, center().y -72)),
                layer('foss'),
            ]) 


        add([
            
            sprite("backgreen",
            ),
            pos(width() / 2, height() / 2),
            origin("center"),
            scale(1),
            layer('bg'),
            ]);


        var i = 0
        var y = 0

        function shoot() { 
    
            add([
                pos(mousePos()),
                sprite("grey"),
                origin("center"),
                scale(rand(0.5, 1)),
                area(),
                body({ solid: false, }),
                lifespan(1, { fade: 0.5 }),
                move(choose([LEFT, RIGHT]), rand(60, 240)),
            ])

     
    
        }
    
        onClick("cailloux", (cailloux) => {
            if( i < 2 ){
                shoot()
                i++
            }
            else{
                destroy(cailloux) 
                i=0  
                y++         
            }
            
    
        })
    
        onClick("cailloux", () => {
            if(y>10){
                destroyAll("cailloux"),
                destroyAll("score"),
                
                score()       
            }
            else{
                rest.text = "cailloux a detruire : " + (11 - y)
            }
        })

                
        const rest = add([
            text("cailloux a detruire : " + (11 - y),{
                size: 10,
                cursor: "pointer",
                }),
            pos(vec2(width()/2, center().y + 92)),
            fixed(),
            area({ cursor: "pointer", }),
            origin("center"),

        ])

        add([
            
            sprite("backgreen",
            ),
            pos(width() / 2, height() / 2),
            origin("center"),
            scale(1),
            layer('bg'),
            ]);

        onKeyPress(("space"), () =>{
            if(y>10){
              go("game", excaveIdx +1 ) 
        
            }
        })

        var back = ['crane','cote','os','os--2']

        function score(){
            for (let fossNum = -1; fossNum <= excaveIdx+1; fossNum++) {
                add([
                    sprite(back[excaveIdx]),
                    pos(vec2(center().x -120, center().y -72)),
                    layer('foss'),
                ])   
            }

            add([
                text((excaveIdx+1) + '/4',{
                    size:12,
                }),
                pos(vec2(20, height() - (20))),
                fixed(),
                origin('center'),
                "score"
            ])
        
            add([
                sprite("score"),
                pos(vec2(14, height() - (40))),
                fixed(),
                "score"
            ])
            
            add([
                text("[espace pour aller au niveau suivant].wavy",
                    {
                    size: 10,
                    cursor: "pointer",
                    styles:{
                        "wavy": (ca) => ({
                            pos: vec2(0, wave(-1, 1, time() * 6 + ca * 0.5)),
                            }),
                    }
                }),
            
                pos(vec2(width()/2, center().y + 92)),
                fixed(),
                origin("center"),
            ])

            destroy(rest);
        }

    })

scene("start", () => {
	function addButton(txt, p, f) {
	
		const btn = add([
			text(txt,{
                size: 28,
                lineSpacing: 8,
                letterSpacing: 4,
                cursor: "pointer",
            }),
			pos(p),

			area({ cursor: "pointer", }),
			scale(1),
			origin("center"),
		])
	
		btn.onClick(f)
	
		btn.onUpdate(() => {
			if (btn.isHovering()) {
				const t = time() * 10
				btn.color = rgb(
					wave(0, 255, t),
					wave(0, 255, t+2),
					wave(0, 255, t+4),
				)
				btn.scale = vec2(1.2)
			} else {
				btn.scale = vec2(1)
				btn.color = rgb()
			}
		})
	
	}

    add([
        sprite("backgreen"),
        pos(width() / 2, height() / 2),
        origin("center"),
        scale(1),
        layer('bg'),
        ]);
	

	addButton("Start", vec2(width() / 2, height() / 2 -30), () => go("intro"))
	addButton("Landing", vec2(width() / 2, height() / 2 +10), () => land("https://jean-deroy.be/projets/tfa/"))
	
	// reset cursor to default at frame start for easier cursor management

});

scene("intro", () => {
    layers(['bg','obj','ui'], 'obj')
    add([
        text("[espace pour aller au niveau suivant].wavy",
            {
            size: 12,
            cursor: "pointer",
            styles:{
                "wavy": (ca) => ({
                    pos: vec2(0, wave(-1, 1, time() * 6 + ca * 0.5)),
                    }),
            }
        }),
    
        pos(vec2(width()/2, height()-20)),
        fixed(),
        origin("center"),
    ]);

    add([
        text("Salut nouvel aventurier es-tu pret a decouvrir l univers de [SteGO].wavy! Un univers rempli de dinosaures! Pour partir a sa decouverte, tu seras accompagne de Alain Grand, le celebre  paleontologue",
            {
                width:190,
            size: 12,
            styles:{
                "wavy": (ca) => ({
                    pos: vec2(0, wave(-1, 1, time() * 6 + ca * 0.5)),
                    }),
            }
        }),
    
        pos(vec2(width()/2, height()/2-20)),
        fixed(),
        origin("center"),
    ]);

    onKeyPress(("space"), () =>{
        go("game", 0 ) 
    });

    add([
        sprite("perso"),
        pos(70, height()/2),
        origin("bot"),
        scale(2),
        area(),
        solid(),

    ]);

    add([
        sprite("fossil"),
        pos(width()-70, height()/2),
        origin("bot"),
        scale(2),
        area(),
        solid(),
    ]);


    var title = document.querySelector(".game__title");
    title.classList.add("invisible");        

    
    add([
        sprite("background"),
        pos(width() / 2, height() / 2),
        origin("center"),
        scale(1),
        layer('bg')
        ]);
    });

go("start");
