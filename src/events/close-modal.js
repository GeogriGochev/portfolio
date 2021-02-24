const closeModal = () => {
    document.querySelectorAll('div.overlay, body,.modal').forEach(function(element) {
      element.classList.remove('active')
      
    });
}

export default closeModal;