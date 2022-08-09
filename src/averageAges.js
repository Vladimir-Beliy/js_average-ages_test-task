
'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  const men = century
    ? people.filter((p) => p.sex === 'm' && Math.ceil(p.died / 100) === century)
    : people.filter((p) => p.sex === 'm');

  let sum = 0;

  men.forEach((m) => sum += m.died - m.born);

  return sum/men.length;
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average age of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * Hint: To check if a woman has children you should find someone who mention
 * her as mother.
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  const women = withChildren
    ? people.filter((p) => p.sex === 'f'
      && people.find((p1) => p1.mother === p.name))
    : people.filter((p) => p.sex === 'f');

  let sum = 0;

  women.forEach((w) => sum += w.died - w.born);

  return sum / women.length;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a child and his or her
 * mother in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for sons and their mothers.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  const children = onlyWithSon
    ? people.filter(p => p.sex === 'm'
      && people.some(m => m.name === p.mother))
    : people.filter(p => people.some(m => m.name
      === p.mother));

  let sum = 0;

  children.forEach((ch) => sum += ch.born - people.find(
    (m) => m.name === ch.mother
  ).born);

  return sum / children.length;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
