const dateInput = document.getElementById('dateOfBirht')

  dateInput.addEventListener('change', () => {
      const dateInput = document.getElementById('dateOfBirht').value;
      const birthDate = new Date(dateInput);
      const currentDate = new Date(); 
      const messageResult = document.getElementById('message-result');


      const difference = currentDate - birthDate;

      const age = Math.floor(difference / 31536000000);

      if (age >= 18) {
        messageResult.textContent = "es mayor de edad";
      } else {
        messageResult.textContent = "es menor de edad";
      }

  })