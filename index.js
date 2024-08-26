const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')

class Player{
    constructor(x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color

    }
    draw() {
        c.beginPath()
        c.arc(  this.x, 
                this.y, 
                this.radius, 
                0, Math.PI * 2,
                false
            )
        c.fillStyle = this.color
        c.fill()
    }
}

class Projectile{
    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity

    }
    draw() {
        c.beginPath()
        c.arc(  
                this.x, 
                this.y, 
                this.radius, 
                0, Math.PI * 2,
                false
            )
        c.fillStyle = this.color
        c.fill()
    }
    update(){
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    print(){
        console.log(this.x, " ", this.y)
    }
}
class Enemy{
    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity

    }
    draw() {
        c.beginPath()
        c.arc(  
                this.x, 
                this.y, 
                this.radius, 
                0, Math.PI * 2,
                false
            )
        c.fillStyle = this.color
        c.fill()
    }
    update(){
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    print(){
        console.log(this.x, " ", this.y)
    }
}

const x = canvas.width / 2          
const y = canvas.height / 2    

const player = new Player(x, y, 30, 'white')

// const projectile = new Projectile(
//     canvas.width / 2, 
//     canvas.width / 4, 
//     5, 
//     'red',
//     {
//         x : 1,
//         y : 1
        
//     }
// ) 
// const projectile2 = new Projectile(
//     canvas.width / 2, 
//     canvas.width / 4, 
//     5, 
//     'yellow',
//     {
//         x : -1,
//         y : 1
        
//     }
// ) 
const projectiles = []
const enemies = []
let k = 0
const colors = ['yellow', 'red', 'blue', "green", 'pink', "white", "purple"]

function spawnEnemies() {
    setInterval(() => {
        
        const x = 100
        const y = 100
        const radius = 30
        const color = colors[k++ % colors.length]
        velocity = {
            x : 1,
            y : 1
        }

        enemies.push(new Enemy(x, y, radius, color, velocity))
        // console.log("go")
    }, 1000)
}


function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.draw()
    projectiles.forEach(projectile => {
        projectile.update()
    })
}

let isAnimating = false;

addEventListener('click', (event) => {
    const angle = Math.atan2(
        event.clientY - canvas.height / 2,
        event.clientX - canvas.width / 2
    )
    const velocity = {
        x : Math.cos(angle),
        y : Math.sin(angle)
    }
    projectiles.push(
        new Projectile(
            canvas.width / 2, 
            canvas.height / 2, 
            5, 
            'red',
            velocity
        )
    )
});

animate()
// spawnEnemies()
