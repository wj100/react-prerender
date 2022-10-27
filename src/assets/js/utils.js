const getScrollbarWidth = () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.style.overflow = 'scroll';
  const inner = document.createElement('div');
  container.appendChild(inner);
  const width = container.offsetWidth - inner.offsetWidth;
  document.body.removeChild(container);
  return width;
};
const setLocalStorage=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}
const getLocalStorage=(key)=>{
   return JSON.parse(localStorage.getItem(key))
}
export { getScrollbarWidth ,setLocalStorage,getLocalStorage};
