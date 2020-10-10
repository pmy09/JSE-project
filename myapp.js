let elements = document.getElementsByName('cssProperty');

let div = document.getElementById('modify');

let text = document.getElementById('mess');

let car = document.getElementsByName('cars');

let year = document.getElementsByName('years');

let colors = document.getElementsByName('cssProperty');

function set()
{
    
    for( let index = 0; index < elements.length; index++ )
    {
        let cssProperty = elements[ index ].getAttribute('id');
        
        let cssValue = elements[ index ].value;
        
        div.style[ cssProperty ] = cssValue;
        
         text.innerHTML='A '+colors[index].value+' '+year[index].value+' '+car[index].value;
        
        text.style.cssText = 'background:blue; color:pink; width:200px';
    }
}

document.getElementById('set').addEventListener('click',set);
