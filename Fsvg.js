

var item = document.getElementsByClassName('item')[0];
var svg = document.querySelector('svg'); //此为要取得CTM的svg元素
var point = document.querySelector('svg').createSVGPoint(); //要声明，下面会拿来用
var clip = document.querySelector('circle');  //注意操作的是  clipPath里的circle
console.log(clip)
item.addEventListener('mousemove',function (ev) {
    // console.log(ev.clientX)
    //对应方式
    point.x = ev.clientX;
    point.y = ev.clientY;
    console.log(point.matrixTransform(svg.getScreenCTM().inverse()).x)
    clip.setAttribute('cx',point.matrixTransform(svg.getScreenCTM().inverse()).x);
    clip.setAttribute('cy',point.matrixTransform(svg.getScreenCTM().inverse()).y);
});
// function getCoordinates(ev, svg) {
//     point.x = ev.clientX;
//     // console.log(point.x);
//     point.y = ev.clientY;
//     // console.log(point.y);
//     console.log(point.matrixTransform(svg.getScreenCTM().inverse()))
//     return point.matrixTransform(svg.getScreenCTM().inverse());
// }
function coordinateTransform(screenPoint, someSvgObject) {
    var CTM = someSvgObject.getScreenCTM(); return screenPoint.matrixTransform( CTM.inverse() );
}
