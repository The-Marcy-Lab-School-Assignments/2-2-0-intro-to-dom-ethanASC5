//Q1
const getMainHeadingText = () => {
  let text = document.querySelector('#main-heading');
  console.log(text.textContent);
}

//Q2
const getAllMainText = () => {
  let newString = '';
  let mainText = document.querySelectorAll('.main-text');

  for (let i = 0; i < mainText.length; i++) {
    if (i !== 0) newString += ',';
    newString += mainText[i].textContent;
  }
  console.log(newString)
};

//Q3
const setSubtitleText = () => {
  let text = document.querySelector('#subtitle');
  text.innerHTML = "This is a subtitle!";
};

//Q4
const modifyDivClassList = () => {
  const list = document.querySelector('#modify-classes').classList;
  list.remove('bad-class')
  list.add('new-class')
};

//Q5
const addH2 = () => {
  const newH2 = document.createElement('h2');
  newH2.setAttribute("id", "h2-test")
  const text = document.createTextNode("Another one!")
  newH2.appendChild(text);
  document.querySelector('body').append(newH2);
};

//Q6
const removeOldInfo = () => {
  const pTag = document.getElementById('old-info');
  pTag.remove();
};


//Q7
const makeAlphabet = () => {

  const alphabetList = document.querySelector('#alphabet');
  const numLetters = parseInt(alphabetList.dataset.numLetters, 10);

  for (let i = 1; i <= numLetters; i++) {

    const li = document.createElement('li');

    const letter = String.fromCharCode(64 + i); // 65 is the char code for 'A'
    li.textContent = `${letter} is letter #${i} in the alphabet`;

    alphabetList.appendChild(li);
  }
}




const makeBio = () => {

  const myBioDiv = document.querySelector('#my-bio');

  myBioDiv.innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
