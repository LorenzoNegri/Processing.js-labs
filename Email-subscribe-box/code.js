// variables
a=10; // set here the opacity of the background: 0 min 100 max
txt_box="Email here..."; // You can change the text of the email box here
col=255; // set colors from 0 -> hot colors up to 255 -> cold colors
dim=100; // set circles dimension: 0 hide to 100 max


// canvas & background 
size(400,250);
background(100,a);

// email_box and send_button
r=abs(255-col)
g=col/3
b=col
strokeWeight(2)
stroke(r, g, b)
rect(10,10,250,60)
fill(100)
text(txt_box,50,45)
fill(r,g,b)
noStroke()
rect(275,10,115,60,10)
fill(255)
text("subscribe",285,45)
strokeWeight(1)
stroke(255)
fill(r/10,g,b/10)
triangle(375,25,365,50,345,40)
fill(255)
triangle(380,30,370,55,350,45)

// personal data consent
x=25
y=110
d=dim/3
stroke(b/2,g,b)
strokeWeight(3)
ellipse(x,y,d,d)
ellipse(x,y,d/1.5,d/1.5)
ellipse(x*5,y,d,d)
ellipse(x*5,y,d/1.5,d/1.5)
ellipse(x,y*1.65,d,d)
ellipse(x,y*1.65,d/1.5,d/1.5)
ellipse(x*5,y*1.65,d,d)
ellipse(x*5,y*1.65,d/1.5,d/1.5)
textSize(14);
fill(0)
text("Yes",x*2,y)
text("No",x*6,y)
text("Yes",x*2,y*1.65)
text("No",x*6,y*1.65)
text("I agree to the treatment of \n my personal information",x*8,y)
text("I agree to the treatment of \n my personal information \n for marketing purposes",x*8,y*1.65)
