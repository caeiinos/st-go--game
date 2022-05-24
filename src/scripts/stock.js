// Sprite animation

// Start a kaboom game
kaboom({
	// Scale the whole game up
	scale: 4,
	// Set the default font
	font: "sinko",
})

// Loading a multi-frame sprite
loadSprite("dino", "/sprites/dino.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 9,
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

const SPEED = 120

// Add our player character
const player = add([
	sprite("dino"),
	pos(center()),
	origin("center"),
	area(),
])

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
	player.flipX(false)
	if ( player.curAnim() !== "cours") {
		player.play("cours")
	}
})

onKeyDown("down", () => {
	player.move(0, SPEED)
	player.flipX(false)
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


// Check out https://kaboomjs.com#SpriteComp for everything sprite() provides

function shoot() {

	add([
		pos(rand(60, 240), rand(60, 240)),
		sprite("bean"),
		origin("center"),
		scale(rand(0.5, 1)),
		area(),
		body({ solid: false, }),
		lifespan(1, { fade: 0.5 }),
		move(choose([LEFT, RIGHT]), rand(60, 240)),
	])
}

onKeyPress("space", shoot)

onUpdate("bean", (m) => {
	m.move(m.dir.scale(SPEED))
})


//destruire plus parkle

var i = 0
function shoot() {

	add([
		pos(mousePos()),
		sprite("bean"),
		origin("center"),
		scale(rand(0.5, 1)),
		area(),
		body({ solid: false, }),
		lifespan(1, { fade: 0.5 }),
		move(choose([LEFT, RIGHT]), rand(60, 240)),
	])

}
player.onClick(shoot)



player.onCollide("enemy", () => {
	test = true
})

onKeyPress("space", () => {
	if(test){
		debug.log("what up")
	}

})