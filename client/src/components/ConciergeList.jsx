import React from 'react'
import { useParams } from 'react-router-dom';
const ConciergeList = (props) => {
 const { category } = useParams();
 let selectedRecipes;

 if (category === 'quick') {
  selectedRecipes = props.data.filter(recipe => recipe.cooktime <= '30')
 } else if (category === 'easy') {
  selectedRecipes = props.data.filter(recipe => recipe.difficulty.toLowerCase() === category)
 } else if (category === 'american') {
  selectedRecipes = props.data.filter(recipe => recipe.cuisine.toLowerCase() === 'american')
 } else {
  selectedRecipes = props.data.filter(recipe => recipe.course.toLowerCase() === 'dinner')
 }
 console.log(selectedRecipes)
 return (
  <>
   {selectedRecipes && <div></div>}
  </>
 )
}
export default ConciergeList;
