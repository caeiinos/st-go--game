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
		"idle": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 3,
			// Frame per second
			speed: 5,
			loop: true,
		},
		"run": {
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


// .play is provided by sprite() component, it starts playing the specified animation (the animation information of "idle" is defined above in loadSprite)
player.play("idle")


// Switch to "idle" or "run" animation when player hits ground

player.onAnimEnd("idle", () => {
	// You can also register an event that runs when certain anim ends
})

onKeyDown("left", () => {
	player.move(-SPEED, 0)
	player.flipX(true)
	// .play() will reset to the first frame of the anim, so we want to make sure it only runs when the current animation is not "run"
	if ( player.curAnim() !== "run") {
		player.play("run")
	}
})

onKeyDown("right", () => {
	player.move(SPEED, 0)
	player.flipX(false)
	if ( player.curAnim() !== "run") {
		player.play("run")
	}
})

onKeyDown("up", () => {
	player.move(0, -SPEED)
	player.flipX(false)
	if ( player.curAnim() !== "run") {
		player.play("run")
	}
})

onKeyDown("down", () => {
	player.move(0, SPEED)
	player.flipX(false)
	if ( player.curAnim() !== "run") {
		player.play("run")
	}
})

onKeyRelease(["left", "right", "up", "down"], () => {
	// Only reset to "idle" if player is not holding any of these keys
	if ( !isKeyDown("left") && !isKeyDown("right") && !isKeyDown("up") && !isKeyDown("down")) {
		player.play("idle")
	}
})


// Check out https://kaboomjs.com#SpriteComp for everything sprite() provides