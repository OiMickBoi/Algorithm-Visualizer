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


