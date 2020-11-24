class Ground{
    consructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        push()
        fill("yellow");
        rectMode(CENTER);
        rect(x,y,this.width,this.height);
        pop()
    }
}