// I'm guessing that since a database can't store code directly, I should instead make a number of functions that do the technical consequences, and have the database instead store resulting strings?

//this is the function that is actually called and will determine what happens underneath?? Might need to be in the main body, idk
export function handler(id) {
  switch (id) {
    case 1:
      return hpDown(1)
    case 2:
      return hpDown(2)
  }
}

function hpDown(hit) {
  return console.log(`Hp goes down by`, hit)
}
