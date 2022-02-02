const container = document.querySelector('body');

const content1 = document.createElement('p');
content1.classList.toggle("test1"); 
content1.textContent = 'Hey I’m red!';
container.appendChild(content1);

const content2 = document.createElement('h3');
content2.classList.toggle("test2"); 
content2.textContent = 'I’m a blue h3!';
container.appendChild(content2);

const content3 = document.createElement('div');
content3.classList.toggle("test3"); 

const nestedCon1 = document.createElement('h1');
nestedCon1.textContent = 'I’m in a div!';
content3.appendChild(nestedCon1);

const nestedCon2 = document.createElement('p');
nestedCon2.textContent = 'ME TOO!';
content3.appendChild(nestedCon2);

// Adding nested div after the contents have been appended
container.appendChild(content3);