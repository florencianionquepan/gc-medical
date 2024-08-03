// Función para capitalizar la primera letra
const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return '- '+ str.charAt(0).toUpperCase() + str.slice(1);
  };
  
// Función para formatear valores específicos
export const formatLine = (line) => {
    switch (line.toLowerCase()) {
      case 'heridas':
        return '- Tratamiento de heridas';
      default:
        return capitalizeFirstLetter(line);
    }
};
  