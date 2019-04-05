test('should register a game', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  await newGame(player1, player2);

  expect(await getPlayer1Title()).toBe(player1);
  expect(await getPlayer2Title()).toBe(player2);
});

function getPlayer2Title() {
  return page.$eval('[data-testid="player2-title"]', el => el.innerText);
}

function getPlayer1Title() {
  return page.$eval('[data-testid="player1-title"]', el => el.innerText);
}

async function newGame(player1, player2) {
  await page.type('[data-testid="player1"]', player1);
  await page.type('[data-testid="player2"]', player2);
  await page.click('[data-testid="new-game"]');
}

function navigate() {
  return page.goto('http://localhost:3000');
}
