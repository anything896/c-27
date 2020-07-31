class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
   this.offsetX=offsetX
   this.offsetY=offsetY
       var options = {
           
           bodyA:bodyA,
           bodyB:bodyB,
pointB:{x:this.offsetX,y:this.offsetY}
          // stiffness:0.04,
         //  lenght:10
       }
       this.chain = Constraint.create(options)
       World.add(world,this.chain)
   }
   display(){
       var pointA=this.chain.bodyA.position
       var pointB=this.chain.bodyB.position
       strokeWeight(3)
       var Anchorpoint1x=pointA.x
       var Anchorpoint1y=pointA.y
       var anchorpoint2x=pointB.x
       var anchorpoint2y=pointB.y
   line(pointA.x,pointA.y,pointB.x,pointB.y)
   }
   }