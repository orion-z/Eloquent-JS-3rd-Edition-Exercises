function reliableMultiply(a, b) {
  try {
  	let x = primitiveMultiply(a, b);
    return x;
  } catch (e) {
  	if (e instanceof MultiplicatorUnitFailure) {
    	reliableMultiply(a, b);
    }
  }
}
