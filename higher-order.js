function repeat (fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}