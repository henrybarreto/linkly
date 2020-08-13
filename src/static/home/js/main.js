/* eslint-disable require-jsdoc */
const form = useElement('#link_form');
const formInputFullLink = useElement('#link_form__input--full_link');
const formInputShortLink = useElement('#link_form__input--short_link');
const formButton = useElement('#link_form__button');
const linkResult = useElement('#link_result');
const linkResultText = useElement('#link_result__text');

function useInput(element) {
  const value = (function(element) {
    return element.value;
  })(element);
  const setValue = function(value) {
    return element.value = value;
  };
  return [value, setValue];
}
function useText(element) {
  const value = (function(element) {
    return element.textContent;
  })(element);
  const setValue = function(value) {
    return element.textContent = value;
  };
  return [value, setValue];
}
function useElement(tag) {
  const element = document.querySelector(tag);
  // console.log(element);
  return element;
}
function useEvent(event, element, callback) {
  return element.addEventListener(event, callback);
}

async function requestRegisterLink(link, data) {
  const request =  await fetch(link, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  });
  console.log('Making request');
  return await request.json();
}

useEvent('submit', form, async function(event) {
  event.preventDefault();

  const [fullLink, setFullLink] = useInput(formInputFullLink);
  const [shortLink, setShortLink] = useInput(formInputShortLink);

  const [link, setLink] = useText(linkResultText);

  try {
    setLink('Loading...');
    const requestResponse = await requestRegisterLink('/link',
        {fullLink: fullLink, shortLink: shortLink});

    setLink(requestResponse.msg);
  } catch (e) {
    setLink('A connection error rised!');
    console.log(e);
  }
});
