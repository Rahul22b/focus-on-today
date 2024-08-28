


// const cbtn = document.querySelectorAll('.cbtn');
// const goal = document.querySelectorAll('.goal');
// const bar = document.querySelector('.bar');
// const suggestion=document.querySelector('.suggestion')
// const gtext=document.querySelectorAll('.gtext');
// const instruct=document.querySelector('.instructor')


// const num = [0, 0, 0];
// let cnt=0;

// let sent=['you can do it','move ahead you can do it','good progress','wow completed']

// for(let i=0;i<3;i++){
// gtext[i].addEventListener('focus',()=>{
//     instruct.style.visibility="hidden";
// })


//     cbtn[i].addEventListener('click', () => {
//       const  allfieldfilled=[...gtext].every((input)=>{
//            return input.value;
//         })

//         if(allfieldfilled==false){
//             instruct.style.visibility="visible";
//             return
//         }
//         else{instruct.style.visibility="hidden";}

//         if (num[i] === 0) {
        
//             goal[i].classList.add('completed');
//             num[i] = 1;
//             cnt++;
//             // bar.style.width=`{${cnt}*33}%`;
//             bar.style.width = `${cnt * 33}%`;
//             bar.innerHTML=`${cnt}/3 is completed`
//             suggestion.innerHTML=sent[cnt];
//         } else {
           
//             goal[i].classList.remove('completed');
//             num[i] = 0;
//             // bar.style.width="33%";
//             cnt--;
//             // bar.style.width=`{${cnt}*33}%`;
//             bar.style.width = `${cnt * 33}%`;
//             bar.innerHTML=`${cnt}/3 is completed`
//             suggestion.innerHTML=sent[cnt];
//         }

//         let sum=0;
// for (let index = 0; index <num.length; index++) {
//     sum+=num[index];   
// }

// if(sum==0) bar.style.width="0%";
// if(sum==1) bar.style.width="33%";
// if(sum==2) bar.style.width="66%";
// if(sum==3) bar.style.width="100%";
       
//     }


// );
// }


// Select elements
const cbtn = document.querySelectorAll('.cbtn');
const goal = document.querySelectorAll('.goal');
const bar = document.querySelector('.bar');
const suggestion = document.querySelector('.suggestion');
const gtext = document.querySelectorAll('.gtext');
const instruct = document.querySelector('.instructor');

// Initialize variables
const num = [0, 0, 0];
let cnt = 0;
const sent = ['you can do it', 'move ahead you can do it', 'good progress', 'wow completed'];

// Hide instructions on input focus
gtext.forEach((input) => {
    input.addEventListener('focus', () => {
        instruct.style.visibility = 'hidden';
    });
});

// Handle button clicks
cbtn.forEach((button, i) => {
    button.addEventListener('click', () => {
        const allFieldsFilled = [...gtext].every((input) => input.value);
        if (!allFieldsFilled) {
            instruct.style.visibility = 'visible';
            return;
        } else {
            instruct.style.visibility = 'hidden';
        }

        if (num[i] === 0) {
            goal[i].classList.add('completed');
            num[i] = 1;
            cnt++;
        } else {
            goal[i].classList.remove('completed');
            num[i] = 0;
            cnt--;
        }

        // Update progress bar
        bar.style.width = `${cnt * 33}%`;
        bar.innerHTML = `${cnt}/3 is completed`;
        suggestion.innerHTML = sent[cnt];
    });
});

// Set initial progress bar width
bar.style.width = '0%';












