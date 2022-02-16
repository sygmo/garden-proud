const saveButtonHandler = async (event) => {
    console.log("asas")
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/plant/${id}`, {
        method: 'POST',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to save plant');
      }
    }
  };
  document
    .querySelector('.save-button')
    .addEventListener('click', saveButtonHandler);
   