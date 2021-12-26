class Paper{
    constructor(x,y,r)//agreagas argumentos de posición y radio
	{
        this.image=loadImage("paper.png")     

		 var options={
		isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
  

       }
	  // Aquí tienes que poner las propiedades del cuerpo
	  //este es un ejemplo
	   this.x=x;
	   this.y=y;
	   this.r=r;
	   
	  
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
	   //Paper = Bodies.circle(50,200,20)//ya no es necesario
	   //Paper.add(world,paperObjet)//ponerlos aquí
	   //con la creación del objeto en sketch
	   
}

display()
	{
		    var paperPos=this.body.position
			push()
            translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}


    }