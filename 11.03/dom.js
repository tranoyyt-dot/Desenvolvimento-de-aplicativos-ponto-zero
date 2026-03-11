const demoId = document.getElementById('demo');
demoId.style.border = '1px solid purple';

const demoClass = document.getElementsByClassName('demo');
for (i=0; i<demoClass.length; i++) {
    demoClass[i].style.border = '2px dotted orange';
}