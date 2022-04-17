/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('classType').del()
  await knex('classType').insert([
    { class: 'rogue' },
    { class: 'warrior' },
    { class: 'mage' },
  ])
}
