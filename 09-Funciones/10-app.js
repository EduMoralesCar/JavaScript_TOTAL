// Parametros en un arrow Function...


// Parametros
const aprendiendo01 = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo01('JavaScript');

// si es un solo parmetro no ocupamos el parentesis
const aprendiendo02 = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo02('JavaScript');

// multiples parametros si requieren parentesis
const aprendiendo03 = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo03('JS', 'ES');
