const smoke = document.createElement('div');
smoke.classList.add('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-full', 'h-full', 'animate-[smoking_1s_ease-in-out_forwards]');
smoke.setAttribute('id', 'smoke');
smoke.innerHTML = `
<!-- SMOKE PARTICLES -->
<div class="smoke__particle absolute w-1/4 h-1/4 top-1/2 -translate-y-1/2 rounded-full border-y-[10px] border-stone-300"></div>
<div class="smoke__particle absolute w-1/4 h-1/4 top-1/2 right-0 -translate-y-1/2 rounded-full border-y-[10px] border-stone-300"></div>
<div class="smoke__particle absolute w-[30%] h-[30%] left-1/2 -translate-x-1/2 rounded-full scale-x-150 border-y-[10px] border-stone-300"></div>
<div class="smoke__particle absolute w-[30%] h-[30%] bottom-[0%] left-1/2 -translate-x-1/2 rounded-full scale-x-150 border-y-[10px] border-stone-300"></div>
<div class="smoke__particle absolute w-[30%] h-[30%] top-[20%] left-[30%] -translate-x-1/2 rounded-full scale-x-150 border-y-[10px] border-stone-300"></div>
<div class="smoke__particle absolute w-[30%] h-[30%] top-1/2 left-[30%] -translate-x-1/2 rounded-full scale-x-150 border-y-[10px] border-stone-300"></div>
<div class="smoke__particle absolute w-[30%] h-[30%] top-[20%] left-[70%] -translate-x-1/2 rounded-full scale-x-150 border-y-[10px] border-stone-300"></div>
<div class="smoke__particle absolute w-[30%] h-[30%] top-1/2 left-[70%] -translate-x-1/2 rounded-full scale-x-150 border-y-[10px] border-stone-300"></div>
<div class="smoke__particle absolute w-[30%] h-[30%] top-[20%] left-[30%] -translate-x-1/2 rounded-full scale-x-150 border-y-[10px] border-stone-300"></div>
<div class="smoke__particle absolute w-[30%] h-[30%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full scale-x-[2] border-y-[10px] border-stone-300"></div>
`;

export default smoke;
