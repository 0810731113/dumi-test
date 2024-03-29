function Element({ tagName, props, children }) {
  if (!(this instanceof Element)) {
    return new Element({ tagName, props, children });
  }
  this.tagName = tagName;
  this.props = props || {};
  this.children = children || [];
}

Element.prototype.render = function() {
  var el = document.createElement(this.tagName),
    props = this.props,
    propName,
    propValue;
  for (propName in props) {
    propValue = props[propName];
    el.setAttribute(propName, propValue);
  }

  this.children.forEach(function(child) {
    var childEl = null;
    if (child instanceof Element) {
      childEl = child.render();
    } else {
      childEl = document.createTextNode(child);
    }
    el.appendChild(childEl);
  });
  return el;
};

var elem = Element({
  tagName: 'ul',
  props: { class: 'list' },
  children: [
    Element({ tagName: 'li', children: ['item1'] }),
    Element({ tagName: 'li', children: ['item2'] }),
  ],
});
document.querySelector('body').appendChild(elem.render());
