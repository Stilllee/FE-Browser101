"use strict";
import PopUp from "./popup.js";
import { Reason, GameBuilder } from "./game.js";

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
  .gameDuration(5)
  .carrotCount(3)
  .bugCount(3)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "REPLAY❓";
      break;
    case Reason.win:
      message = "YOU WON 🎉";
      break;
    case Reason.lose:
      message = "YOU LOST 💩";
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
