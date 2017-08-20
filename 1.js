'use strict';

const svg = d3.select('body')
            .append('svg')
            .attr('width', 300)
            .attr('height', 300);

const points = [];

let drawLine = d3.line()
                .x( points => points[0] )
                .y( points => points[1] );


function startPaintCanvas() {
    svg.on( 'mousedown', function() {
        points.splice(0, points.length);

        const curves = svg.append('path')
                            .attr( 'stroke', 'rgb(' + Math.round( Math.random()*255 ) + 
                                ', ' + Math.round( Math.random()*255 ) + 
                                ', ' +  Math.round( Math.random()*255 ) + ')' )
                            .attr("fill", "none");

        svg.on( 'mousemove', function() {
            points.push( d3.mouse(this) );
            curves.attr( 'd', drawLine(points) );
        }) 
           .on( 'mouseup', () => svg.on( 'mousemove', null ) );

    });
}

startPaintCanvas();