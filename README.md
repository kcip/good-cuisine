# Food Recipe App
# PROJECT 3 PLANNING WORKSHEET README TEMPLATE <!-- omit in toc -->

## Overview
(http://slow-potato.surge.sh/)
**goodCuisine** 

Good Cuisine is a food recipe website to make your life easier in the kitchen. The website offers suggestions based on time, cuisine, method of cooking & ease of cooking. 

### Team Members
- [Christian](https://github.com/chris-m18)
- [Johnathan](https://github.com/Johnathan238)
- [Jacky](https://github.com/jackyclyang) 
- [Scott](https://github.com/kcip) (Team Lead)

### Team Expectations
>  Review and update the original Group Expectations document that you created for the Blog App Exercise and link to it here.
Team values and expectations can be found on our project's [Group Expectation Setting Document](https://git.generalassemb.ly/sei-nyc-neptune/ux-sei-collab-p3/blob/master/group-expectations.md).

<br>

## Sprint 1

> Implement basic CRUD features.
> Make website match UX design
> Mobile responsive
> Meet matrix priorities

<br>

### Goals

- _CRUD,_
- _Make it as close as possible as the UX design._
- _For Sprint One, try to priortize features based on SEI & UX team priority matrix._
- _Mobile responsive._

<br>

### Client (Front End)

#### Wireframes

> https://www.figma.com/proto/sEf3KwkH9VsJH7swFQgGOo/iPhone?node-id=222%3A6142&scaling=min-zoom&hotspot-hints=0


#### Component Hierarchy

>  https://whimsical.com/8MGgACKZvbTFPS6nyuxLSP

<br>

### Server (Back End)

#### Database Schema 

`
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    videoURL:{ type: String, required: false},
    ingredients: [{ type: String, required: true }],
    equipment:[{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
    cuisine: { type: String, required: true },
    cooktime: { type: String, required: true },
    difficulty: { type: String, required: true },
    diet: [{ type: String, required: false }],
    cookingMethod:[{ type: String, required: false }],
    course:{ type: String, required: true },
    serving:{ type: String, required: true },
    keyword:[{ type: String, required: false }],
    saved: false
  },
  { timestamps: true }
)

module.exports = mongoose.model('recipes', Recipe)
`

#### Express Routes

 `
 router.get('/recipes', controllers.getRecipes)
router.get('/recipes/:id', controllers.getRecipe)
router.post('/recipes', controllers.createRecipe)
router.put('/recipes/:id', controllers.updateRecipe)
router.delete('/recipes/:id', controllers.deleteRecipe)
 
 `

<br>

### Libraries

> Use this section to list all supporting libraries and dependencies and their role in the project.

|    Library     | Description                                |
| :------------: | :----------------------------------------- |
|     React      | _Frontend to make design as close as possible to UX design._ |
|  React Router  | _Routes routes_ |
|    Express     | _._ |
| Express Router | _Lorem ipsum dolor sit amet, consectetur._ |
|    Mongoose    | _._ |
|    Mongoose    | _._ |
|    Mongoose    | _._ |

<br>

***

## Plan Your Next Sprint

> Filter by category
> Login


***

## Code Issues & Resolutions

> We has a few small Git issues, but nothing major.

***

## Change Log

> We made no changes. We were able to implement all the features that were discussed with the UX team in the matrix.
