// TODO
import { MLPlot } from "../index";
var mlplot = new MLPlot({
    globalFontSize: 14,
    legendFontSize: 12,
    fontSizeAxis: 12,
    title: "MLPlot",
    w: 1024,
    h: 600,
    xLabel: "Days",
    yLabel: "Count",
    legendPos: "nw",
    legendWidth: 220,
    globalLineWidth: 1
});
var x = [1, 2, 3, 4, 5, 6, 7];
var y = [4, 3, 6, 2, 7, 6, 9];
mlplot.linePlot(x, y, "red", "solid", "dot", "myname", 4, null);
mlplot.title = "demo";
mlplot.autoAxis();
document.body.innerHTML = mlplot.renderIMG();
