function factoryfunc(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      getName() {
        console.log("my name is "+firstName + ' ' + lastName);
      },
    };
  }
  
  person1 = factoryfunc('gurjeet', 'Kaur');
  person2 = factoryfunc('Navneet', 'Kaur');
  person1.getName()
  person2.getName()