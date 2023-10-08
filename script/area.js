console.log('area connect')

function calculateTriangleArea(){
    console.log('calculate connect')


// get Triangle base value
const baseField = document.getElementById('triagnle-base');
const baseValueText = baseField.value;
const baseValueNum = parseFloat(baseValueText)
baseField.value = '';
console.log(baseValueNum);


// get Triangle hight value

const heightField = document.getElementById('triagnle-height');
const heightValueText = heightField.value;
const heightValueNum = parseFloat(heightValueText)
heightField.value = '';
console.log(heightValueNum);

// Calculate the Triangle
const triangleArea = 0.5 * baseValueNum * heightValueNum ;
const triangleAreaResult = triangleArea.toFixed(2);
console.log(triangleAreaResult)

// show the area
const trianglAreaGet = document.getElementById('triangle-area');
trianglAreaGet.innerText = triangleAreaResult;


}


// Calculate rectangle area
function calculateRectangleArea(){
    console.log('calculate connect')


    // get rectangle base value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const widthValueNum = parseFloat(widthValueText)
    widthField.value = '';
    console.log(widthValueNum);
    
    
    // get Triangle hight value
    
    const rectangleHeightField = document.getElementById('rectangle-height');
    const rectangleValueText = rectangleHeightField.value;
    const rectangleHeightValueNum = parseFloat(rectangleValueText)
    rectangleHeightField.value = '';
    console.log(rectangleHeightValueNum);
    
    // Calculate the Triangle
    const rectangleArea =  widthValueNum * rectangleHeightValueNum ;
    const rectangleAreaResult = rectangleArea.toFixed(2);
    console.log(rectangleAreaResult)
    
    // show the area
    const rectangleAreaGet = document.getElementById('rectangle-area');
    rectangleAreaGet.innerText = rectangleAreaResult;
    
     
}


// 
function calculateElipseArea(){
    const majorRadius = getInputValue('elipse-first-radius');
    const minorRadius = getInputValue('elipse-second-radius');
    const area = 3.1416 * majorRadius * minorRadius;
    setElementInnerText('elipse-area', area);


    console.log(area);
}



// reusuable function
function calculateParallelogramArea(){
    
    const base = getInputValue('parallelogram-width')
    console.log(base)

    const height = getInputValue('parallelogram-height');
    console.log(height)

    const area = base * height;
    console.log(area)
    setElementInnerText('parallelogram-area', area);
}


// reusuable input value
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldText =inputField.value;
    const value = parseFloat(inputFieldText);
    inputField.value = '';
    return value;
}

// reusuable set
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText= area;
}