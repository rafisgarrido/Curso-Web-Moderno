//IIFE -> Immediately Invoked Function Expression
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
}) () //Por conta dos parenteses terem sido citados anteriormente na função, ao citá-los embaixo conseguimos invocar imediatamente a função, fugindo assim do escopo global