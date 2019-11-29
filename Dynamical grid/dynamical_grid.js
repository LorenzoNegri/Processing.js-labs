// canvas and variables initialization
background(255);
int n_grid = 10; //number of squares variable
x=300; //canvas size variable
size(x,x);

X=width/(n_grid+2);
Y=height/(n_grid+2);
int i=-1;
int j=-1;

// drawing grid
stroke(160);
while (i<=n_grid && j<=n_grid){
    i++;
    j++;
    line(X+(X*i),Y,X+(X*i),height-Y);
    line(X,Y+(Y*j),width-X,Y+(Y*j));

}
