const capsule = document.createElement('div');
capsule.classList.add('absolute', 'w-24', 'h-full', '-translate-x-1/2', 'left-1/2');
capsule.innerHTML = `
<!-- CAPSULE PUSH-BUTTON -->
<div id="capsule__button" class="cursor-pointer absolute bg-white left-1/2 -translate-x-1/2 h-[8%] w-[70%] border-4 border-black rounded shadow-[-7px_0px_10px_darkgray_inset] z-10"></div>
<div class="absolute bg-white top-[8%] left-1/2 -translate-x-1/2 h-[6%] w-[25%] border-x-4 border-black shadow-[-7px_5px_10px_darkgray_inset]"></div>
<div class="absolute bg-white top-[14%] left-1/2 -translate-x-1/2 h-[6%] w-[40%] border-t-4 border-x-4 border-black rounded-t  shadow-[-7px_0px_10px_darkgray_inset]"></div>
<!-- CAPSULE UPPER BODY -->
<div class="absolute bg-white top-[20%] h-[18%] w-full rounded-t-[35px] border-t-4 border-x-4 border-black shadow-[-7px_5px_15px_darkgray_inset]"></div>
<!--  CAPSULE TAG -->
<div class="absolute bg-blue-800 top-[38%] h-[44%] w-full border-4 border-black flex flex-col justify-around">
  <!-- TAG CODE -->
  <p class="text-3xl font-black text-center uppercase">rdr</p>
  <!-- CAPSULE LOGO -->
  <div>
    <div class="bg-white w-[60px] h-[60px] mx-auto rounded-full relative border-2 border-black">
      <div class="absolute w-[52px] h-[52px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border-8 border-black"></div>
      <div class="absolute w-[32px] h-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border-8 border-black"></div>
      <div class="absolute w-[50%] h-[5px] top-1/2 right-0 -translate-y-1/2 bg-white"></div>
    </div>
    <p class="uppercase text-center text-[10px] font-black">capsule</p>
    <p class="uppercase text-[8px] text-center font-bold">corp.</p>
  </div>
</div>
<!-- CAPSULE LOWER BODY -->
<div class="absolute bg-white top-[82%] h-[18%] w-full rounded-b-full border-b-4 border-x-4 border-black shadow-[-7px_-5px_15px_darkgray_inset]"></div>
`;

export default capsule;
