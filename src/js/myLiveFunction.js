const per = {
  name: 'Iurii',
  age: 3,
  brain: 3,
};

const goChildGarden = (obj) => {
  [...Array(4)].forEach(() => {
    ++obj.brain;
    ++obj.age;
  })
};

const goSchool = (obj) => {
  [...Array(11)].forEach(() => {
    obj.friends = ['Lydvig', 'Aristarh'];
    obj.brain++;
    obj.age++;
    obj.firstLove = ['Alyona'];
  })
}

const goUniver = (obj) => {
  let i = Math.floor(Math.random() * 10);
  [...Array(i)].forEach(() => {
    obj.brain++;
    obj.age++;
    obj.wife = null;

    if ( i >= 5 ) {
      obj.wife = ['Sveta'];
      obj.children = ['Pety', 'Katy'];
      obj.childrenAge = 1;
    }
  })
}

const goArmy = (obj) => {
  [...Array(1)].forEach(() => {
    obj.age++
    obj.brain--;
    obj.power = 10;
  })
}

const goWorking = (obj) => {
  [...Array(30)].forEach(() => {
    obj.age++;
    obj.workPlace = 'plant';
    obj.specific = 'slesar`';
    obj.enjoiFromLife = false;
    if (Object.hasOwn(obj, 'children') && obj.children !== NaN) {
      obj.childrenAge++;
    }
  })
}


const myLiveFunction = (obj) => {
  goChildGarden(obj);
  goSchool(obj);
  goUniver(obj);
  if (!Object.hasOwn(obj, 'children')) {
    goArmy(obj);
  }
  goWorking(obj);

  return obj;
};

export {per, myLiveFunction};