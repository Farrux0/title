class Scroll {
    constructor(info) {
        if(typeof info.element == 'string') {
            this.item = document.querySelector(info.element)
        }else if(info.element instanceof HTMLElement) {
            this.item = info.element
        }
        this.range = info.top
        this.unit = info.unit
        this.item.style.position = 'fixed'
        this.item.style.top = this.checkUnit() + 'px'
        window.addEventListener('scroll', () => this.move())
        window.addEventListener('resize', () => this.move())
    }
    
    checkUnit() {
        if(this.unit == 'px') {
            return this.range > 0 ? this.range : 0
        }else if(this.unit == '%' || this.unit == undefined) {
            return window.innerHeight / 100 * this.range - this.item.clientHeight
        }
    }
    
    move() {
        // scrollY - отдает количество px проскроленное от верхней части сайта
        
        this.size = this.checkUnit()
        
        
        if(this.size - scrollY > 0) {
           this.item.style.top = this.size - scrollY + 'px' 
        }else {
            this.item.style.top = 0
        }
    }
    
}



let myScroll = new Scroll({
    element: '.header__nav',
    top: 100,
})


// class Move{
//     constructor(el) {
//         this.item = el
//         this.item.addEventListener('mouseover', () => this.move())
//     }
    
//     move() {
        
//     }
    
// }

// let element = new Move('.header__content')



var countSheep = function (num){
   let str = ''
   if(num == 0) {
    return ''
   }else {
        for(let i = 1; i <= num;i++) {
            str += `${i} sheep...`
        }
   }
   return str
}

console.log(countSheep(6));

let title = document.querySelector('.header__content')

let max = 500
let min = 10



title.addEventListener('mouseover', () => {
    let x = random(max, min)
    let y = random(max, min)
    
    title.style.position = 'absolute'
    title.style.top = y + 'px'
    title.style.left = x + 'px'
    title.style.right = y + 'px'
})





function random(min,max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min)
}