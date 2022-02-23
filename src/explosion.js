const explosion = document.createElement('div');
explosion.classList.add('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'animate-[growth_.3s_ease_forwards]', 'text-9xl');
explosion.innerHTML = `
  <!-- EXPLOSION PARTICLES -->
  <div class="absolute w-1/3 -translate-x-1/2 rounded-full explosion__particle h-1/3 left-1/2"></div>
  <div class="absolute right-0 w-1/3 -translate-y-1/2 rounded-full explosion__particle h-1/3 top-1/2"></div>
  <div class="absolute w-1/3 -translate-y-1/2 rounded-full explosion__particle h-1/3 top-1/2"></div>
  <div class="absolute bottom-0 w-1/3 -translate-x-1/2 rounded-full explosion__particle h-1/3 left-1/2"></div>
  <div class="explosion__particle w-2/5 h-2/5 absolute top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
  <div class="explosion__particle w-2/5 h-2/5 absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
  <div class="explosion__particle w-2/5 h-2/5 absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
  <div class="explosion__particle w-2/5 h-2/5 absolute top-[70%] left-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
  <div class="absolute w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full explosion__particle h-1/2 top-1/2 left-1/2"></div>
  <!-- EXPLOSION ONOMATOPOEIA -->
  <p class="absolute font-mono font-black text-red-700 uppercase -translate-x-1/2 -translate-y-1/2 text-[inherit] top-[55%] left-[22%] -rotate-45">b</p>
  <p class="absolute font-mono font-black text-red-700 -translate-x-1/2 -translate-y-1/2 top-[40%] left-[43%] text-[inherit]">o</p>
  <p class="absolute font-mono font-black text-red-700 uppercase -translate-x-1/2 -translate-y-1/2 top-1/2 left-[67%] text-[inherit] rotate-[20deg]">m</p>
  <p class="absolute font-mono font-black text-red-700 -translate-x-1/2 -translate-y-1/2 top-[60%] left-[85%] text-[inherit] rotate-[30deg]">!</p>
`;

export default explosion;
