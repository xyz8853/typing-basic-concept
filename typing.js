

let content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestiae facere laboriosam sed dicta illo iure temporibus qui officiis doloribus voluptatem rem, cum assumenda placeat deleniti similique obcaecati dolorem eligendi nulla sequi rerum. Magnam tempora molestiae quibusdam sunt impedit blanditiis commodi qui officiis ab esse. Possimus obcaecati nisi ipsa neque?";
let arr = content.split(" ");
let index=0;
let r,c;

// console.log(arr);

let all_word = document.querySelector('.all-typing-word');
    for(r=0; r<arr.length; r++){
        let span = document.createElement('span');
        span.setAttribute('class',`span-${r}`);
        span.textContent=arr[r]+" ";
        all_word.append(span);

    }
    
let currentValue = "";
let currentSpan = document.querySelector(`.span-${index}`);
    currentSpan.style.color='red';    
    let spanNewValue = currentSpan.textContent;
        spanNewValue = spanNewValue.substring(0, spanNewValue.length-1);
let inputValue = document.querySelector('.type-current-value');
    inputValue.addEventListener('input', (event)=>{
            
        let val = event.target.value;
        currentValue = val;  
        
        // if(currentValue.charAt(currentValue.length-1)==' '){
        //     // allSpan = document.querySelector(`.span-${index}`);
        //     // allSpan.style.color='green';
        //     currentSpan.style.color='red';
        //      event.target.value="";
        //      currentValue = '';
        //      index++;
        //      currentSpan = document.querySelector(`.span-${index}`);
        //      currentSpan.style.color= 'red';
        //      console.log('space');
        //      console.log("space new value :"+currentSpan.textContent);
        // }
        if(currentValue==spanNewValue){
             
             currentSpan.style.color='green';
             index++;
             event.target.value="";
             currentValue = '';
             currentSpan= document.querySelector(`.span-${index}`);
             currentSpan.style.color= 'red';
             spanNewValue = currentSpan.textContent;
             spanNewValue = spanNewValue.substring(0, spanNewValue.length-1);
             console.log("value");
             console.log("currect word type after new word :"+currentSpan.textContent);
        }
    });

