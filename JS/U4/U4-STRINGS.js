let my_nombre = "Nahuel";
let my_apellido = "Benitez";
let cantidadLetrasNombre = my_nombre.length;
let cantidadLetrasApellido = my_apellido.length;
let estudiante = `${my_nombre} ${my_apellido}`
let estudianteMayus = estudiante.toLocaleUpperCase;
let estudianteMinus = estudiante.toLocaleLowerCase;
let total_letras = estudiante.length;
let primeraLetraNombre = my_nombre.charAt(0);
let ultimaLetraApellido = my_apellido[cantidadLetrasApellido-1];
let estudianteSinEspacios = estudiante.replace(/ /g,"");
let variableBooleana = estudiante.includes("Nahuel");

