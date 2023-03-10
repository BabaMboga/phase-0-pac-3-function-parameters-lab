// creating a function that uses a parameter
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  // defining a function that uses two parameters
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  // defining a function that uses an optional parameter
  function introductionWithLanguageOptional(name, language = "Javascript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }