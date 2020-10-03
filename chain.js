class Chain{

    constructor(bodyA,pointB){

        var options = {
            bodyA :bodyA,
            pointB :pointB,
            length : 30,
            stiffness :0.04
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);


    }

    attach(body){
        this.chain.bodyA = body;
    }
    
    fly(){
        this.chain.bodyA = null;
    }


        display(){
            if(this.chain.bodyA){
            var posA = this.chain.bodyA.position;
            var posB = this.chain.pointB;
            
            
            stroke("black");
            strokeWeight(5);
            line(posA.x,posA.y,posB.x,posB.y);
            }
            


        }
}