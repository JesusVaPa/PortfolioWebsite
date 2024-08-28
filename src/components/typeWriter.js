export function typeWriterEffect(elementId, speed) {
    const textElement = document.getElementById(elementId);
    const text = textElement.textContent;
    textElement.textContent = '';
  
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  }
  