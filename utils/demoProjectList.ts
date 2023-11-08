/* This is an object that lists all the demos for the site. The schema is as fallows:

title: Title of the demo
image: path to the image of the thumbnail for the demo
description: a summary of the project
path: path to the project page itself

*/

interface Project {
  title: string;
  image: string;
  description: string;
  path: string;
}

export const demoProjectList: Project[]= [
  {
    title: "Simple Calculator",
    image: "./img/demo/calculator/thumbnail.svg",
    description: "A simple calculator",
    path: "/demo/calculator",
  },
]