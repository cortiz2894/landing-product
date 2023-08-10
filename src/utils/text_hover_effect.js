// 🔡 Characters to cycle trough
let allowedCharacters = ['&','%','#','@','=','+','?'];

// 🎁 Function to return random character
function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
  return allowedCharacters[randomIndex];
}

// 🏭 Creates new event handler with private variables
function createEventHandler() {
  // 🏃‍♂️ Keep track of event in progress
  let isInProgress = false;

  // ⏱ Delay between text updates
  const BASE_DELAY = 70;

  // 👇 Event handler implementation
  return function handleHoverEvent(e) {
    if (isInProgress) {
      return;
    }

    const text = e.target.innerHTML;
    const randomizedText = text.split('').map(getRandomCharacter).join('');

    for (let i = 0; i < text.length; i++) {
      isInProgress = true;

      setTimeout(() => {
        const nextIndex = i + 1;
        e.target.innerHTML = `${text.substring(
          0,
          nextIndex
        )}${randomizedText.substring(nextIndex)}`;

        if (nextIndex === text.length) {
          isInProgress = false;
        }
      }, i * BASE_DELAY);
    }
  };
}
const activeHover = () => {
    return document.querySelectorAll('.text-hover-effect').forEach((element) => {
      // 🪄 Creates new event handler for the current Anchor (<a>) element
      const eventHandler = createEventHandler();
      element.addEventListener('mouseover', eventHandler);
    });
}

export default activeHover