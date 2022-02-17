const saveButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      console.log("ID: " + id);
  
      let response = await fetch(`/plant/${id}`, {
        method: 'POST',
        body: JSON.stringify({ id: id.value }),
        headers: {
        'Content-Type': 'application/json',
      },
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
   