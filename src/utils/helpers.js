export function isObjectEmpty(obj) {
  // because Object.keys(new Date()).length === 0;
  // we have to do some additional checks
  return (
    obj && // null and undefined check
    Object.keys(obj).length === 0 &&
    obj.constructor === Object
  );
}
