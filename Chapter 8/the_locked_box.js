function withBoxUnlocked(body) {
  try {
    box.unlock();
  	body();
  }
  finally {
  	box.lock();
  }
}
