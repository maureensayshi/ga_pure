document.getElementById('btn1').addEventListener('click', ()=>{   
    ga('send', 'event', {
        'eventCategory': 'Category',
        'eventAction': 'Action',
        'eventLabel': 'Label',
        'eventValue': 55
    });
})
document.getElementById('btn2').addEventListener('click', ()=>{
    ga('send', 'event', {
        'eventCategory': 'Category',
        'eventAction': 'second click',
        'eventLabel': 'second label',
        'eventValue': 55
    });
})
document.getElementById('btn3').addEventListener('click', ()=>{
    ga('send', 'event', 'Videos', 'play', 'Fall Campaign');
})
document.getElementById('btn4').addEventListener('click', ()=>{
    ga('send', 'event', 'nonInteraction', 'click', 'no effect to bounce rate');
})
document.getElementById('btn5').addEventListener('click', ()=>{
    ga('set', 'dimension1', '123');
    ga('send', 'pageview', '/level_1/');
})