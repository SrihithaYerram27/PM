class Tree {

    constructor(x,y,width,length){
        var option = {

            isStatic = true,
        }
        this.body.rectangle(x,y,width,length,options);
        this.image = loadImage("tree.png");
        this.width = this.width;
        this.height  = this.height;
        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();



    }
}