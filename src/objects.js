const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age
  }
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65) {return true;} else {return false;}
};

const getAges = people => {
  return people.map(elem => elem.age)
};

const findByName = (name, people) => {
  return people.filter(elem => name === elem.name)[0]
};

const findHondas = cars => {
  return cars.filter(elem => elem.manufacturer === 'Honda')
};

const averageAge = people => {
  const ages = people.map(elem => elem.age)
  const sum = (ages.reduce((a,b) => a + b, 0));
  return (sum / people.length);
};

const createTalkingPerson = (name, age) => {
  // return `Hi ${name}, my name is ${this.name} and I am ${age}`
   

};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
