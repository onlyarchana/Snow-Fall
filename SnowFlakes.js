class SnowFlakes{
    constructor(){
          this.x = random(0, 1500);
          this.y = random(0, 800);
          this.image =loadImage("snow2.png");
          }

          update() {
              this.y = this.y + 10;

              if (this.y > 800) {
                  this.y = random(0, 800);
                  this.x = random(0, 1500);
              }
          }

          display() {
              imageMode(CENTER);
              image(this.image,this.x,this.y,70,70);
          }
    
}