while (notDone()) {
    moveForward();
    if (isPathForward()) {
      if (isPathRight()) {
        turnRight();
      } else {
        if (isPathLeft()) {
          turnLeft();
        }
      }
    } else {
      if (isPathLeft()) {
        turnLeft();
      } else {
        turnRight();
      }
    }
  }