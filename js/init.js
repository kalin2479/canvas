var canvas = document.getElementById("idcanvas"),
	ctx, rad, grados;
canvas.width = 400;
canvas.height = 500;
if (canvas.getContext)
{
	//reconoce a canvas
	// indicamos que vamos a trabajar en un contexto de 2D
	// ctx accedera a los metodos del canvas para poder dibujar
	// ctx indica que dibujara en dos dimensiones
	ctx = canvas.getContext("2d");
	// ctx.fillRect(x,y,w,h); recibe 4 parametros
	// dibujar rectangulos sus parametros son posx, posy , ancho y alto
	//ctx.fillRect(10,30,80,90); con relleno
	//ctx.fillRect(10,30,80,90);
	//ctx.strokeRect(70,150,100,300); rectangulo dibujado pero sin relleno
	ctx.strokeRect(70,150,100,300);

	grados = 360;
	rad = (Math.PI/180) * grados;
	//ctx.arc(X, Y, RADIUS, START ANGLE, END ANGLE, ANIT-CLOCKWISE(TRUE/FALSE));
	ctx.arc(280, 120, 15, 0, rad);
	//ctx.stroke(); dibuja el circulo sin relleno
	//ctx.stroke();
	//ctx.fill(); con relleno
	ctx.fill();
}else
{
	//no soporta canvas
	alert("No soporta canvas");
}