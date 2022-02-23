const radar = document.createElement('div');
radar.classList.add('w-full', 'h-full');
radar.setAttribute('id', 'radar');
radar.innerHTML = `
<!-- RADAR PUSH-BUTTON -->
<div id="radar__button" class="absolute bg-white w-[20%] h-[7%] top-[5%] left-1/2 -translate-x-1/2 border-4 border-black rounded cursor-pointer z-10 shadow-[-7px_0px_10px_darkgray_inset]"></div>
<div class="absolute bg-white w-[8%] h-[4%] top-[12%] left-1/2 -translate-x-1/2 border-x-4 border-black shadow-[-7px_0px_10px_darkgray_inset]"></div>
<div class="absolute bg-white w-[16%] h-[4%] top-[16%] left-1/2 -translate-x-1/2 border-t-4 border-x-4 border-black rounded shadow-[-7px_0px_10px_darkgray_inset]"></div>
<!-- RADAR BODY -->
<div class="absolute bg-white w-[76%] h-[76%] top-[19%] left-1/2 -translate-x-1/2 rounded-full border-4 border-black shadow-[-7px_0px_10px_darkgray_inset]">
  <!-- RADAR SCREEN -->
  <div class="radar-screen absolute w-[208px] h-[208px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-black bg-green-800">
    <!-- SPHERE SIGNAL -->
    <div id="lights" class="w-full h-full hidden">
      <div class="absolute w-[10px] h-[10px] bg-yellow-300  rounded-full top-[40px] left-[60px] -translate-x-1/2 -translate-y-1/2 animate-[blink_1s_ease-in-out_infinite]"></div>
      <div class="absolute w-[10px] h-[10px] bg-yellow-300  rounded-full top-[55px] left-[70px] -translate-x-1/2 -translate-y-1/2 animate-[blink_1s_ease-in-out_infinite]"></div>
      <div class="absolute w-[10px] h-[10px] bg-yellow-300  rounded-full top-[45px] left-[150px] -translate-x-1/2 -translate-y-1/2 animate-[blink_1s_ease-in-out_infinite]"></div>
      <div class="absolute w-[10px] h-[10px] bg-yellow-300  rounded-full top-[10px] left-[100px] -translate-x-1/2 -translate-y-1/2 animate-[blink_1s_ease-in-out_infinite]"></div>
      <div class="absolute w-[10px] h-[10px] bg-yellow-300  rounded-full top-[155px] left-[40px] -translate-x-1/2 -translate-y-1/2 animate-[blink_1s_ease-in-out_infinite]"></div>
      <div class="absolute w-[10px] h-[10px] bg-yellow-300  rounded-full top-[165px] left-[160px] -translate-x-1/2 -translate-y-1/2 animate-[blink_1s_ease-in-out_infinite]"></div>
      <div class="absolute w-[10px] h-[10px] bg-yellow-300  rounded-full top-[185px] left-[80px] -translate-x-1/2 -translate-y-1/2 animate-[blink_1s_ease-in-out_infinite]"></div>
    </div>
    <!-- POSITION MARK -->
    <div class="position-mark absolute w-[15px] h-[15px] bg-red-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
  </div>
`;

export default radar;
