// canvas
size(650,250);
background(255);
fill(0);

// arrays and features
int[] budget = {408,
                1752,
                4364,
                5618,
                1437,
                1275,
                421,
                74,
                213,
                73,
                1219,
                390,
                766};
String[] sectors = {"General public services",
                    "Public order and safety",
                    "Education",
                    "Health",
                    "Social security and welfare",
                    "Housing and community amenities",
                    "Recreation and culture",
                    "Fuel and energy",
                    "Agriculture, forestry, fishing and hunting",
                    "Mining and mineral resources other than fuels",
                    "Transport and communications",
                    "Other economic affairs",
                    "Other purposes"};

// displaying title
int k=20;
text(" General Government Sector Expenses ($million)", k, k*1.5);
textSize(10);

// duplicating budget array
int[] budgets = budget.map((x) => x);
// sorting descending budgets values
function sortEggsInNest(a, b) {
  return a > b ? -1 : b > a ? 1 : 0;
}
budgets.sort(sortEggsInNest);

// creating an array of sorted ordered sector by budget
// deleting budget array content and sectors list
ArrayList<String> sector =new ArrayList<String>();
c=0;
while (c<=116){
    for(int i=0;i<13;i++){
        c ++;
        if (budget[i]>=max(budget)) {
            budget.splice(i,1);
            sector.add(sectors[i]);
            sectors.splice(i,1);
        }
    }
}
sector.add(sectors[0]);

// displaying sector names and budgets
for(int i=0;i<13;i++){
    text(sector.get(i),40,(i*12)+60);
    text(budgets[i],270,(i*12)+60);
}

// calcultating and displaying the sum of budgets
function sumBudgets(int[] budgets){
    int sum;
    for(int i=0;i<budgets.length;i++){
        sum += budgets[i];
    }
    return sum
}
textSize(11);
line(200,208,300,208);
sum = sumBudgets(budgets);
text(sum,270,220);
    
// pieChart heatmap function
void pieChart(float diameter, int[] data) {
  noStroke();
  float lastAngle = 0;
  for (int i = 0; i < data.length; i++) {
    f = 360/budgets.length*i;
    fill(255-f, f, 255/5-f);
    arc((width/2)+120, 
        height/2, 
        diameter, 
        diameter, 
        lastAngle, 
        lastAngle+radians(data[i]*360/sum));
    rect(20,(i*12)+50,8,8)
    lastAngle += radians(data[i]*360/sum);
  }
}

// displaying pieChart (pie diameter, data)
pieChart(200,budgets);
