const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template =`                       
Olá
${nome}!`                                   // O agudo é utilizado para pular linha dentro da string, o $ é um template string
console.log(concatenacao, template);

const up = texto => texto.toUpperCase(); //Usada para deixar em letra maiúscula
console.log(`Ei...${up('cuidado')}!`);