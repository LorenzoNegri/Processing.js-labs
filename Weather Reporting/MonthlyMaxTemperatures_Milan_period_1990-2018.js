// Canvas
size(760, 400);
fill(0);
background(255);

// Temperature range variables
temp_range1=0;
temp_range2=0;
temp_range3=0;
temp_range4=0;
temp_range5=0;

// Temperature Data 
int[] temps = {15, 11, 18, 28, 30, 33, 34, 35, 31, 29, 18, 18}; 
int[] temps2 = {10, 15, 21, 27, 30, 33, 35, 32, 28, 24, 18, 14};
int[] temps3 = {22, 16, 26, 28, 30, 33, 35, 35, 31, 25, 19, 15};
int[] temps4 = {11, 24, 24, 23, 30, 33, 34, 32, 29, 26, 18, 12};

// Joining max Temperature Data all together
int[] max_temp= concat(temps,temps2);
int[] max_temperat= concat(max_temp,temps3);
int[] max_temperature= concat(max_temperat,temps4);

// Counting number of months per temperature range
for(i=0; i<max_temperature.length; i++){
    if(max_temperature[i]<12.0){
        temp_range1++
    }else if(max_temperature[i]<20.0){
        temp_range2++
    }else if(max_temperature[i]<30.0){
        temp_range3++
    }else if(max_temperature[i]<35.0){
        temp_range4++
    }else if(max_temperature[i]<42.0){
        temp_range5++
    }
}

// Assign results to array
int [] temp_interval_counts={temp_range1,temp_range2,temp_range3,
                    temp_range4,temp_range5};

// Draw Temp ranges table
for(int j=0; j<2; j++){
    for(int i=0; i<6; i++){
        fill(255);
        rect(100*j+40,20*i+20,100,20);
    }
}

fill(0);
text (" Temp ranges(°C)   " + "Nr months", 40, 35);
text ("   0-12 degrees        "+ temp_interval_counts[0], 40, 55);
text (" 12-20 degrees        "+ temp_interval_counts[1], 40, 75);
text (" 20-30 degrees        "+ temp_interval_counts[2], 40, 95);
text (" 30-35 degrees        "+ temp_interval_counts[3], 40, 115);
text (" 35-42 degrees        "+ temp_interval_counts[4], 40, 135);

// months Array
String[] months = {"JAN", "FEB", "MAR", "APR",  "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"};

int hscale = width/380;
int vscale = height/50;

//Draw axes and title
strokeWeight(3);
stroke(0);
line(20, vscale, 20, height-20);
line(20, height-20, width-hscale, height-20);
text("Max Temperatures in Milan period 1990-2018 (\u00B0C)", width/3, 30);
fill(255,0,0);
text("Monthly Max temp. year 2018 (\u00B0C)", width/3, 230);
fill(0,0,255);
text("Monthly Max temp. year 2010 (\u00B0C)", width/3, 250);
fill(0,200,0);
text("Monthly Max temp. year 2000 (\u00B0C)", width/3, 270);
fill(100,100,100);
text("Monthly Max temp. year 1990 (\u00B0C)", width/3, 290);


//Horizontal labels (months)
fill(0);
for(int i = 0; i < months.length; i++){
    text(months[i], i*30*hscale + 15*hscale + 20, height-5);
}

//Vertical labels (temperature 0-45)
for(int i = 0; i < 50; i = i+5){
    text(i, 2, height - 20 - (i*vscale));
}

//Draw temperature data
stroke(200, 200, 200);
strokeWeight(2);
noFill();
beginShape();
for(int i = 0; i < temps4.length; i++){
    vertex(((i+1)*hscale*30), height - 20 - (vscale*temps4[i]));
}
endShape();

stroke(0, 0, 255);
strokeWeight(2);
noFill();
beginShape();
for(int i = 0; i < temps2.length; i++){
    vertex(((i+1)*hscale*30), height - 20 - (vscale*temps2[i]));
}
endShape();

stroke(0, 255, 0);
strokeWeight(2);
noFill();
beginShape();
for(int i = 0; i < temps3.length; i++){
    vertex(((i+1)*hscale*30), height - 20 - (vscale*temps3[i]));
}
endShape();

stroke(255, 0, 0);
strokeWeight(2);
noFill();
beginShape();
for(int i = 0; i < temps.length; i++){
    vertex(((i+1)*hscale*30), height - 20 - (vscale*temps[i]));
}
endShape();
