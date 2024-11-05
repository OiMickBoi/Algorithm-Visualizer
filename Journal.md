# Oct 29
## 3:38pm
restarting algo visualizer site
keeping things simple.

restarting with react and javascript fewer things to look at.
i can worry about scaling and other things when they are actual problems

for new i will just use react and node.js and mondgodb

build a project that i came up with using this stack.


* D3.js: Powerful library for data visualization.
* Chart.js: Simpler alternative for creating charts and graphs.
* Vis.js: Library for network visualization.
* TypeScript: Static typing for better code organization and maintainability.

Data representation: Decide how to visualize the data (e.g., bars for sorting, nodes/edges for graphs).


lets focus on sorting

let's do a bubble sort

and use the 


react is taking so long maybe i should just skip and use bare html css and javascript


# 4:11 pm
react still did not install so now i'm using vite but still have react

```
 npm create vite@latest my-app -- --template react
```


# 4:22 pm

set up finished

had a little trouble by using the wrong git link but i should be good now


# 4:51 pm
got a little distracted but now have lsp for css, markdown, json and html
because of 
vscode-langservers-extracted

# 4:59 pm

well developing something completely from scratch is a lot slower than i thought
it would be. probably it because i have to pick out my tools and everything. not
even school projects were this slow. 

but got the first component ready my environment is all set. let's do this!


 npm i react-chartjs-2 
 npm install chart.js

 
## 5:16 pm

```
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const YourComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      data: [10, 20, 30],
      borderColor: 'blue'
    }]
  };

  return (
    <div style={{ width: '500px' }}>
      <Line data={data} />
    </div>
  );
};

export default YourComponent;```

used that as starter code pumped out by claude3

makes a simple graph from jan to mar on x axis
10 - 30 on y axis

gonna play with this a bit and see how it goes

still not seeing the code completion for markdown files



i might just switch to raw html css and javasript since 
its getting in the way of my libraries that way i can learn
more about regular javascript. because its not a language im 
strong with



## 6:11 pm
ok yeah i simplified everything.
no more react until i've built a few more projects


# Oct 30
I quite frankly have had a enough of neovim and all these other terminal
text editors they are to much too configure when i can have something
work out of the box or with the click of a button. with vs code
and vs codium. i'm going to stop hopping. if zed comes to windows
i'll happily try that, but other than that. i've had enough.


# 10:46 AM

## 11:48 AM

ok got something to appear on the react page

## 11:52 AM

Having trouble decreasing the spacing between the different bars.

i think i'll skip that part and focus on the functionality of bubble sort and displaying that as each section changes.


# 2:14 PM
did some more stuff
did a basic bubble sort based on some pseudo code making some test cases with jest now 


## 4:46 pm
back with vengence


currently setting up a test file



## 5:15 pm 
ok got the unit tests setup now need to test and bubble sort works

i now need to work on hooking up the algorithm to the visualization bar

this is the meat of the problem

so i'll have to display the data in the array, then i'll need to run through
the algorithm stopping at each point to highlight what element was just changed and then continue the process
so i can either but a bunch of delays in between each alg or i can run through and store the each of the states
and play them back

i think taking a snapshot of each of the states will be a good long term approach. it will be expensive memory wise though.

i think for now i need to make a test data file and hook it up to the alg function then put some delays just
so i get some visual progess.


## 6:33 pm

been reading the react documentation trying to figure out how to handle events and found this interesting section at
https://legacy.reactjs.org/docs/rendering-elements.html

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to root.render().

Consider this ticking clock example:

```
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

that will be important when making each snapshot. but i continue with the project


## 6:51 pm
i've been trying to add a button and event handler to the same file for testing purposes, but it has
not been working very well. but i accidentally caused the graph to change while tring to get the event
handler button to work

so i just need to make a new component control with a event hadler and somehow attatch it to the graph

# Nov 4
took the weekend off to work on dactyl skeletyl. can't get that one working either :(

yah no more react documentation is too different and i am too unfamiliar with js to begin with.

final.


# Nov 5

12:20pm

got an alert to appear on the other page, but i need. i lost my tests. gonna have to figure that out 


need to move the data;





