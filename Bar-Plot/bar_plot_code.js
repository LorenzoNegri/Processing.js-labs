//canvas
size(550,550);
background(220,220,220);

//stroke grid
stroke(180);

//grid
for (int i=45;i<=495;i=i+45){
      line(45,i,495,i);
      line(i,45,i,495);
}

//axis
stroke(2);
strokeWeight(3);
line(30,495,510,495);
line(45,25,45,515);

//Variables, mean, max & min calc
int a=82;
int b=166;
int c=407;
int d=120;
int e=90;
int f=350;
int g=220;
int h=175;
int i=58;
int j=200;

int sum = a+b+c+d+e+f+g+h+i+j;
float mean = sum/10.0;
max = Math.max(a,b,c,d,e,f,g,h,i,j);
min = Math.min(a,b,c,d,e,f,g,h,i,j);

//Displaying graph
stroke(0,150);
strokeWeight(1);
//fx=150;
count=0;
col=0;


for(int ci=1; ci<=10; ci++){
    count=ci;
    if (count==1){
        if (a<mean){
            fill(255,0,0,((255+min)-a));
        }
        else{
            fill(0,255,0,a/(max/255));
        }
       rect(47, 45,a,44); 
    }
    else if (count==2){
        if (b<mean){
            fill(255,0,0,((255+min)-b));
        }
        else{
            fill(0,255,0,b/(max/255));
        }
        rect(47, 45*count,b,44);
    }
    else if (count==3){
        if (c<mean){
            fill(255,0,0,((255+min)-c));
        }
        else{
            fill(0,255,0,c/(max/255));
        }
        rect(47, 45*count,c,44);
    }
    else if (count==4){
        if (d<mean){
            fill(255,0,0,((255+min)-d));
        }
        else{
            fill(0,255,0,d/(max/255));
        }
        rect(47, 45*count,d,44)
    }
    else if (count==5){
        if (e<mean){
            fill(255,0,0,((255+min)-e));
        }
        else{
            fill(0,255,0,e/(max/255));
        }
        rect(47, 45*count,e,44);
    }
    else if (count==6){
        if (f<mean){
            fill(255,0,0,((255+min)-f));
        }
        else{
            fill(0,255,0,f/(max/255));
        }
        rect(47, 45*count,f,44);
    }
    else if (count==7){
        if (g<mean){
            fill(255,0,0,((255+min)-g));
        }
        else{
            fill(0,255,0,g/(max/255));
        }
        rect(47, 45*count,g,44);
    }
    else if (count==8){
        if (h<mean){
            fill(255,0,0,((255+min)-h));
        }
        else{
            fill(0,255,0,h/(max/255));
        }
        rect(47, 45*count,h,44)
    }
    else if (count==9){
        if (i<mean){
            fill(255,0,0,((255+min)-i));
        }
        else{
            fill(0,255,0,i/(max/255));
        }
        rect(47, 45*count,i,44);
    }
    else{
        if (j<mean){
            fill(255,0,0,((255+min)-j));
        }
        else{
            fill(0,255,0,j/(max/255));
        }
        rect(47, 45*count,j,44);
    }
}


////mean line
fill(0,0,255)
stroke(0,0,255);
strokeWeight(3);
line(mean+45,height/12,mean+45,height-height/10);
text(mean,mean+45,height/15);
