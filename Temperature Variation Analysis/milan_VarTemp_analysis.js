// size control
size_multip = 30;

// Canvas
w = 25.3;
h = 13.3;
size(w*size_multip, h*size_multip);
background(0);

// variables
temp_range1=0;
temp_range2=0;
temp_range3=0;
temp_range4=0;
temp_range5=0;

int hscale = width/380;
int vscale = height/50;

// data matrix
float[][] data = {
                 {9.1, 6.90, 11.1, 20.9, 24.0, 28.5, 30.7, 31.0, 27.1, 21.0, 13.2, 8.0}, //2018
                 {6.2, 10.1, 17.4, 20.2, 24.2, 30.0, 30.5, 31.7, 22.9, 20.5, 11.9, 7.0},
                 {7.9, 10.1, 14.4, 20.5, 22.1, 27.0, 30.9, 29.1, 27.7, 17.8, 11.4, 7.6},
                 {9.2, 8.90, 15.0, 19.8, 24.4, 28.5, 33.0, 29.7, 24.0, 17.4, 13.8, 8.2},
                 {7.9, 10.0, 16.6, 20.0, 23.2, 27.7, 27.2, 26.4, 24.9, 20.2, 14.0, 8.2},
                 {6.2, 6.70, 10.7, 17.6, 21.1, 27.3, 30.7, 29.2, 25.0, 17.7, 12.2, 8.0},
                 {7.1, 6.70, 18.5, 16.7, 23.1, 28.2, 30.5, 31.8, 24.5, 18.5, 13.1, 5.6},
                 {4.6, 9.80, 13.7, 22.4, 25.6, 26.1, 28.1, 31.1, 26.5, 19.3, 11.2, 8.4},
                 {5.0, 7.90, 13.1, 19.2, 21.9, 27.0, 31.1, 27.9, 23.5, 16.1, 10.8, 4.0}, //2010
                 {6.0, 8.40, 14.1, 18.1, 22.2, 26.0, 30.1, 25.8, 22.4, 16.0, 11.5, 6.0},
                 {8.5, 11.6, 16.5, 18.3, 23.8, 27.0, 29.5, 29.7, 23.9, 20.2, 12.8, 6.2},
                 {9.7, 11.9, 16.6, 23.8, 25.2, 27.8, 31.9, 28.6, 24.6, 19.9, 13.1, 7.8},
                 {6.7, 8.90, 14.0, 19.8, 24.0, 29.3, 32.7, 27.4, 26.6, 20.7, 14.4, 9.3},
                 {8.0, 9.10, 15.4, 17.6, 25.5, 30.0, 31.3, 28.7, 26.1, 19.2, 14.4, 6.2},
                 {7.8, 10.4, 13.7, 19.1, 23.6, 30.3, 31.3, 30.8, 26.5, 19.3, 13.7, 9.1},
                 {7.4, 9.30, 17.3, 18.5, 27.6, 33.0, 32.0, 35.3, 26.4, 17.7, 12.5, 9.5},
                 {7.3, 11.8, 18.1, 19.1, 23.0, 29.2, 30.1, 28.7, 24.4, 19.4, 13.1, 7.5},
                 {7.3, 12.2, 15.5, 18.5, 25.2, 28.8, 31.2, 32.4, 23.7, 21.5, 11.6, 6.9},
                 {8.6, 12.3, 17.4, 19.2, 26.4, 30.0, 30.1, 30.6, 27.0, 18.9, 12.2, 9.1}, //2000
                 {8.4, 11.6, 15.1, 19.5, 24.9, 27.8, 30.4, 29.1, 26.4, 18.7, 11.8, 7.2},
                 {8.2, 15.3, 16.5, 17.8, 24.8, 28.6, 31.1, 31.9, 25.8, 20.5, 12.4, 7.7},
                 {7.8, 12.8, 19.6, 20.2, 26.1, 26.0, 29.4, 29.8, 27.7, 21.0, 12.8, 7.9},
                 {6.3, 9.10, 14.0, 19.5, 24.3, 29.2, 28.9, 28.6, 22.4, 19.0, 13.9, 8.3},
                 {7.7, 10.8, 14.1, 19.5, 22.7, 25.1, 32.2, 29.3, 23.5, 20.1, 12.4, 7.5},
                 {9.1, 7.80, 18.6, 18.4, 23.3, 27.0, 31.5, 31.7, 23.7, 18.0, 12.2, 7.6},
                 {7.3, 10.2, 14.0, 17.8, 24.2, 28.0, 27.7, 30.1, 22.5, 16.8, 10.1, 7.7},
                 {4.3, 10.1, 14.8, 17.0, 24.5, 24.6, 28.7, 31.1, 25.4, 16.1, 11.9, 7.0},
                 {5.0, 6.50, 14.8, 16.2, 19.3, 25.0, 31.1, 30.9, 26.1, 16.6, 10.2, 6.3},
                 {5.3, 12.8, 17.0, 15.9, 24.4, 26.0, 29.5, 28.7, 24.5, 17.9, 9.7, 4.2} //1990
};
String[] years = {
                   "2018 ","2017 ","2016 ","2015 ","2014 ","2013 ","2012 ","2011 ",
                   "2010 ","2009 ","2008 ","2007 ","2006 ","2005 ","2004 ","2003 ","2002 ","2001 ",
                   "2000 ","1999 ","1998 ","1997 ","1996 ","1995 ","1994 ","1993 ","1992 ","1991 ",
                   "1990 "
};
String[] months = {"JAN", "FEB", "MAR", "APR",  "MAY", "JUN", 
                   "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
};

//months mean function from matrix
function m_mean(matrix,month){
    float sum;
    for (int i=0; i<years.length; i++){
        sum += matrix[i][month-1];
    }
    float average_month = sum/years.length;
    return average_month;
}

//total monthly standardDeviation function
function t_m_std(matrix, month){
    sqDiff = 0;
    for(int i=0; i<years.length; i++){
        sqDiff += ((matrix[i][month-1] - m_mean(matrix,month))
                * (matrix[i][month-1]  - m_mean(matrix,month)));
    }
    variance = sqDiff/years.length ;
    return sqrt(variance);
}

//monthly standardDeviation mean function
function mean_std(matrix){
    stdvs = 0;
    for(int i=0; i<months.length; i++){
        stdvs  += t_m_std(matrix, i+1);
    }
    mean = stdvs/months.length ;
    return mean;
}

//Draw axes, title and legend
fill(255);
strokeWeight(1);
//stroke(255);
line(20, vscale, 20, height-20);
line(20, height-20, width-hscale, height-20);
textSize(size_multip/2)
text("Monthly Max Temperatures Variations in Milan (Italy) period 1990-2018 (\u00B0C)", width/3, 30);
textSize(size_multip/2.5)
fill(120,50,255);
text("Years 2015 - 2018 (\u00B0C)", width/2, (height/2)+20);
fill(200,100,150)
text("Years 2007 - 2014 (\u00B0C)", width/2, (height/2)+40);
fill(200,100,60);
text("Years 1998 - 2006 (\u00B0C)", width/2, (height/2)+60);
fill(250,230,0);
text("Years 1990 - 1997 (\u00B0C)", width/2, (height/2)+80);



//Vertical labels (temperature 0-45)
fill(200);
for(int i = 0; i < 50; i = i+5){
    text(i, 2, height - 20 - (i*vscale));
}

// Counting number of months per temperature range
for (int i=0; i<years.length; i++){
    for(int j=0; j<months.length; j++){
        if(data[i][j]<8.0){
            temp_range1++
        }else if(data[i][j]<16.0){
            temp_range2++
        }else if(data[i][j]<24.0){
            temp_range3++
        }else if(data[i][j]<32.0){
            temp_range4++
        }else if(data[i][j]<40.0){
            temp_range5++
        }
    }
}

// Assign results to array
int [] temp_interval_counts={temp_range1,temp_range2,temp_range3,
                    temp_range4,temp_range5};

// Draw Temp ranges
fill(255);
text (" Temp ranges(°C)   " + "Nr months", 40, 35);
text ("      0-7 degrees        "+ temp_interval_counts[0], 40, 55);
text ("    8-15 degrees        "+ temp_interval_counts[1], 40, 75);
text (" 16-23 degrees        "+ temp_interval_counts[2], 40, 95);
text (" 24-31 degrees        "+ temp_interval_counts[3], 40, 115);
text (" 32-39 degrees        "+ temp_interval_counts[4], 40, 135);


//Draw temperature data
strokeWeight();
noFill();

for (int i=0; i<years.length; i++){
    f = 360/years.length*i;
    //stroke(255-f, f-50, 255/5-f);
    stroke(f+80, f-50, 255-f);
    beginShape();
    for(int j=0; j<months.length; j++){
        vertex(((j+1)*hscale*30), height - 20 - (vscale*data[i][j]));
    }
    endShape();
}

//Horizontal labels and Standard Dev
noStroke();
for(int i = 0; i < months.length; i++){
    fill(200);
    rect(i*29.8*hscale + 15*hscale +20
         ,height-20, 30, -((t_m_std(data,i+1))*(size_multip/3.33)));
    text(months[i], i*30*hscale + 15*hscale + 20, height-5);
}

fill(255);
text("Standard Deviation of Temperatures", 130*hscale + 15*hscale -80, height-50);
text("Mean stdvs: "+ mean_std(data), 130*hscale + 15*hscale + 150, height-50);
