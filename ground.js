class Ground {

    constructor(x,y,width,length){

        options = {
            isStatic : false

        }
        this.body.rectangle(x,y,width,length,options);
        this.width = this.width;
        this.length  = this.length;
        World.add(world,this.body);
    }


    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        pop();





    }
}