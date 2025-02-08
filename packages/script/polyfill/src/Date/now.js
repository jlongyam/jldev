if (!Date.now) {
  Date.now = function now() {
    return Number(new Date());
  };
}