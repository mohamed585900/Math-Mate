context = c.getContext("2d");
const bird = new Image();
bird.src = "bird.png";
birdX = birdDY = score = bestScore = 0;
interval = birdSize = pipeWidth = topPipeBottomY = 24;
birdY = pipeGap = 200;
canvasSize = pipeX = 400;
c.onclick = () => (birdDY = 9) ;
setInterval(() => {
  context.fillStyle = "skyblue";
  context.fillRect(0,0,canvasSize,canvasSize); // Draw sky
  birdY -= birdDY -= 0.5; // Gravity
  context.drawImage(bird, birdX, birdY, birdSize * (524/374), birdSize); // tekend te vogel
  context.fillStyle = "green";
  pipeX -= 8; // Move pipe
  pipeX < -pipeWidth && // Pipe off screen?
    ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random())); // reset the pipen en map
  context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); // Draw top pipe
  context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); // tekenend de onderlaag
  context.fillStyle = "black";
  context.fillText(score++, 9, 25); // Increase and draw score
  bestScore = bestScore < score ? score : bestScore; // New best score?
  context.fillText(`Best: ${bestScore}`, 9, 50); // Draw best score
  (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) && pipeX < birdSize * (524/374))// wanner de vogel een pijp raakt
   || birdY > canvasSize) && // Bird falls off screen
  ((birdDY = 0), (birdY = 200), (pipeX = canvasSize), (score = 0)); // vogel sterft
}, interval)