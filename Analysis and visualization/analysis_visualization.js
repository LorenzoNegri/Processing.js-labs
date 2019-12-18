// canvas
size(700,300);
background(255);
fill(0);

// arrays
float[][] data = {
    {7.2,7.5,7.6,7.5,7.5,7.4,7.1,7.0,7.0,6.9,6.9,7.1,7.2,7.3,7.1,7.1,7.0,7.2,7.3,7.3},
    {7.4,7.4,7.5,7.3,7.6,7.5,7.5,7.4,7.3,7.3,7.2,7.4,7.5,7.5,7.5,7.4,7.2,7.3,7.5,7.6},
    {7.4,7.5,7.5,7.6,7.6,7.5,7.4,7.5,7.8,7.5,7.5,7.6,7.8,7.8,7.4,7.8,7.9,7.4,7.5,7.5}
};
float[][] means = new float[1][3];
float max1 = 0.0;
float max2 = 0.0;
float max3 = 0.0;

// function to calculate mean
function average(data){
    float sum = data.reduce(function(a, b) { return a + b; }, 0);
    float average = sum/data.length;
    return average;
}

// calculate means of experiments
for(int i=0;i<3;i++){
    means[i] = average(data[i]);
}

// function for the max value
function maxVal(data){
    max1 = max(data[0]);
    max2 = max(data[1]);
    max3 = max(data[2]);
    maxVal = max(max1,max2,max3);
    return maxVal;
}

// function for min value
function minVal(data){
    min1 = min(data[0]);
    min2 = min(data[1]);
    min3 = min(data[2]);
    minVal = min(min1,min2,min3);
    return minVal;
}

// assign results to stats var
maximumVal = maxVal(data);
minimumVal = minVal(data);
meanVal = (means[0]+means[1]+means[2])/3;


/////////////////////////////////////////
// Display visuals and data
////////////////////////////////////////
textAlign(LEFT,CENTER);
// initialise variables required
int xMargin = 20;
int yMargin = 30;
int yTopMargin = (height+500)/6;
int observations = data[0].length;
int yScale = (height-yMargin-yTopMargin)/maximumVal;
int xScale = (width-2*xMargin)/observations;
int barWidth = (xScale)/3;
    
// set colours of bars
color colours = {
                color(#008080),
                color(#F4A460),
                color(#7B68EE)
};

String heading = "pH Analysis";
    
// display main heading
text(heading,width/2-(heading.length()/2)*6,10); 

// display observations in table
String obs = "";
String[] lables = {
                        "Experiment1 ",
                        "Experiment2 ",
                        "Experiment3 "
};
    
// display table values
for(int t=0;t<lables.length;t++){
    fill(colours[t]);
    text(lables[t],6,50+(t*15));
    fill(0);
    for(int obsInd=0;obsInd<observations;obsInd++){
        obs = nf(data[t][obsInd],1,1);
        //fill(colours[t]);
        text(obs,8+lables[t].length()*6+
        (xScale-2)*obsInd,50+(t*15));
    }
}
    
// display observation times in table
String timeLabel = "Observed/s  ";
text(timeLabel,6,50+(lables.length*15));
for(int t=0;t<20;t++){
    text(t*5,10+timeLabel.length()*6
       +(xScale-2)*t,50+(lables.length*15));
}
    
// draw axes
line(xMargin,height-yMargin,xMargin,height
    -yMargin-(8*yScale));
line(xMargin,height-yMargin,width-xMargin,height-yMargin);
    
// display axes labels
textSize(8);
// y axis labels
yCoord = height-yMargin-(maximumVal*yScale);
text(nf(maximumVal,1,1),4,yCoord);
line(xMargin,yCoord,xMargin-3,yCoord);
yCoord = height-yMargin-(minimumVal*yScale);
text(nf(minimumVal,1,1),4,yCoord);
line(xMargin,yCoord,xMargin-3,yCoord);

// x axis labels
for(int i=0;i<observations;i++){
    text(i*5,(i*xScale)+xMargin+xScale/2
       -str(i).length()/2*6,height-yMargin+7);
    line(xMargin+((i)*xScale),height-yMargin,
       xMargin+((i)*xScale),height-yMargin+3);
}
    
// display x axis title
textSize(12);
String label ="Observations time/seconds";
text(label,width/2-(label.length()/2*6),height-10);

//Display clustered bar chart
for(int i=0;i<3;i++){  //For each experiment
    for(int j=0;j<observations;j++){  //Each observation
        fill(colours[i]);
        rect((j*xScale)+xMargin+(i*barWidth),height
           -yMargin,barWidth+1,-(yScale*data[i][j]));
    }
}
    
// display mean pH of experiments and other lines
textSize(8);
stroke(255,0,0);
strokeWeight(1);
fill(255,0,0);
yCoord = height-yMargin-(meanVal*yScale);
text(nf(meanVal,1,1),4,yCoord);
line(xMargin,yCoord,xMargin-3,yCoord);
int meanYCoord = height-yMargin-(meanVal*yScale);
line(xMargin,meanYCoord,width-xMargin,meanYCoord);
stroke(0);
strokeWeight(1);
int YCoord = height-yMargin-(maximumVal*yScale);
line(xMargin,YCoord,width-xMargin,YCoord);
stroke(255);
int YCoord = height-yMargin-(minimumVal*yScale);
line(xMargin,YCoord,width-xMargin,YCoord);
