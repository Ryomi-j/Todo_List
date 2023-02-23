export const makeDOM = (domName, propertyList) => {
  const dom = document.createElement(domName);
  Object.keys(propertyList).map((key) => {
    dom[key] = propertyList[key];
  });
  return dom;
};

export const appendChildrenList = (parentDOM, childrenList) => {
  if (!Array.isArray(childrenList)) return;

  childrenList.forEach((children) => {
    parentDOM.appendChild(children);
  });
};

export const getDOM = (target) => {
  return document.querySelector(target);
};

export const getAllDOM = (target) => {
  return document.querySelectorAll(target);
};
