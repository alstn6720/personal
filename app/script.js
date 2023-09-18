import React from 'https://cdn.skypack.dev/react';
import { render } from 'https://cdn.skypack.dev/react-dom';
import gsap from 'https://cdn.skypack.dev/gsap';

const ROOT_NODE = document.querySelector('#app');

const CARDS = [
{
  id: 1,
  imageUrl: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  title: 'Big Ron',
  subtitle: 'Bonsai' },

{
  id: 2,
  imageUrl: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  title: 'Big Fred',
  subtitle: 'Foliage' },

{
  id: 3,
  imageUrl: 'https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  title: 'Big Stan',
  subtitle: 'Cactus' }];



const MediaCard = ({ data: { subtitle, title, imageUrl: src } }) => {
  const cardRef = React.useRef(null);
  React.useEffect(() => {
    const UPDATE = ({ x }) => {
      // Calculate position based on center of card and +- window width
      const bounds = cardRef.current.getBoundingClientRect();
      const center = bounds.left + bounds.width / 2;
      const newX = gsap.utils.mapRange(center - window.innerWidth, center + window.innerWidth, -100, 100, x);
      gsap.set(cardRef.current, {
        '--x': newX });

    };
    window.addEventListener('pointermove', UPDATE);
    return () => {
      window.removeEventListener('pointermove', UPDATE);
    };
  }, []);
  return /*#__PURE__*/(
    React.createElement("a", { ref: cardRef, className: "media-card" }, /*#__PURE__*/
    React.createElement("span", { className: "media-card__img-container" }, /*#__PURE__*/
    React.createElement("img", { className: "media-card__img", src: src })), /*#__PURE__*/

    React.createElement("span", { className: "media-card__title" }, title), /*#__PURE__*/
    React.createElement("span", { className: "media-card__subtitle" }, subtitle)));


};

const App = () => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null,
    CARDS.map(card => /*#__PURE__*/React.createElement(MediaCard, { key: card.id, data: card }))));


};

render( /*#__PURE__*/React.createElement(App, null), ROOT_NODE);