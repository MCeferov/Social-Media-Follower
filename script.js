"use strict";

const counters = document.querySelectorAll(".counter")

counters.forEach((refreshedEl) => {
    refreshedEl.innerText = "0"
    const counterRef = () => {
        const refresh = +refreshedEl.getAttribute(`data-target`);
        const refreshed = +refreshedEl.innerHTML
        const final = refresh / 50
        
        if (refreshed < refresh ) {
            refreshedEl.innerHTML = `${Math.ceil(refreshed + final)}`;
            setTimeout(counterRef,1)
        } else {
            refreshedEl.innerText = refresh;
            console.log("test");

        }
    };

    counterRef()
});
