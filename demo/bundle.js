'use strict';

var MLPlot = /** @class */ (function () {
    function MLPlot(data) {
        /* MODEL */
        this.minX = -5;
        this.minY = -5;
        this.maxX = 50;
        this.maxY = 50;
        this.minC = -2.3;
        this.maxC = 2.7;
        this.xTicks = [];
        this.yTicks = [];
        this.cTicks = [];
        this.tenPowerX = 0;
        this.tenPowerY = 0;
        this.tenPowerC = 0;
        this.logX = false;
        this.logY = false;
        this.logC = false;
        this.layers = {}; // (orig: HashMap<Integer, HashSet<Shape>>)
        /* WORLD */
        this.w = 800;
        this.h = 600;
        this.globalLineWidth = 1;
        this.globalFont = "helvetica";
        this.globalFontSize = 14;
        this.globalColor = "black";
        this.globalBGColor = "white";
        this.marginLeft = 70;
        this.marginTop = 30;
        this.marginRight = 85;
        this.marginBottom = 80;
        this.title = "Untitled";
        this.titlelDist = 11;
        /* AXIS */
        this.xLabel = "X";
        this.yLabel = "Y";
        this.xTickLabels = [];
        this.yTickLabels = [];
        this.cTickLabels = [];
        this.xTickLabelRotation = 0;
        this.tickLength = 5;
        this.fontSizeAxis = 14;
        this.xLabelDist = 40;
        this.yLabelDist = 40;
        this.axisLabelDist = 3;
        /* LEGEND */
        this.legendOn = false;
        this.legend = []; // <= TODO	 (List<List<Shape>>)
        this.legendWidth = 120;
        this.legendProp = 0.3;
        this.legendMargin = 5;
        this.legendFontSize = 14;
        this.legendPos = "NE";
        /* COLORBAR */
        this.colorBarOn = false;
        this.colorBarDist = 20;
        this.colorBarWidth = 20;
        this.colorMap = new ColorMap("winter");
        /* GRID */
        this.gridOn = true;
        this.postGrid = false;
        this.minorTicks = 0;
        this.globalFontSize = data.globalFontSize;
        this.legendFontSize = data.legendFontSize;
        this.fontSizeAxis = data.fontSizeAxis;
        this.title = data.title;
        this.w = data.w;
        this.h = data.h;
        this.xLabel = data.xLabel;
        this.yLabel = data.yLabel;
        this.legendPos = data.legendPos;
        this.legendWidth = data.legendWidth;
        this.globalLineWidth = data.globalLineWidth;
    }
    MLPlot.prototype.toSVG = function () {
        this.autoAxis();
        var svg = "";
        svg += "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" baseProfile=\"full\" width=\"" + this.w + "\" height=\"" + this.h + "\" >\n";
        var refs = {};
        for (var layerkey in this.layers)
            if (this.layers.hasOwnProperty(layerkey)) {
                var layer = this.layers[layerkey];
                for (var n = 0; n < layer.length; n++) {
                    var shape = layer[n];
                    var srefs = shape.getRefs();
                    if (srefs)
                        for (var refkey in srefs)
                            if (srefs.hasOwnProperty(refkey))
                                refs[refkey] = srefs[refkey];
                }
            }
        if (this.legend)
            for (var n = 0; n < this.legend.length; n++)
                for (var i = 0; i < this.legend[n].length; i++) {
                    var shape = this.legend[n][i];
                    var srefs = shape.getRefs();
                    if (srefs)
                        for (var refkey in srefs)
                            if (srefs.hasOwnProperty(refkey))
                                refs[refkey] = srefs[refkey];
                }
        svg += "<defs>";
        for (var refkey in refs)
            if (refs.hasOwnProperty(refkey))
                svg += refs[refkey];
        svg += "</defs><rect width=\"" + this.w + "\" height=\"" + this.h + "\" fill=\"white\" />";
        var l = []; //		List<Integer> l = new ArrayList<Integer>();
        for (var layerkey in this.layers)
            if (this.layers.hasOwnProperty(layerkey))
                l.push(layerkey);
        l.sort();
        if (!this.postGrid && (this.gridOn || this.minorTicks > 0))
            svg += this.svgGrid();
        for (var n = 0; n < l.length; n++) {
            var layer = this.layers[l[n]];
            for (var i = 0; i < layer.length; i++) {
                var shape = layer[i];
                svg += shape.toSVG(this) + "\n";
            }
        }
        if (this.postGrid && (this.gridOn || this.minorTicks > 0))
            svg += this.svgGrid();
        svg += this.svgBox();
        if (this.legendOn && this.legend != null && this.legend.length > 0)
            svg += this.svgLegend();
        if (this.colorBarOn)
            svg += this.svgColorBar();
        svg += this.svgAxis();
        svg += this.svgTitle();
        svg += "</svg>";
        return svg;
    };
    MLPlot.prototype.svgGrid = function () {
        var svg = "";
        var color = "black";
        var linewidth = this.globalLineWidth * 0.75;
        if (this.gridOn) {
            for (var n = 0; n < this.xTicks.length; n++) {
                var x = this.m2wx(this.xTicks[n]);
                if (x > this.marginLeft && x < this.w - this.marginRight) {
                    svg += "<polyline  fill=\"none\" style=\"stroke-dasharray: " + linewidth + ", " + 2 * linewidth + "; stroke: " + color + "; stroke-width: " + linewidth + "\" points=\"" + x + "," + this.marginTop + " " + x + "," + (this.h - this.marginBottom) + "\" />";
                }
                if (this.minorTicks > 0 && n < this.xTicks.length - 1) {
                    var step = (this.xTicks[n + 1] - this.xTicks[n]) / (this.minorTicks + 1);
                    for (var i = 1; i <= this.minorTicks; i++) {
                        x = this.m2wx(this.xTicks[n] + i * step);
                        if (x > this.marginLeft && x < this.w - this.marginRight) {
                            svg += "<polyline  fill=\"none\" style=\"stroke-dasharray: " + linewidth + ", " + 2 * linewidth + "; "
                                + "stroke: " + color + "; stroke-width: " + linewidth + "\" points=\"" + x + "," + this.marginTop + " " + x + "," + (this.h - this.marginBottom) + "\" />";
                        }
                    }
                }
            }
            for (var n = 0; n < this.yTicks.length; n++) {
                var y = this.m2wy(this.yTicks[n]);
                if (y > this.marginTop && y < this.h - this.marginBottom) {
                    svg += "<polyline  fill=\"none\" style=\"stroke-dasharray: " + linewidth + ", " + 2 * linewidth + "; stroke: " + color + "; stroke-width: " + linewidth + "\" points=\"" + this.marginLeft + "," + y + " " + (this.w - this.marginRight) + "," + y + "\" />";
                }
                if (this.minorTicks > 0 && n < this.yTicks.length - 1) {
                    var step = (this.yTicks[n + 1] - this.yTicks[n]) / (this.minorTicks + 1);
                    for (var i = 1; i <= this.minorTicks; i++) {
                        y = this.m2wy(this.yTicks[n] + i * step);
                        if (y > this.marginTop && y < this.h - this.marginBottom) {
                            svg += "<polyline  fill=\"none\" style=\"stroke-dasharray: " + linewidth + ", " + 1 * linewidth + "; stroke: " + color + "; stroke-width: " + linewidth + "\" points=\"" + this.marginLeft + "," + y + " " + (this.w - this.marginRight) + "," + y + "\" />";
                        }
                    }
                }
            }
        }
        return svg;
    };
    MLPlot.prototype.svgAxis = function () {
        var svg = "<g shape-rendering=\"crispEdges\">";
        var color = this.globalColor;
        var linewidth = this.globalLineWidth;
        // X:
        for (var n = 0; n < this.xTicks.length; n++) {
            if (this.xTicks[n] >= this.minX && this.xTicks[n] <= this.maxX && this.xTickLabels != null && this.xTickLabels.length > n && this.xTickLabels[n] != null) {
                var x = this.m2wx(this.xTicks[n]);
                var y1 = (this.h - this.marginBottom - this.tickLength);
                var y2 = (this.h - this.marginBottom);
                svg += "<line x1=\"" + x + "\" x2=\"" + x + "\" y1=\"" + y1 + "\" y2=\"" + y2 + "\" stroke=\"" + color + "\" stroke-width=\"" + linewidth + "\" />";
                if (this.xTickLabelRotation > 0) {
                    svg += "<text transform=\"rotate(" + this.xTickLabelRotation + "," + x + "," + (y2 + this.axisLabelDist + this.fontSizeAxis / 2) + ")\" font-family=\"" + this.globalFont + "\" font-size=\"" + this.fontSizeAxis + "\" text-anchor=\"start\" dy=\"" + (0.8 * this.fontSizeAxis + this.axisLabelDist) + "\" x=\"" + x + "\" y=\"" + y2 + "\">" + this.xTickLabels[n] + "</text>";
                }
                else if (this.xTickLabelRotation < 0) {
                    svg += "<text transform=\"rotate(" + this.xTickLabelRotation + "," + x + "," + (y2 + this.axisLabelDist + this.fontSizeAxis / 2) + ")\" font-family=\"" + this.globalFont + "\" font-size=\"" + this.fontSizeAxis + "\" text-anchor=\"end\" dy=\"" + (0.8 * this.fontSizeAxis + this.axisLabelDist) + "\" x=\"" + x + "\" y=\"" + y2 + "\">" + this.xTickLabels[n] + "</text>";
                }
                else {
                    svg += "<text font-family=\"" + this.globalFont + "\" font-size=\"" + this.fontSizeAxis + "\" text-anchor=\"middle\" dy=\"" + (0.8 * this.fontSizeAxis + this.axisLabelDist) + "\" x=\"" + x + "\" y=\"" + y2 + "\">" + this.xTickLabels[n] + "</text>";
                }
                y1 = (this.marginTop);
                y2 = (this.marginTop + this.tickLength);
                svg += "<line x1=\"" + x + "\" x2=\"" + x + "\" y1=\"" + y1 + "\" y2=\"" + y2 + "\" stroke=\"" + color + "\" stroke-width=\"" + linewidth + "\" />";
                // 					x = (double) ((float) x);
            }
        }
        if (this.tenPowerX != 0) {
            svg += "<text font-family=\"" + this.globalFont + "\" font-size=\"" + this.fontSizeAxis + "\" text-anchor=\"left\"  "
                + "x=\"" + (this.w - this.marginRight + 10) + "\" y=\"" + (this.h - this.marginBottom) + "\"><tspan>x10</tspan>";
            if (this.tenPowerX != 1) {
                svg += "<tspan dy=\"" + (-this.fontSizeAxis) + "\">" + (this.tenPowerX == toint(this.tenPowerX) ? ("" + toint(this.tenPowerX)) : ("" + this.tenPowerX)) + "</tspan>";
            }
            svg += "</text>";
        }
        // Y:
        for (var n = 0; n < this.yTicks.length; n++) {
            if (this.yTicks[n] >= this.minY && this.yTicks[n] <= this.maxY && this.yTickLabels != null && this.yTickLabels.length > n && this.yTickLabels[n] != null) {
                var y = this.m2wy(this.yTicks[n]);
                var x1 = this.marginLeft;
                var x2 = x1 + this.tickLength;
                svg += "<line x1=\"" + x1 + "\" x2=\"" + x2 + "\" y1=\"" + y + "\" y2=\"" + y + "\" stroke=\"" + color + "\" stroke-width=\"" + linewidth + "\" />";
                svg += "<text font-family=\"" + this.globalFont + "\" font-size=\"" + this.fontSizeAxis + "\" text-anchor=\"end\" dy=\"" + (this.fontSizeAxis / 3.3) + "\" x=\"" + (x1 - this.axisLabelDist) + "\" y=\"" + y + "\">" + this.yTickLabels[n] + "</text>";
                x1 = (this.w - this.marginRight);
                x2 = x1 - this.tickLength;
                svg += "<line x1=\"" + x1 + "\" x2=\"" + x2 + "\" y1=\"" + y + "\" y2=\"" + y + "\" stroke=\"" + color + "\" stroke-width=\"" + linewidth + "\" />";
                // 					y = (double) ((float) y);
            }
        }
        if (this.tenPowerY != 0) {
            svg += "<text font-family=\"" + this.globalFont + "\" font-size=\"" + this.fontSizeAxis + "\" text-anchor=\"left\"  "
                + "x=\"" + (this.marginLeft) + "\" y=\"" + (this.marginTop - 5) + "\"><tspan>x10</tspan>";
            if (this.tenPowerY != 1) {
                svg += "<tspan dy=\"" + (-this.fontSizeAxis) + "\">" + (this.tenPowerY == toint(this.tenPowerY) ? ("" + toint(this.tenPowerY)) : ("" + this.tenPowerY)) + "</tspan>";
            }
            svg += "</text>";
        }
        // Z:
        if (this.colorBarOn) {
            for (var n = 0; n < this.cTicks.length; n++) {
                if (this.cTicks[n] >= this.minC && this.cTicks[n] <= this.maxC && this.cTickLabels != null && this.cTickLabels.length > n && this.cTickLabels[n] != null) {
                    var y = this.marginTop + (1 - (this.cTicks[n] - this.minC) / (this.maxC - this.minC)) * (this.h - (this.marginTop + this.marginBottom));
                    var x1 = this.w - this.marginRight + this.colorBarDist + this.colorBarWidth;
                    var x2 = x1 - this.tickLength;
                    svg += "<line x1=\"" + x1 + "\" x2=\"" + x2 + "\" y1=\"" + y + "\" y2=\"" + y + "\" stroke=\"" + color + "\" stroke-width=\"" + linewidth + "\" />";
                    svg += "<text font-family=\"" + this.globalFont + "\" font-size=\"" + this.fontSizeAxis + "\" text-anchor=\"start\" dy=\"" + (this.fontSizeAxis / 3.3) + "\" x=\"" + (x1 + this.axisLabelDist) + "\" y=\"" + y + "\">" + this.cTickLabels[n] + "</text>";
                    // 						y = (double) ((float) y);
                }
            }
        }
        svg += "</g>";
        return svg;
    };
    MLPlot.prototype.svgBox = function () {
        var style = "fill:rgb(255,255,255);";
        return "<g shape-rendering=\"crispEdges\"> <rect x=\"" + 0 + "\" y=\"" + 0 + "\" width=\"" + this.marginLeft + "\" height=\"" + this.h + "\" style=\"" + style + "\" /><rect x=\"" + this.marginLeft + "\" y=\"" + 0 + "\" width=\"" + (this.w - this.marginLeft) + "\" height=\"" + this.marginTop + "\" style=\"" + style + "\" /><rect x=\"" + this.marginLeft + "\" y=\"" + (this.h - this.marginBottom) + "\" width=\"" + (this.w - this.marginLeft) + "\" height=\"" + this.marginBottom + "\" style=\"" + style + "\" /><rect x=\"" + (this.w - this.marginRight) + "\" y=\"" + this.marginTop + "\" width=\"" + this.marginRight + "\" height=\"" + (this.h - (this.marginBottom + this.marginTop)) + "\" style=\"" + style + "\" /><rect fill=\"none\" stroke=\"" + this.globalColor + "\" stroke-width=\"" + this.globalLineWidth + "\" x=\"" + this.marginLeft + "\" y=\"" + this.marginTop + "\" width=\"" + (this.w - (this.marginLeft + this.marginRight)) + "\" height=\"" + (this.h - (this.marginTop + this.marginBottom)) + "\"  /></g>";
    };
    MLPlot.prototype.svgTitle = function () {
        var svg = "";
        var x = this.marginLeft + (this.w - (this.marginLeft + this.marginRight)) / 2;
        var y = this.marginTop - this.titlelDist;
        svg += "<text font-size=\"" + this.globalFontSize + "\" font-family=\"" + this.globalFont + "\" text-anchor=\"middle\" x=\"" + x + "\" y=\"" + y + "\">" + this.title + "</text>";
        x = this.marginLeft + (this.w - (this.marginLeft + this.marginRight)) / 2;
        y = this.h - this.marginBottom;
        svg += "<text dy=\"" + (0.8 * this.fontSizeAxis + this.xLabelDist) + "\" font-size=\"" + this.globalFontSize + "\" font-family=\"" + this.globalFont + "\" text-anchor=\"middle\" x=\"" + x + "\" y=\"" + y + "\">" + this.xLabel + "</text>";
        x = this.marginLeft - this.yLabelDist;
        y = (this.h - (this.marginBottom + this.marginTop)) / 2 + this.marginTop;
        svg += "<text dy=\"" + (this.fontSizeAxis / 3.3) + "\" transform=\"rotate(-90," + x + "," + y + ")\" font-size=\"" + this.globalFontSize + "\" font-family=\"" + this.globalFont + "\" text-anchor=\"middle\" x=\"" + x + "\" y=\"" + y + "\">" + this.yLabel + "</text>";
        return svg;
    };
    MLPlot.prototype.svgLegend = function () {
        var svg = "";
        var dx = 0, dy = 0;
        if ("nw" === this.legendPos.toLowerCase()) {
            dx = this.marginLeft + this.legendMargin;
            dy = this.marginTop + this.legendMargin;
        }
        else if ("ne" === this.legendPos.toLowerCase()) {
            dx = this.w - this.marginRight - this.legendMargin - this.legendWidth;
            dy = this.marginTop + this.legendMargin;
        } //TODO other directions
        var lineheight = 20;
        svg += "<rect  opacity=\"0.85\" shape-rendering=\"crispEdges\" stroke-width=\"" + this.globalLineWidth + "\" stroke=\"" + this.globalColor + "\" fill=\"white\" x=\"" + dx + "\" y=\"" + dy + "\" width=\"" + this.legendWidth + "\" height=\"" + this.legend.length * lineheight + "\" />";
        var that = this;
        var _loop_1 = function (n) {
            var e = this_1.legend[n]; // e is array of shapes
            var plotcontext = {
                m2wx: function (mx) {
                    return mx * that.legendProp * that.legendWidth + dx;
                },
                m2wy: function (my) {
                    return lineheight * (n + my) + dy;
                },
                getColor: function (z) {
                    return that.getColor(z);
                }
            };
            for (var i = 0; i < e.length; i++) {
                svg += e[i].toSVG(plotcontext);
            }
        };
        var this_1 = this;
        for (var n = 0; n < this.legend.length; n++) {
            _loop_1(n);
        }
        return svg;
    };
    MLPlot.prototype.svgColorBar = function () {
        var svg = "";
        var x = this.w - this.marginRight + this.colorBarDist;
        var y = this.marginTop;
        var w = this.colorBarWidth;
        var h = this.h - (this.marginBottom + this.marginTop);
        var N = 50;
        for (var n = 0; n <= N; n++) {
            var z = this.minC + (1 - n / (N + 1)) * (this.maxC - this.minC);
            svg += "<rect shape-rendering=\"crispEdges\" stroke-width=\"" + this.globalLineWidth + "\" stroke=\"none\" fill=\"" + this.getColor(z) + "\" x=\"" + x + "\" y=\"" + (y + (n / (N + 1)) * h) + "\" width=\"" + w + "\" height=\"" + (h / (N + 1)) + "\" />";
        }
        svg += "<rect shape-rendering=\"crispEdges\" stroke-width=\"" + this.globalLineWidth + "\" stroke=\"" + this.globalColor + "\" fill=\"none\"  x=\"" + x + "\" y=\"" + y + "\" width=\"" + w + "\" height=\"" + h + "\" />";
        return svg;
    };
    MLPlot.prototype.imagesc = function (m) {
        for (var x = 0; x < m.length; x++)
            for (var y = 0; y < m[0].length; y++) {
                this.add(new PadShape({ x: x - 0.5, y: y - 0.5, w: 1, h: 1, z: m[toint(x)][toint(y)] }), 1);
            }
        this.colorBarOn = true;
        this.fit(0.03, 0.03, 0.03);
    };
    MLPlot.prototype.getColor = function (z) {
        var v = (z - this.minC) / (this.maxC - this.minC); //*0.9+0.05;
        // 			return "red";
        return color2hex(this.colorMap.get(v));
    };
    MLPlot.prototype.linePlot = function (x, y, color, style, symbol, name, markersize, errplus) {
        if (!y) {
            y = x;
            x = [];
            for (var n = 0; n < y.length; n++)
                x[n] = n;
        }
        color = color || "blue";
        style = style || "solid";
        symbol = symbol || "circleFilled";
        markersize = markersize || 3;
        this.add(new LineShape({ x: x, y: y, color: color, linewidth: this.globalLineWidth, style: style }), 2);
        var erw = (max(x) - min(x)) / x.length * 0.4;
        for (var n = 0; n < x.length; n++) {
            if (errplus) {
                this.add(new LineShape({ x: [x[n], x[n]], y: [y[n] - errplus[n], y[n] + errplus[n]], color: "gray", linewidth: this.globalLineWidth, style: "solid" }), 1);
                this.add(new LineShape({ x: [x[n] - erw, x[n] + erw], y: [y[n] + errplus[n], y[n] + errplus[n]], color: "gray", linewidth: this.globalLineWidth, style: "solid" }), 1);
                this.add(new LineShape({ x: [x[n] - erw, x[n] + erw], y: [y[n] - errplus[n], y[n] - errplus[n]], color: "gray", linewidth: this.globalLineWidth, style: "solid" }), 1);
            }
            this.add(new MarkerShape({ x: x[n], y: y[n], color: color, diameter: markersize, symbol: symbol, linewidth: this.globalLineWidth }), 3);
        }
        if (name != null) {
            var v = [];
            v.push(new LineShape({ x: [0.1, 0.9], y: [0.5, 0.5], color: color, linewidth: this.globalLineWidth, style: style }));
            v.push(new MarkerShape({ x: 0.5, y: 0.5, color: color, diameter: markersize, symbol: symbol, linewidth: this.globalLineWidth }));
            v.push(new TextShape({ x: 1, y: 0.5, txt: name, font: this.globalFont, fontsize: this.legendFontSize }));
            this.legend.push(v);
            this.legendOn = true;
        }
        this.fit();
        return this;
    };
    MLPlot.prototype.setModelBounds = function (minx, maxx, miny, maxy, minc, maxc) {
        // 			alert(minx+","+ maxx+","+ miny+","+ maxy+","+ minc+","+ maxc);
        this.minX = minx;
        this.maxX = maxx;
        this.minY = miny;
        this.maxY = maxy;
        this.minC = minc;
        this.maxC = maxc;
    };
    MLPlot.prototype.add = function (shape, layer) {
        var s = this.layers[layer];
        if (!s) {
            this.layers[layer] = [];
            s = this.layers[layer];
        }
        s.push(shape);
    };
    MLPlot.prototype.renderIMG = function () {
        return "<img class=\"mlplot\" src=\"data:image/svg+xml;base64," + Base64.encode(this.toSVG()) + "\" />";
    };
    MLPlot.prototype.fit = function (padX, padY, padC) {
        padX = padX || 0.07;
        padY = padY || 0.07;
        padC = padC || 0.07;
        var minx = Number.MAX_VALUE, maxx = -Number.MAX_VALUE, miny = minx, maxy = maxx, minc = minx, maxc = maxx;
        for (var layerkey in this.layers) {
            if (this.layers.hasOwnProperty(layerkey)) {
                var layer = this.layers[layerkey];
                for (var n = 0, l = layer.length; n < l; n++) {
                    var shape = layer[n];
                    var xlim = shape.getXLim();
                    var ylim = shape.getYLim();
                    var clim = shape.getCLim();
                    if (xlim[0] < minx)
                        minx = xlim[0];
                    if (xlim[1] > maxx)
                        maxx = xlim[1];
                    if (ylim[0] < miny)
                        miny = ylim[0];
                    if (ylim[1] > maxy)
                        maxy = ylim[1];
                    if (clim[0] < minc)
                        minc = clim[0];
                    if (clim[1] > maxc)
                        maxc = clim[1];
                }
            }
        }
        var dx = padX * (maxx - minx);
        var dy = padY * (maxy - miny);
        var dc = padC * (maxc - minc);
        this.setModelBounds(minx - dx, maxx + dx, miny - dy, maxy + dy, minc - dc, maxc + dc);
    };
    MLPlot.prototype.autoAxis = function () {
        // X:
        var tp = Math.pow(10, this.tenPowerX);
        if (this.xTicks.length == 0) {
            if (!this.logX) {
                this.xTicks = loose_label(this.minX / tp, this.maxX / tp, 10);
            }
            else {
                this.xTicks = loose_label(log10(this.minX) / tp, log10(this.maxX) / tp, 10);
                for (var n = 0; n < this.xTicks.length; n++)
                    this.xTicks[n] = Math.pow(10, this.xTicks[n]);
            }
            for (var n = 0; n < this.xTicks.length; n++)
                this.xTicks[n] *= tp;
        }
        if (this.xTickLabels.length == 0) {
            this.xTickLabels = [];
            for (var n = 0; n < this.xTicks.length; n++) {
                var val = this.xTicks[n] / tp;
                var label = null;
                if (val == toint(val))
                    label = "" + toint(val);
                else
                    label = "" + nf(val);
                this.xTickLabels[n] = label;
            }
        }
        // Y:
        tp = Math.pow(10, this.tenPowerY);
        if (this.yTicks.length == 0) {
            if (!this.logY) {
                this.yTicks = loose_label(this.minY / tp, this.maxY / tp, 10);
            }
            else {
                this.yTicks = loose_label(log10(this.minY) / tp, log10(this.maxY) / tp, 10);
                for (var n = 0; n < this.yTicks.length; n++)
                    this.yTicks[n] = Math.pow(10, this.yTicks[n]);
            }
            for (var n = 0; n < this.yTicks.length; n++)
                this.yTicks[n] *= tp;
        }
        if (this.yTickLabels.length == 0) {
            this.yTickLabels = [];
            for (var n = 0; n < this.yTicks.length; n++) {
                var val = this.yTicks[n] / tp;
                var label = null;
                if (val == toint(val))
                    label = "" + toint(val);
                else
                    label = "" + nf(val);
                this.yTickLabels[n] = label;
            }
        }
        // C:
        tp = Math.pow(10, this.tenPowerC);
        if (this.cTicks.length == 0) {
            if (!this.logC) {
                this.cTicks = loose_label(this.minC / tp, this.maxC / tp, 10);
            }
            else {
                this.cTicks = loose_label(log10(this.minC) / tp, log10(this.maxC) / tp, 10);
                for (var n = 0; n < this.cTicks.length; n++)
                    this.cTicks[n] = Math.pow(10, this.cTicks[n]);
            }
            for (var n = 0; n < this.cTicks.length; n++)
                this.cTicks[n] *= tp;
        }
        if (this.cTickLabels.length == 0) {
            this.cTickLabels = [];
            for (var n = 0; n < this.cTicks.length; n++) {
                var val = this.cTicks[n] / tp;
                var label = null;
                if (val == toint(val))
                    label = "" + toint(val);
                else
                    label = "" + nf(val);
                this.cTickLabels[n] = label;
            }
        }
    };
    MLPlot.prototype.m2wx = function (mx) {
        return this.logX ? ((((this.w - (this.marginLeft + this.marginRight)) / (log10(this.maxX) - log10(this.minX))) * (log10(mx) - log10(this.minX))) + this.marginLeft) : ((((this.w - (this.marginLeft + this.marginRight)) / (this.maxX - this.minX)) * (mx - this.minX)) + this.marginLeft);
    };
    MLPlot.prototype.m2wy = function (my) {
        return this.logY ? (this.h - (((this.h - (this.marginTop + this.marginBottom)) / (log10(this.maxY) - log10(this.minY))) * (log10(my) - log10(this.minY))) - this.marginBottom) : (this.h - (((this.h - (this.marginTop + this.marginBottom)) / (this.maxY - this.minY)) * (my - this.minY)) - this.marginBottom);
    };
    return MLPlot;
}());
var ColorMap = /** @class */ (function () {
    function ColorMap(name) {
        this.map = [];
        if (name === "jet")
            this.adapt([0, 0, 0, 0.5625, 0.10938, 0, 0, 0.9375, 0.35938, 0, 0.9375, 1, 0.60938, 0.9375, 1, 0.0625, 0.85938, 1, 0.0625, 0, 1, 0.5, 0, 0], 255);
        else if (name === "hsv")
            this.adapt([0, 1, 0, 0, 0.15625, 1, 0.84375, 0, 0.17188, 1, 0.9375, 0, 0.32813, 0.125, 1, 0, 0.34375, 0.03125, 1, 0, 0.5, 0, 1, 0.90625, 0.65625, 0, 0.15625, 1, 0.67188, 0, 0.0625, 1, 0.82813, 0.875, 0, 1, 0.84375, 0.96875, 0, 1, 1, 1, 0, 0.09375], 255);
        else if (name === "hot")
            this.adapt([0, 0.041667, 0, 0, 0.35938, 0.95833, 0, 0, 0.73438, 1, 0.95833, 0, 1, 1, 1, 1], 255);
        else if (name === "gray")
            this.adapt([0, 0, 0, 0, 1, 255, 255, 255]);
        else if (name === "summer")
            this.adapt([0, 0, 0.5, 0.4, 1, 1, 1, 0.4], 255);
        else if (name === "winter")
            this.adapt([0, 0, 0, 1, 1, 0, 1, 0.5], 255);
        else if (name === "spring")
            this.adapt([0, 255, 0, 255, 1, 255, 255, 0]);
        else if (name === "autumn")
            this.adapt([0, 255, 0, 0, 1, 255, 255, 0]);
        else if (name === "cool")
            this.adapt([0, 0, 255, 255, 1, 255, 0, 255]);
        else if (name === "pink")
            this.adapt([0.0, 30, 0, 0, 0.0158, 50, 26, 26, 0.0317, 64, 37, 37, 0.0476, 75, 45, 45, 0.0634, 85, 52, 52, 0.0793, 94, 59, 59, 0.0952, 102, 64, 64, 0.1111, 110, 69, 69, 0.1269, 117, 74, 74, 0.1428, 123, 79, 79, 0.1587, 130, 83, 83, 0.1746, 136, 87, 87, 0.1904, 141, 91, 91, 0.2063, 147, 95, 95, 0.2222, 152, 98, 98, 0.238, 157, 102, 102, 0.2539, 162, 105, 105, 0.2698, 167, 108, 108, 0.2857, 172, 111, 111, 0.3015, 176, 114, 114, 0.3174, 181, 117, 117, 0.3333, 185, 120, 120, 0.3492, 189, 123, 123, 0.365, 194, 126, 126, 0.3809, 195, 132, 129, 0.3968, 197, 138, 131, 0.4126, 199, 144, 134, 0.4285, 201, 149, 136, 0.4444, 202, 154, 139, 0.4603, 204, 159, 141, 0.4761, 206, 164, 144, 0.492, 207, 169, 146, 0.5079, 209, 174, 148, 0.5238, 211, 178, 151, 0.5396, 212, 183, 153, 0.5555, 214, 187, 155, 0.5714, 216, 191, 157, 0.5873, 217, 195, 160, 0.6031, 219, 199, 162, 0.619, 220, 203, 164, 0.6349, 222, 207, 166, 0.6507, 223, 211, 168, 0.6666, 225, 215, 170, 0.6825, 226, 218, 172, 0.6984, 228, 222, 174, 0.7142, 229, 225, 176, 0.7301, 231, 229, 178, 0.746, 232, 232, 180, 0.7619, 234, 234, 185, 0.7777, 235, 235, 191, 0.7936, 237, 237, 196, 0.8095, 238, 238, 201, 0.8253, 240, 240, 206, 0.8412, 241, 241, 211, 0.8571, 243, 243, 216, 0.873, 244, 244, 221, 0.8888, 245, 245, 225, 0.9047, 247, 247, 230, 0.9206, 248, 248, 234, 0.9365, 250, 250, 238, 0.9523, 251, 251, 243, 0.9682, 252, 252, 247, 0.9841, 254, 254, 251, 1.0, 255, 255, 255]);
        else if (name === "copper")
            this.adapt([0, 0, 0, 0, 0.78125, 0.97222, 0.6076, 0.38694, 0.79688, 0.99206, 0.62, 0.39484, 1, 1, 0.7812, 0.4975], 255);
        else if (name === "bone")
            this.adapt([0, 0, 0, 0.0052083, 0.35938, 0.30556, 0.30556, 0.42535, 0.73438, 0.63889, 0.75868, 0.76389, 1, 1, 1, 1], 255);
    }
    ColorMap.prototype.adapt = function (data, factor) {
        factor = factor || 1;
        this.map = [];
        for (var n = 0; n < data.length - 3; n += 4)
            this.map.push({ p: data[n], c: [factor * data[n + 1], factor * data[n + 2], factor * data[n + 3]] });
    };
    ColorMap.prototype.put = function (pos, color) {
        this.map.push({ p: pos, c: color }); // TODO: replace if exists
        this.map.sort(function (a, b) { return a.p == b.p ? 0 : a.p < b.p ? -1 : 1; });
    };
    ColorMap.prototype.get = function (pos) {
        if (pos <= 0)
            return this.map[0].c;
        if (pos >= 1)
            return this.map[this.map.length - 1].c;
        var minidx = 0;
        var mindist = Number.MAX_VALUE;
        for (var n = 0; n < this.map.length - 1; n++) {
            var dist = pos - this.map[n].p;
            if (dist >= 0 && dist <= mindist) {
                minidx = n;
                mindist = dist;
            }
        }
        var d = this.map[minidx + 1].p - this.map[minidx].p;
        d = mindist / d;
        var r = (1 - d) * this.map[minidx].c[0] + d * this.map[minidx + 1].c[0];
        var g = (1 - d) * this.map[minidx].c[1] + d * this.map[minidx + 1].c[1];
        var b = (1 - d) * this.map[minidx].c[2] + d * this.map[minidx + 1].c[2];
        return [r, g, b];
    };
    return ColorMap;
}());
var PadShape = /** @class */ (function () {
    function PadShape(data) {
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.z = 0;
        this.x = data.x;
        this.y = data.y;
        this.w = data.w;
        this.h = data.h;
        this.z = data.z;
    }
    PadShape.prototype.toSVG = function (plotcontext) {
        var svg = "";
        var color = plotcontext.getColor(this.z);
        var wx = plotcontext.m2wx(this.x), wy = plotcontext.m2wy(this.y), ww = plotcontext.m2wx(this.x + this.w) - wx, wh = plotcontext.m2wy(this.y + this.h) - wy;
        if (wh < 0) {
            wh = -wh;
            wy -= wh;
        }
        svg += "<rect shape-rendering=\"crispEdges\" stroke-width=\"0\" stroke=\"none\" fill=\"" + color + "\" x=\"" + nf(wx) + "\" y=\"" + nf(wy) + "\"" + " width=\"" + nf(ww) + "\" height=\"" + nf(wh) + "\" />";
        return svg;
    };
    PadShape.prototype.getRefs = function () { return null; };
    PadShape.prototype.getXLim = function () { return [this.x, this.x + this.w]; };
    PadShape.prototype.getYLim = function () { return [this.y, this.y + this.h]; };
    PadShape.prototype.getCLim = function () { return [this.z, this.z]; };
    return PadShape;
}());
var MarkerShape = /** @class */ (function () {
    function MarkerShape(data) {
        this.x = 1;
        this.y = 1;
        this.diameter = 2;
        this.color = "blue";
        this.symbol = "circle";
        this.linewidth = 1;
        this.x = data.x;
        this.y = data.y;
        this.color = data.color;
        this.diameter = data.diameter;
        this.symbol = data.symbol;
        this.linewidth = data.linewidth;
    }
    MarkerShape.prototype.getRefSVG = function () {
        var svg = "<g id=\"" + this.getRef() + "\">";
        if (this.symbol === "circleFilled")
            svg += "<circle cx=\"0\" cy=\"0\" r=\"" + this.diameter + "\" stroke=\"none\" fill=\"" + this.color + "\" />";
        else if (this.symbol === "circle")
            svg += "<circle cx=\"0\" cy=\"0\" r=\"" + this.diameter + "\" stroke=\"" + this.color + "\" fill=\"none\" />";
        else if (this.symbol === "triangleDown")
            svg += this.svgPoly(0, 0, 0, 3, false);
        else if (this.symbol === "triangleLeft")
            svg += this.svgPoly(0, 0, -1, 3, false);
        else if (this.symbol === "triangleUp")
            svg += this.svgPoly(0, 0, 2, 3, false);
        else if (this.symbol === "triangleRight")
            svg += this.svgPoly(0, 0, 1, 3, false);
        else if (this.symbol === "triangleDownFilled")
            svg += this.svgPoly(0, 0, 0, 3, true);
        else if (this.symbol === "triangleLeftFilled")
            svg += this.svgPoly(0, 0, -1, 3, true);
        else if (this.symbol === "triangleUpFilled")
            svg += this.svgPoly(0, 0, 2, 3, true);
        else if (this.symbol === "triangleRightFilled")
            svg += this.svgPoly(0, 0, 1, 3, true);
        else if (this.symbol == "diamond")
            svg += this.svgPoly(0, 0, 1, 4, false);
        else if (this.symbol === "diamondFilled")
            svg += this.svgPoly(0, 0, 1, 4, true);
        else if (this.symbol === "hexagram")
            svg += this.svgPoly(0, 0, 1, 6, false);
        else if (this.symbol === "hexagramFilled")
            svg += this.svgPoly(0, 0, 1, 6, true);
        else if (this.symbol === "pentagram")
            svg += this.svgPoly(0, 0, 1, 5, false);
        else if (this.symbol === "pentagramFilled")
            svg += this.svgPoly(0, 0, 1, 5, true);
        else if (this.symbol === "square")
            svg += this.svgPoly(0, 0, 0.5, 4, false);
        else if (this.symbol === "squareFilled")
            svg += this.svgPoly(0, 0, 0.5, 4, true);
        else if (this.symbol === "star")
            svg += this.svgStar(0, 0, 0, 3);
        else if (this.symbol === "plus")
            svg += this.svgStar(0, 0, 0, 2);
        else if (this.symbol === "xMark")
            svg += this.svgStar(0, 0, 0.5, 2);
        svg += "</g>";
        return svg;
    };
    MarkerShape.prototype.toSVG = function (plotcontext) {
        return "<use x=\"" + nf(plotcontext.m2wx(this.x)) + "\" y=\"" + nf(plotcontext.m2wy(this.y)) + "\" xlink:href=\"#" + this.getRef() + "\" />";
    };
    MarkerShape.prototype.svgStar = function (cx, cy, direction, count) {
        count *= 2;
        var svg = "";
        var step = 2 * pi / count;
        var x = [], y = [];
        for (var n = 0; n < count; n++) {
            var v = n * step + (direction * pi / 2);
            x[n] = cx + this.diameter * sin(v);
            y[n] = cy + this.diameter * cos(v);
        }
        count /= 2;
        for (var n = 0; n < count; n++)
            svg += ("<line stroke-width=\"" + this.linewidth + "\" stroke=\"" + this.color + "\" fill=\"none\" x1=\"" + x[n] + "\" y1=\"" + y[n] + "\" x2=\"" + x[n + (count)] + "\" y2=\"" + y[n + (count)] + "\" />");
        svg += "\" />";
        return svg;
    };
    MarkerShape.prototype.svgPoly = function (cx, cy, direction, count, b_fill) {
        var svg = "<polygon stroke-width=\"" + this.linewidth + "\" stroke=\"" + this.color + "\" fill=\"" + (b_fill ? this.color : "none") + "\" points=\"";
        var step = 2 * pi / count;
        var x = [], y = [];
        for (var n = 0; n < count; n++) {
            var v = n * step + (direction * pi / 2);
            x[n] = sin(v);
            y[n] = cos(v);
            svg += ((cx + this.diameter * x[n]) + "," + (cy + this.diameter * y[n]) + " ");
        }
        svg += "\" />";
        return svg;
    };
    MarkerShape.prototype.getRef = function () {
        return this.symbol + "-" + this.linewidth + "-" + this.diameter + "-" + this.color;
    };
    MarkerShape.prototype.getRefs = function () {
        var r = {};
        r[this.getRef()] = this.getRefSVG();
        return r;
    };
    MarkerShape.prototype.getXLim = function () { return [this.x, this.x]; };
    MarkerShape.prototype.getYLim = function () { return [this.y, this.y]; };
    MarkerShape.prototype.getCLim = function () { return [0, 0]; };
    return MarkerShape;
}());
var LineShape = /** @class */ (function () {
    function LineShape(data) {
        this.x = [];
        this.y = [];
        this.linewidth = 1;
        this.color = "blue";
        this.style = "solid";
        this.x = data.x;
        this.y = data.y;
        this.color = data.color;
        this.linewidth = data.linewidth;
        this.style = data.style;
    }
    LineShape.prototype.toSVG = function (plotcontext) {
        if (this.style === "none")
            return "";
        var dasharray = "0,0";
        if (this.style === "dashed")
            dasharray = 5 * this.linewidth + "," + 2.5 * this.linewidth;
        else if (this.style === "dotted")
            dasharray = this.linewidth + "," + 2.5 * this.linewidth;
        var svg = "<polyline " + (this.style !== "solid" ? "style=\"stroke-dasharray: " + dasharray + ";\"" : "") + " stroke=\"" + this.color + "\" stroke-width=\"" + this.linewidth + "\" fill=\"none\" points=\"";
        // 						const svg="<polyline style=\"stroke-dasharray: "+dasharray+";\" stroke=\""+this.color+"\" stroke-width=\""+this.linewidth+"\" fill=\"none\" points=\"";
        for (var n = 0; n < this.x.length; n++) {
            svg += nf(plotcontext.m2wx(this.x[n])) + "," + nf(plotcontext.m2wy(this.y[n])) + " ";
        }
        svg += "\" />";
        return svg;
    };
    LineShape.prototype.getRefs = function () { return null; };
    LineShape.prototype.getXLim = function () { return [min(this.x), max(this.x)]; };
    LineShape.prototype.getYLim = function () { return [min(this.y), max(this.y)]; };
    LineShape.prototype.getCLim = function () { return [0, 0]; };
    return LineShape;
}());
var TextShape = /** @class */ (function () {
    function TextShape(data) {
        this.x = 0;
        this.y = 0;
        this.txt = "txt";
        this.font = "helvetica";
        this.fontsize = 14;
        this.x = data.x;
        this.y = data.y;
        this.txt = data.txt;
        this.font = data.font;
        this.fontsize = data.fontsize;
    }
    TextShape.prototype.toSVG = function (plotcontext) {
        return "<text font-size=\"" + this.fontsize + "\" font-family=\"" + this.font + "\" text-anchor=\"start\" x=\"" + plotcontext.m2wx(this.x) + "\" y=\"" + (plotcontext.m2wy(this.y) + 0.37 * this.fontsize) + "\">" + this.txt + "</text>";
    };
    TextShape.prototype.getRefs = function () { return null; };
    TextShape.prototype.getXLim = function () { return [this.x, this.x]; };
    TextShape.prototype.getYLim = function () { return [this.y, this.y]; };
    TextShape.prototype.getCLim = function () { return [0, 0]; };
    return TextShape;
}());
/* Static Functions */
function color2hex(c) { return "rgb(" + toint(c[0]) + "," + toint(c[1]) + "," + toint(c[2]) + ")"; }
function min(x) { return Math.min.apply(Math, x); }
function max(x) { return Math.max.apply(Math, x); }
function nf(f) { return parseFloat(parseFloat(f).toFixed(4)).toString(); }
function log10(val) {
    return Math.log(val) / Math.LN10;
}
function toint(_value) {
    if (_value < 0)
        return Math.ceil(_value);
    else
        return Math.floor(_value);
}
// The next two functions are adopted from Paul Heckbert from "Graphics Gems", Academic Press, 1990. 
function niceNumber(val, b_round) {
    var expv, f, nrf;
    var aval = Math.abs(val);
    var sign = val < 0 ? -1 : val > 0 ? 1 : 0;
    // 		alert(log10(aval));
    expv = toint(Math.floor(log10(aval)));
    f = aval / Math.pow(10, expv);
    if (b_round) {
        if (f < 1.5)
            nrf = 1;
        else if (f < 3)
            nrf = 2;
        else if (f < 7)
            nrf = 5;
        else
            nrf = 10;
    }
    else {
        if (f <= 1)
            nrf = 1;
        else if (f <= 2)
            nrf = 2;
        else if (f <= 5)
            nrf = 5;
        else
            nrf = 10;
    }
    return (nrf * Math.pow(10, expv) * sign);
}
function loose_label(mi, ma, numberTicks) {
    var d, graphmin, range, x;
    range = niceNumber(ma - mi, false);
    d = niceNumber(range / (Math.min(numberTicks, 10) - 1), true);
    var ex = Math.pow(10, Math.floor(log10(ma - mi)));
    graphmin = Math.floor(mi / ex) * ex;
    var ticks = [];
    for (x = graphmin; x <= ma; x = (Math.round((x + d) / d) * d)) {
        ticks.push(x);
        if (ticks.length > 50)
            break; //emergency exit if range is in floating point range
    }
    return ticks;
}
// Sin/Cos-Stuff (used by Marker)
var pi = 3.1415927;
var SIN_BITS = 13; // Adjust for accuracy.
var SIN_MASK = ~(-1 << SIN_BITS);
var SIN_COUNT = SIN_MASK + 1;
var radFull = pi * 2;
var degFull = 360;
var radToIndex = SIN_COUNT / radFull;
var degToIndex = SIN_COUNT / degFull;
var degreesToRadians = pi / 180;
var _sin = [];
var _cos = [];
for (var i = 0; i < SIN_COUNT; i++) {
    var a = (i + 0.5) / SIN_COUNT * radFull;
    _sin[i] = Math.sin(a);
    _cos[i] = Math.cos(a);
}
for (var i = 0; i < 360; i += 90) {
    _sin[toint(i * degToIndex) & SIN_MASK] = Math.sin(i * degreesToRadians);
    _cos[toint(i * degToIndex) & SIN_MASK] = Math.cos(i * degreesToRadians);
}
function sin(rad) { return _sin[toint(rad * radToIndex) & SIN_MASK]; }
function cos(rad) { return _cos[toint(rad * radToIndex) & SIN_MASK]; }
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = Base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
                Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);
        }
        return output;
    },
    decode: function (input) {
        if (!input)
            return null;
        // alert("decode("+input);
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = Base64._keyStr.indexOf(input.charAt(i++));
            enc2 = Base64._keyStr.indexOf(input.charAt(i++));
            enc3 = Base64._keyStr.indexOf(input.charAt(i++));
            enc4 = Base64._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = Base64._utf8_decode(output);
        return output;
    },
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0, c1, c2, c3;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c === 0)
                i++;
            else if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
};

// TODO
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
