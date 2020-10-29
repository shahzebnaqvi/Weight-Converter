
    document.getElementById('output').style.visibility='hidden';
    document.getElementById('Poundinput').addEventListener('input',
    function(e){
        document.getElementById('output').style.visibility='visible';

        let input=e.target.value;
    document.getElementById('outputg').innerHTML=input/0.0022046;
    document.getElementById('outputo').innerHTML=input^0.0625;
    document.getElementById('outputkg').innerHTML=input/2.2046;

    })



